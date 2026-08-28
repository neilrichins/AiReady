#!/usr/bin/env node

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { checkFramework } from "../lib/framework.js";
import { auditProject, initialiseProject } from "../lib/readiness.js";

const frameworkRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [command, targetArgument = ".", ...options] = process.argv.slice(2);
const json = options.includes("--json");

try {
  if (command === "init") {
    const result = initialiseProject(frameworkRoot, targetArgument);
    print(result, json, [
      `Initialised ${result.target}`,
      `Copied: ${result.copied.length}`,
      `Skipped existing files: ${result.skipped.length}`,
      "Review every copied file and replace all {{PLACEHOLDER}} values.",
    ]);
  } else if (command === "audit") {
    const result = auditProject(targetArgument);
    print(result, json, humanAudit(result));
    if (result.structuralStatus !== "pass") process.exitCode = 1;
  } else if (command === "framework-check") {
    const result = checkFramework(targetArgument);
    print(result, json, result.status === "pass"
      ? [`Framework validation passed (${result.checkedMarkdownFiles} Markdown files checked).`]
      : ["Framework validation failed:", ...result.failures.map((failure) => `- ${failure}`)]);
    if (result.status !== "pass") process.exitCode = 1;
  } else {
    usage();
    process.exitCode = command ? 1 : 0;
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}

function humanAudit(result) {
  const lines = [
    `Structural audit: ${result.structuralStatus.toUpperCase()}`,
    `Checks: ${result.summary.passed} passed, ${result.summary.failed} failed`,
  ];
  for (const check of result.checks.filter((item) => item.status === "fail")) lines.push(`- ${check.message}`);
  lines.push(`Limitation: ${result.limitation}`);
  return lines;
}

function print(value, asJson, lines) {
  if (asJson) console.log(JSON.stringify(value, null, 2));
  else lines.forEach((line) => console.log(line));
}

function usage() {
  console.log(`AI Ready

Usage:
  aiready init <existing-target-directory> [--json]
  aiready audit <target-directory> [--json]
  aiready framework-check <framework-directory> [--json]

init never overwrites an existing target file.
audit performs structural checks; it does not certify control effectiveness.`);
}
