import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

export const ADOPTION_FILES = Object.freeze([
  ["AiReady.md", "AiReady.md"],
  ["templates/AGENTS.md", "AGENTS.md"],
  ["templates/CONTRIBUTING.md", "CONTRIBUTING.md"],
  ["templates/SECURITY.md", "SECURITY.md"],
  ["templates/docs/README.md", "docs/README.md"],
  ["templates/docs/architecture.md", "docs/architecture.md"],
  ["templates/docs/repository-ecosystem.md", "docs/repository-ecosystem.md"],
  ["templates/docs/testing.md", "docs/testing.md"],
  ["templates/docs/operations.md", "docs/operations.md"],
  ["templates/docs/decision-record.md", "docs/decision-record-template.md"],
  ["templates/.github/pull_request_template.md", ".github/pull_request_template.md"],
  ["templates/.github/CODEOWNERS", ".github/CODEOWNERS"],
  ["templates/.github/ISSUE_TEMPLATE/ai-task.yml", ".github/ISSUE_TEMPLATE/ai-task.yml"],
  ["templates/.github/workflows/ai-ready.yml", ".github/workflows/ai-ready.yml"],
  ["templates/scripts/check-ai-ready.mjs", "scripts/check-ai-ready.mjs"],
]);

const REQUIRED_HEADINGS = Object.freeze({
  "AiReady.md": ["# Artificial intelligence (AI) coding readiness assessment", "## Hard blockers", "## Result", "## Approval"],
  "AGENTS.md": ["## Objective", "## Scope and authority", "## Non-negotiable invariants", "## Required workflow"],
  "CONTRIBUTING.md": ["# Contributing"],
  "SECURITY.md": ["# Security policy"],
  "docs/architecture.md": ["# Architecture", "## Data flow and trust boundaries", "## Source ownership"],
  "docs/repository-ecosystem.md": ["# Repository ecosystem", "## Repository inventory and authority", "## Dependency and interface contracts", "## Release and recovery sequence"],
  "docs/testing.md": ["# Testing and quality contract", "## Complete gate", "## Evidence boundary"],
  "docs/operations.md": ["# Operations and recovery", "## Preflight", "## Rollback and restore"],
});

const PLACEHOLDER = /\{\{[A-Z0-9_]+\}\}/gu;

/** Copy the starter set without replacing any target-owned file. */
export function initialiseProject(frameworkRoot, targetRoot) {
  const sourceRoot = resolve(frameworkRoot);
  const target = resolve(targetRoot);
  if (!existsSync(target) || !statSync(target).isDirectory()) {
    throw new TypeError(`Target must be an existing directory: ${target}`);
  }

  const copied = [];
  const skipped = [];
  for (const [sourceRelative, targetRelative] of ADOPTION_FILES) {
    const source = join(sourceRoot, sourceRelative);
    const destination = join(target, targetRelative);
    if (!existsSync(source)) throw new Error(`Framework template is missing: ${sourceRelative}`);
    if (existsSync(destination)) {
      skipped.push(targetRelative);
      continue;
    }
    mkdirSync(dirname(destination), { recursive: true });
    cpSync(source, destination, { errorOnExist: true, force: false });
    copied.push(targetRelative);
  }
  return { target, copied, skipped };
}

/** Report structural readiness evidence without making an effectiveness claim. */
export function auditProject(targetRoot) {
  const target = resolve(targetRoot);
  const checks = [];
  if (!existsSync(target) || !statSync(target).isDirectory()) {
    return result(target, [{ id: "target", status: "fail", message: "Target is not an existing directory." }]);
  }

  for (const [file, headings] of Object.entries(REQUIRED_HEADINGS)) {
    const path = join(target, file);
    if (!existsSync(path)) {
      checks.push({ id: `file:${file}`, status: "fail", message: `Missing required file: ${file}` });
      continue;
    }
    const source = readFileSync(path, "utf8");
    checks.push({ id: `file:${file}`, status: "pass", message: `Found ${file}.` });
    for (const heading of headings) {
      checks.push(source.includes(heading)
        ? { id: `heading:${file}:${heading}`, status: "pass", message: `${file} contains ${heading}.` }
        : { id: `heading:${file}:${heading}`, status: "fail", message: `${file} is missing required heading: ${heading}` });
    }
  }

  const workflowDirectory = join(target, ".github", "workflows");
  const workflows = existsSync(workflowDirectory)
    ? readdirSync(workflowDirectory).filter((name) => /\.ya?ml$/u.test(name))
    : [];
  checks.push(workflows.length
    ? { id: "ci", status: "pass", message: `Found ${workflows.length} CI workflow file(s).` }
    : { id: "ci", status: "fail", message: "No CI workflow found under .github/workflows/." });

  const inspected = adoptionTextFiles(target);
  const unresolved = inspected.flatMap((file) => {
    const source = readFileSync(file, "utf8");
    return [...source.matchAll(PLACEHOLDER)].map((match) => ({ file: relative(target, file), value: match[0] }));
  });
  checks.push(unresolved.length
    ? { id: "placeholders", status: "fail", message: `${unresolved.length} unresolved placeholder occurrence(s) remain.`, details: unresolved }
    : { id: "placeholders", status: "pass", message: "No unresolved placeholders remain in assessed control files." });

  return result(target, checks);
}

function adoptionTextFiles(target) {
  const selected = new Set([
    ...Object.keys(REQUIRED_HEADINGS),
    "docs/README.md",
    "docs/decision-record-template.md",
    ".github/pull_request_template.md",
    ".github/CODEOWNERS",
    ".github/ISSUE_TEMPLATE/ai-task.yml",
    ".github/workflows/ai-ready.yml",
  ]);
  return [...selected].map((file) => join(target, file)).filter(existsSync);
}

function result(target, checks) {
  const failed = checks.filter((check) => check.status === "fail").length;
  return {
    schemaVersion: 1,
    target,
    structuralStatus: failed ? "fail" : "pass",
    summary: { passed: checks.length - failed, failed, total: checks.length },
    limitation: "Structural checks do not prove that documented controls are accurate, effective, or followed.",
    checks,
  };
}
