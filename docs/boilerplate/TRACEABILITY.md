# Delivery traceability

## Purpose

This matrix connects approved intent to released evidence. Every release-scoped
requirement and feature must be traceable forward through design,
implementation, verification, validation, risk, and release records. Each
implementation, test, result, and release claim must also trace back to current
approved intent or an explicit authorised exception.

| Requirement/version | Parent/derived relationship | Experience/design | Feature | Risk | Issue/change set | Repositories/components | Implementation | Verification method/result | Validation method/result | Checkpoint | Release | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `REQ-001/{{VERSION}}` | `{{PARENT_SOURCE_OR_DERIVED_IDS}}` | `{{DESIGN_REFERENCE}}` | `FEAT-001` | `{{RISK_IDS}}` | `{{LINK_OR_ID}}` | `{{LIST}}` | `{{COMMITS_OR_ARTEFACTS}}` | `{{TEST_RESULT_AND_EVIDENCE_IDS}}` | `{{EVALUATION_RESULT_AND_EVIDENCE_IDS}}` | `{{IDENTIFIER_OR_NONE}}` | `{{VERSION_OR_NONE}}` | `{{STATUS}}` |

## Traceability rules

- Do not use a branch name alone as immutable implementation evidence.
- Record exact commits, immutable artefact identifiers, or signed release identifiers.
- Generated clients, schemas, packages, and documentation must trace to their authoritative source.
- Preserve bidirectional parent, derived, allocated, superseded, and
  superseding requirement relationships where they affect scope or evidence.
- Verification evidence must identify which requirement version and acceptance
  criteria it tested. Validation evidence must identify the intended need,
  representative context, participants or stakeholders, and limitation.
- When a requirement changes, review every linked feature, test, risk, operation, and release claim.
- When a journey, state, content rule, or design decision changes, review linked requirements, implementation, accessibility, tests, support, and release scope.
- When a test is removed or weakened, identify every requirement and release that loses evidence.
- When implementation exists without a current approved requirement, classify
  it as intended supporting work, authorised exception, obsolete behaviour, or
  unapproved scope; do not silently manufacture a requirement after the fact.
- A checkpoint link preserves delivery evidence but does not establish release qualification or approval.

## Coverage and reconciliation

| Direction | Population/baseline | Traced | Missing/invalid | Coverage limitation | Reviewer/date |
| --- | ---: | ---: | ---: | --- | --- |
| Approved requirements to released scope | `{{COUNT}}` | `{{COUNT}}` | `{{COUNT}}` | `{{LIMITATION}}` | `{{OWNER_DATE}}` |
| Released implementation to approved requirements/exceptions | `{{COUNT}}` | `{{COUNT}}` | `{{COUNT}}` | `{{LIMITATION}}` | `{{OWNER_DATE}}` |
| Material risks to controls and tests | `{{COUNT}}` | `{{COUNT}}` | `{{COUNT}}` | `{{LIMITATION}}` | `{{OWNER_DATE}}` |
| Required tests/evaluations to current results | `{{COUNT}}` | `{{COUNT}}` | `{{COUNT}}` | `{{LIMITATION}}` | `{{OWNER_DATE}}` |

Counts aid reconciliation but do not prove that links are correct, evidence is
sufficient, requirements are complete, or risk is acceptable. Review the
meaning and currency of each material trace.

## Untraced items

| Item | Missing or invalid link | Impact/risk | Interim decision | Owner | Due | Release blocker |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{MISSING_TRACE}}` | `{{IMPACT}}` | `{{DECISION_OR_NONE}}` | `{{OWNER}}` | `{{DATE}}` | `{{YES_NO}}` |
