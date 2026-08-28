# Feature register

## Purpose

This is the authoritative list of project capabilities and their independent implementation, verification, and release states. “Implemented” never means “verified” or “released.”

## Status definitions

Implementation: `PROPOSED`, `APPROVED`, `IN_PROGRESS`, `IMPLEMENTED`, `DEFERRED`, `REMOVED`.

Verification: `NOT_PLANNED`, `PLANNED`, `PARTIAL`, `PASSED`, `FAILED`, `NOT_APPLICABLE`.

Release: `UNSCHEDULED`, `TARGETED`, `CANDIDATE`, `RELEASED`, `WITHDRAWN`.

## Feature summary

| ID | Feature | Owner | Requirements | Repositories/components | Implementation | Verification | Target release | Released version | Detail |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `FEAT-001` | `{{FEATURE_NAME}}` | `{{OWNER}}` | `{{REQ_IDS}}` | `{{REPOSITORIES_OR_COMPONENTS}}` | `{{IMPLEMENTATION_STATUS}}` | `{{VERIFICATION_STATUS}}` | `{{RELEASE_OR_BACKLOG}}` | `{{VERSION_OR_NONE}}` | `{{FEATURE_RECORD_LINK_OR_LOCATION}}` |

## Release eligibility rules

A feature may enter a release candidate only when:

- its requirements and acceptance criteria are approved;
- implementation is complete on every affected repository/component;
- required tests and manual checks have named owners and environments;
- its verification row links to current evidence from the candidate artefacts;
- security, privacy, accessibility, compatibility, migration, operational, and documentation effects are resolved or explicitly risk-accepted; and
- the release and rollback sequence is defined where multiple components are involved.

## Deferred and removed features

| ID | Decision | Rationale | User/data/migration effect | Approved by | Date |
| --- | --- | --- | --- | --- | --- |
| `{{FEATURE_ID}}` | `{{DEFERRED_OR_REMOVED}}` | `{{RATIONALE}}` | `{{EFFECT}}` | `{{APPROVER}}` | `{{DATE}}` |
