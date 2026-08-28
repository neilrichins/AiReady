# Adoption guide

## Stage 1: Establish ownership

Name the technical owner, approved AI tools, intended use, prohibited actions, data classification, review authority, and escalation path. Do not enable write-capable agents before these decisions exist.

## Stage 2: Give the repository a contract

Copy and complete:

- `AiReady.md`;
- `AGENTS.md`;
- the architecture, testing, and operations documents;
- the repository-ecosystem document, even when the project is currently standalone;
- the security and contribution documents; and
- the issue and pull-request templates.

Remove irrelevant boilerplate rather than making false claims. Record genuine exclusions as `NOT APPLICABLE` with reasons.

## Stage 3: Make quality reproducible

Create one complete local quality command. It should install or verify exact dependencies, build, test, lint, perform static analysis, validate documentation, and generate required artefacts from a clean checkout. CI should run the same gate.

## Stage 4: Bound authority

Separate read-only analysis, source edits, external communication, deployment, migration, publishing, deletion, and cost-bearing operations. Give agents the least authority required for the approved use. Require fresh human approval for material external effects.

## Stage 5: Validate untrusted output

Treat generated code, commands, configuration, structured data, database queries, markup, URLs, dependency suggestions, and infrastructure changes as untrusted. Apply schemas, allowlists, escaping, parameterisation, sandboxing, tests, and human review appropriate to the boundary.

## Stage 6: Prove recovery

For stateful systems, verify backups, preflight checks, idempotent migrations, rollback, restore, and post-change checks. Written recovery steps without a tested restore are partial evidence.

## Stage 7: Increase automation gradually

Start with read-only analysis, then human-applied suggestions, isolated edits, reviewed pull requests, and only then bounded automation. Expand authority only after evidence shows the preceding level is reliable.

For interconnected repositories, begin with cross-repository read access and single-repository write access. Expand write authority only after change-set traceability, compatibility tests, release sequencing, and coordinated rollback have been demonstrated.
