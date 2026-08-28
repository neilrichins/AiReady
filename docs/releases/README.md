# Release evidence examples

This directory contains project-neutral Markdown boilerplate for release evidence. Its location is an example within AI Ready, not a required structure for adopting projects.

Use the project's existing authoritative release system where one exists. Adapt these sections into that system or keep completed records wherever the project already controls release history.

## Available boilerplate

- [Release evidence record](RELEASE_EVIDENCE_TEMPLATE.md): complete evidence, approval, execution, result, and closure for an exact candidate.
- [Hotfix release evidence record](HOTFIX_RELEASE_EVIDENCE_TEMPLATE.md): explicitly constrained evidence and risk control for an urgent release.

The working [release-readiness record](../boilerplate/RELEASE_READINESS.md), [release checklist](../boilerplate/RELEASE_CHECKLIST.md), and [release process](../boilerplate/RELEASE_PROCESS.md) support the decision. This directory records what actually happened.

## Record rules

- Create one record for every candidate that reaches a release decision.
- Identify exact commits, component versions, configuration/schema versions, artefacts, and immutable digests where applicable.
- Record candidate-specific evidence, its environment and date, limitations, and accountable owner.
- Keep feature qualification, known defects, accepted risks, approval, execution, and post-release results distinct.
- Preserve rejected, failed, cancelled, and rolled-back records; they are part of the evidence history.
- Treat completed records as immutable. Make later corrections append-only, dated, attributable, and reasoned.
- For interconnected repositories or components, record the supported combination, coordinated change set, sequence, contract checks, and partial-failure recovery.
- Link to raw evidence rather than copying volatile output when an authoritative evidence system exists.

## Sensitive information

Do not store credentials, secrets, tokens, session data, request headers, personal or private data, private infrastructure details, unsafe recovery material, proprietary prompts, or unrestricted model output in a public release record. Retain sensitive evidence only in an authorised system and reference it using a safe identifier.

## Naming

A project may name records by version, candidate, date, change-set identifier, or another stable convention. Names must remain unique and must not imply that a failed or cancelled candidate was released.
