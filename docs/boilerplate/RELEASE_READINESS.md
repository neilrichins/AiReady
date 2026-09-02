# Current release readiness

This is boilerplate for the working readiness view of a current candidate. On release or rejection, preserve the completed record in the project's authoritative release-history system.

## Release identity

| Field | Value |
| --- | --- |
| Release/version | `{{VERSION}}` |
| Candidate | `{{CANDIDATE_NUMBER}}` |
| Intended outcome | `{{OUTCOME}}` |
| Change-set identifier | `{{IDENTIFIER}}` |
| Target window | `{{DATE_TIME_TIMEZONE_OR_CHANNEL}}` |
| Release owner | `{{OWNER}}` |
| Operator | `{{OWNER_OR_TBD}}` |
| Decision | `{{NOT_READY_CONDITIONALLY_READY_READY_APPROVED_RELEASED_ROLLED_BACK}}` |
| Decision date | `{{DATE_OR_PENDING}}` |

## Candidate artefacts

| Repository/component | Commit/tag/version | Build/artefact identifier | Digest/signature | Configuration/schema version | Build evidence |
| --- | --- | --- | --- | --- | --- |
| `{{REPOSITORY_OR_COMPONENT}}` | `{{IDENTIFIER}}` | `{{ARTEFACT}}` | `{{DIGEST}}` | `{{VERSION}}` | `{{EVIDENCE}}` |

### Optional AI system release bundle

Complete this when product or operational behaviour materially depends on AI.
Otherwise record `NOT APPLICABLE`, the reason, owner, and assessed date. Link
the candidate-specific [AI system evaluation](AI_SYSTEM_EVALUATION.md).

| Element | Exact identity/version/configuration | Integrity or effective-state evidence | Rollback/recovery unit |
| --- | --- | --- | --- |
| Bundle identifier | `{{IMMUTABLE_OR_CONTROLLED_IDENTIFIER}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Models/providers | `{{IDENTIFIERS_ALIASES_AND_CONFIGURATION}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Instructions/prompts/templates | `{{IDENTIFIERS}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Retrieval data/indexes | `{{IDENTIFIERS}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Tools/integrations/permissions | `{{IDENTIFIERS_AND_AUTHORITY}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Parameters/thresholds/policies/guardrails | `{{IDENTIFIERS_AND_VALUES}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Evaluation suite and result | `{{SUITE_AND_RESULT_IDENTIFIERS}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |

Record elements that are mutable outside project control and how that affects
candidate identity, approval validity, monitoring, and rollback.

## Scope

### Included

| Requirement/feature/fix | User/operational outcome | Verification status | Evidence | Owner |
| --- | --- | --- | --- | --- |
| `{{ID}}` | `{{OUTCOME}}` | `{{PASS_FAIL_PARTIAL_BLOCKED}}` | `{{LINK}}` | `{{OWNER}}` |

### Explicitly excluded or deferred

| Item | Reason | User/data/compatibility effect | Decision owner | Follow-up |
| --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{RATIONALE}}` | `{{EFFECT}}` | `{{OWNER}}` | `{{LINK_OR_DATE}}` |

## Readiness summary

| Gate | Applicability | Status | Candidate-specific evidence | Owner | Blocker/limitation |
| --- | --- | --- | --- | --- | --- |
| Traceability and scope | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Reproducible build and artefact integrity | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Automated quality gate | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| AI-system evaluation and behavioural assurance | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Functional and end-to-end | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Security and authorisation | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Privacy and data | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Product intent, design, content, accessibility, and usability | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Website/mobile accessibility standard and jurisdiction obligations | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Selected compliance obligations, controls, evidence, exceptions, and claims | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Reliability, continuity, and recovery exercises | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Performance, capacity, and resource efficiency | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Technology cost, allocation, budget, and delivered value | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Sustainability and resource lifecycle | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Compatibility, upgrade, and migration | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Multi-repository/component coordination | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Backup, rollback, restore, and recovery | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Operations, monitoring, support, and documentation | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Licence, dependency, and supply chain | `{{APPLICABLE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION}}` |

Status values: `NOT_STARTED`, `IN_PROGRESS`, `PASS`, `FAIL`, `BLOCKED`, `STALE`, `NOT_APPLICABLE`.

## Multi-repository/component sequence

| Order | Repository/component | Required compatible state | Action | Verification gate | Partial-failure response | Rollback order |
| ---: | --- | --- | --- | --- | --- | --- |
| `{{NUMBER}}` | `{{TARGET}}` | `{{PRECONDITION}}` | `{{ACTION}}` | `{{EVIDENCE}}` | `{{RESPONSE}}` | `{{NUMBER}}` |

## Defects, blockers, and accepted risks

| ID | Type/severity | Effect | Resolution or acceptance | Owner/approver | Due/expiry | Release effect |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{TYPE}}` | `{{EFFECT}}` | `{{DECISION}}` | `{{OWNER}}` | `{{DATE}}` | `{{BLOCK_CONDITION_ALLOW}}` |

## Recovery and post-release plan

- Recovery point and evidence: `{{BACKUP_SNAPSHOT_EXPORT_OR_NOT_APPLICABLE}}`.
- Rollback artefacts/version: `{{IDENTIFIER}}`.
- Rollback trigger and authority: `{{TRIGGER_AND_OWNER}}`.
- Restore/rollback procedure: `{{LINK}}`.
- Post-release user/system journeys: `{{CHECKS}}`.
- Monitoring and observation period: `{{SIGNALS_AND_DURATION}}`.
- Cost/usage anomaly, resource-efficiency, sustainability, expiry, and cleanup checks: `{{PLAN_OR_NOT_APPLICABLE}}`.
- AI behavioural baseline, drift trigger, safe-stop/fallback, and bundle rollback: `{{PLAN_OR_NOT_APPLICABLE}}`.
- Communication and support owner: `{{OWNER}}`.

## Decision rationale

`{{EVIDENCE_BASED_DECISION_INCLUDING_UNKNOWNS_AND_LIMITATIONS}}`

## Approvals

| Role | Name | Decision | Candidate/version | Date |
| --- | --- | --- | --- | --- |
| Product/service owner | `{{NAME}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{IDENTIFIER}}` | `{{DATE}}` |
| Experience/design/accessibility owner | `{{NAME}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{IDENTIFIER}}` | `{{DATE}}` |
| Technical owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{IDENTIFIER}}` | `{{DATE}}` |
| Quality/verification owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{IDENTIFIER}}` | `{{DATE}}` |
| Security/data owner | `{{NAME}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{IDENTIFIER}}` | `{{DATE}}` |
| Legal/compliance/assurance owner | `{{NAME}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{IDENTIFIER}}` | `{{DATE}}` |
| Operations/release owner | `{{NAME}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{IDENTIFIER}}` | `{{DATE}}` |
| Finance/cost/value/sustainability owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{IDENTIFIER}}` | `{{DATE}}` |

## Release result

| Field | Result |
| --- | --- |
| Actual start/end | `{{TIMESTAMPS}}` |
| Released artefacts/versions | `{{IDENTIFIERS}}` |
| Result | `{{SUCCESS_PARTIAL_FAILED_ROLLED_BACK_CANCELLED}}` |
| Post-release evidence | `{{LINKS}}` |
| Deviations/incidents | `{{LINKS_OR_NONE}}` |
| Follow-up owners/dates | `{{ITEMS}}` |
