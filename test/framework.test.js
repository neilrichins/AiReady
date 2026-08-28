import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { checkFramework, checkMarkdownLinks, checkProvenance } from "../lib/framework.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

test("the framework satisfies its own file, link, template, and provenance contract", () => {
  const result = checkFramework(root);
  assert.deepEqual(result.failures, []);
  assert.equal(result.status, "pass");
  assert.ok(result.checkedMarkdownFiles >= 15);
});

test("the command-line interface emits machine-readable framework results", () => {
  const command = spawnSync(process.execPath, [join(root, "bin", "aiready.js"), "framework-check", root, "--json"], { encoding: "utf8" });
  assert.equal(command.status, 0, command.stderr);
  const result = JSON.parse(command.stdout);
  assert.equal(result.status, "pass");
  assert.equal(result.schemaVersion, 1);
});

test("Markdown validation detects missing relative targets and ignores external links", () => {
  const target = mkdtempSync(join(tmpdir(), "ai-ready-links-"));
  writeFileSync(join(target, "README.md"), "[missing](docs/no.md) [web](https://example.com)", "utf8");
  assert.deepEqual(checkMarkdownLinks(target), ["README.md links to missing path: docs/no.md"]);
});

test("provenance validation rejects workstation paths and private key material", () => {
  const target = mkdtempSync(join(tmpdir(), "ai-ready-provenance-"));
  mkdirSync(join(target, "docs"));
  const localPath = ["", "Users", "example", "private"].join("/");
  const privateKeyMarker = ["-----BEGIN", "PRIVATE", "KEY-----"].join(" ");
  writeFileSync(join(target, "docs", "unsafe.md"), `Local: ${localPath}\n${privateKeyMarker}`, "utf8");
  const failures = checkProvenance(target);
  assert.ok(failures.some((failure) => failure.includes("macOS user path")));
  assert.ok(failures.some((failure) => failure.includes("private key material")));
});
