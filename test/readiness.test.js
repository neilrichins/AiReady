import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { auditProject, initialiseProject } from "../lib/readiness.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

test("init copies the complete starter set and never overwrites existing files", () => {
  const target = mkdtempSync(join(tmpdir(), "ai-ready-init-"));
  writeFileSync(join(target, "AGENTS.md"), "existing instructions", "utf8");
  const result = initialiseProject(root, target);
  assert.ok(result.copied.includes("AiReady.md"));
  assert.ok(result.copied.includes("docs/architecture.md"));
  assert.ok(result.copied.includes("docs/repository-ecosystem.md"));
  assert.ok(result.skipped.includes("AGENTS.md"));
  assert.equal(readFileSync(join(target, "AGENTS.md"), "utf8"), "existing instructions");
});

test("audit rejects unresolved placeholders and passes a structurally completed starter set", () => {
  const target = mkdtempSync(join(tmpdir(), "ai-ready-audit-"));
  initialiseProject(root, target);
  const incomplete = auditProject(target);
  assert.equal(incomplete.structuralStatus, "fail");
  assert.ok(incomplete.checks.find((check) => check.id === "placeholders")?.details.length > 0);

  for (const check of incomplete.checks.find((item) => item.id === "placeholders").details) {
    const path = join(target, check.file);
    const source = readFileSync(path, "utf8");
    writeFileSync(path, source.replaceAll(check.value, "REVIEWED"), "utf8");
  }
  const complete = auditProject(target);
  assert.equal(complete.structuralStatus, "pass");
  assert.match(complete.limitation, /do not prove/u);

  const standaloneCheck = spawnSync(process.execPath, [join(target, "scripts", "check-ai-ready.mjs")], { cwd: target, encoding: "utf8" });
  assert.equal(standaloneCheck.status, 0, standaloneCheck.stderr);
  assert.match(standaloneCheck.stdout, /structure passed/u);
});

test("audit reports missing target and required controls without throwing", () => {
  const missing = auditProject(join(tmpdir(), "ai-ready-target-that-does-not-exist"));
  assert.equal(missing.structuralStatus, "fail");
  assert.equal(missing.summary.failed, 1);

  const empty = mkdtempSync(join(tmpdir(), "ai-ready-empty-"));
  const result = auditProject(empty);
  assert.equal(result.structuralStatus, "fail");
  assert.ok(result.checks.some((check) => check.id === "file:AiReady.md"));
});
