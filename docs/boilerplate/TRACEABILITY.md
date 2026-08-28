# Delivery traceability

## Purpose

This matrix connects approved intent to released evidence. Every release-scoped requirement and feature must be traceable through implementation, verification, and release records.

| Requirement | Experience/design | Feature | Issue/change set | Repositories/components | Implementation | Tests/checks | Evidence | Checkpoint | Release | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `REQ-001` | `{{DESIGN_STATE_OR_REFERENCE}}` | `FEAT-001` | `{{LINK_OR_ID}}` | `{{LIST}}` | `{{COMMITS_OR_ARTEFACTS}}` | `{{TEST_IDS}}` | `{{EVIDENCE}}` | `{{IDENTIFIER_OR_NONE}}` | `{{VERSION_OR_NONE}}` | `{{STATUS}}` |

## Traceability rules

- Do not use a branch name alone as immutable implementation evidence.
- Record exact commits, immutable artefact identifiers, or signed release identifiers.
- Generated clients, schemas, packages, and documentation must trace to their authoritative source.
- When a requirement changes, review every linked feature, test, risk, operation, and release claim.
- When a journey, state, content rule, or design decision changes, review linked requirements, implementation, accessibility, tests, support, and release scope.
- When a test is removed or weakened, identify every requirement and release that loses evidence.
- A checkpoint link preserves delivery evidence but does not establish release qualification or approval.

## Untraced items

| Item | Missing link | Impact | Owner | Due | Release blocker |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{MISSING_TRACE}}` | `{{IMPACT}}` | `{{OWNER}}` | `{{DATE}}` | `{{YES_NO}}` |
