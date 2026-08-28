import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { ADOPTION_FILES } from "./readiness.js";

const REQUIRED_FRAMEWORK_FILES = Object.freeze([
  "README.md",
  "AiReady.md",
  "AGENTS.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "CODE_OF_CONDUCT.md",
  "CHANGELOG.md",
  "LICENSE",
  "package.json",
  "bin/aiready.js",
  "lib/README.md",
  "docs/README.md",
  ".github/workflows/quality.yml",
]);

const TEXT_EXTENSIONS = new Set([".md", ".js", ".json", ".yml", ".yaml", ".txt"]);
const PROVENANCE_PATTERNS = Object.freeze([
  { name: "macOS user path", pattern: /\/Users\/[A-Za-z0-9._-]+\//u },
  { name: "Linux user path", pattern: /\/home\/[A-Za-z0-9._-]+\//u },
  { name: "Windows user path", pattern: /[A-Za-z]:\\Users\\[^\\\s]+\\/u },
  { name: "cloud account ARN", pattern: /arn:aws(?:-us-gov|-cn)?:[^\s:]*:[^\s:]*:\d{12}:/u },
  { name: "private IPv4 address", pattern: /\b(?:10(?:\.\d{1,3}){3}|192\.168(?:\.\d{1,3}){2}|172\.(?:1[6-9]|2\d|3[01])(?:\.\d{1,3}){2})\b/u },
  { name: "private key material", pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/u },
]);

/** Validate the distributable framework, its links, and generic provenance boundaries. */
export function checkFramework(rootDirectory) {
  const root = resolve(rootDirectory);
  const failures = [];
  for (const file of REQUIRED_FRAMEWORK_FILES) {
    if (!existsSync(join(root, file))) failures.push(`Missing required framework file: ${file}`);
  }
  for (const [source] of ADOPTION_FILES) {
    if (!existsSync(join(root, source))) failures.push(`Missing adoption template: ${source}`);
  }

  failures.push(...checkMarkdownLinks(root));
  failures.push(...checkProvenance(root));

  const templateFiles = ADOPTION_FILES.map(([source]) => source).filter((source) => source.startsWith("templates/")
    && !source.includes("workflows/")
    && !source.includes("scripts/")
    && !source.includes("ISSUE_TEMPLATE/")
    && !source.endsWith("/README.md"));
  for (const file of templateFiles) {
    const source = readFileSync(join(root, file), "utf8");
    if (!/\{\{[A-Z0-9_]+\}\}/u.test(source)) failures.push(`Adoption template has no review placeholder: ${file}`);
  }

  const executable = join(root, "bin", "aiready.js");
  if (existsSync(executable) && !readFileSync(executable, "utf8").startsWith("#!/usr/bin/env node")) {
    failures.push("bin/aiready.js is missing its portable Node.js shebang.");
  }

  return {
    schemaVersion: 1,
    root,
    status: failures.length ? "fail" : "pass",
    checkedMarkdownFiles: walk(root).filter((file) => extname(file) === ".md").length,
    failures,
  };
}

/** Return deterministic failures for broken local Markdown links. */
export function checkMarkdownLinks(rootDirectory) {
  const root = resolve(rootDirectory);
  const failures = [];
  const pattern = /!?\[[^\]]*\]\(([^)]+)\)/gu;
  for (const file of walk(root).filter((candidate) => extname(candidate) === ".md")) {
    const source = readFileSync(file, "utf8");
    for (const match of source.matchAll(pattern)) {
      let target = match[1].trim();
      if (!target || target.startsWith("#") || /^(?:https?:|mailto:)/iu.test(target) || target.includes("{{")) continue;
      if (target.startsWith("<") && target.endsWith(">")) target = target.slice(1, -1);
      target = target.split("#", 1)[0].split(/\s+['"]/u, 1)[0];
      const resolved = resolve(dirname(file), decodeURIComponent(target));
      if (!existsSync(resolved)) failures.push(`${relative(root, file)} links to missing path: ${target}`);
    }
  }
  return failures;
}

/** Detect common workstation, account, network, and private-key leakage patterns. */
export function checkProvenance(rootDirectory) {
  const root = resolve(rootDirectory);
  const failures = [];
  for (const file of walk(root).filter((candidate) => TEXT_EXTENSIONS.has(extname(candidate)))) {
    const source = readFileSync(file, "utf8");
    for (const check of PROVENANCE_PATTERNS) {
      if (check.pattern.test(source)) failures.push(`${relative(root, file)} contains possible ${check.name}.`);
    }
  }
  return failures;
}

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === ".git" || entry.name === "node_modules") return [];
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : statSync(path).isFile() ? [path] : [];
  });
}
