import { existsSync, readFileSync } from "node:fs";

const required = [
  "AiReady.md",
  "AGENTS.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "docs/architecture.md",
  "docs/repository-ecosystem.md",
  "docs/testing.md",
  "docs/operations.md",
  ".github/pull_request_template.md",
  ".github/CODEOWNERS",
  ".github/ISSUE_TEMPLATE/ai-task.yml",
];
const failures = [];
for (const file of required) {
  if (!existsSync(file)) {
    failures.push(`Missing required AI readiness file: ${file}`);
    continue;
  }
  if (/\{\{[A-Z0-9_]+\}\}/u.test(readFileSync(file, "utf8"))) {
    failures.push(`Unresolved AI readiness placeholder: ${file}`);
  }
}

if (failures.length) {
  console.error(`AI readiness structure failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`AI readiness structure passed (${required.length} files checked).`);
console.log("This structural result does not prove that documented controls are accurate, effective, or followed.");
