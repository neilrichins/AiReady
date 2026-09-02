# Hotfix release evidence: {{VERSION_OR_CANDIDATE}}

Use this record only when urgency requires an explicitly shortened release path. Urgency does not remove accountability, candidate identity, risk assessment, backup/recovery, approval, or post-release verification.

## Incident and authority

| Field | Value |
| --- | --- |
| Incident/problem reference | `{{REFERENCE}}` |
| User/operational impact | `{{IMPACT}}` |
| Severity and urgency | `{{SEVERITY_AND_REASON}}` |
| Hotfix authority/policy | `{{AUTHORITY}}` |
| Incident owner | `{{OWNER}}` |
| Release owner | `{{OWNER}}` |
| Decision deadline/window | `{{TIMESTAMP_OR_WINDOW}}` |

## Exact scope and candidate

Required outcome: `{{MINIMUM_SAFE_OUTCOME}}`.

Included changes:

- `{{CHANGE_AND_REFERENCE}}`

Explicitly excluded or deferred changes:

- `{{ITEM_AND_REASON}}`

| Repository/component | Commit/version | Artefact and immutable digest | Configuration/schema version | Owner |
| --- | --- | --- | --- | --- |
| `{{COMPONENT}}` | `{{IDENTIFIER}}` | `{{ARTEFACT_AND_DIGEST}}` | `{{VERSION}}` | `{{OWNER}}` |

When AI materially affects system behaviour, record the exact release-bundle
identifier, model, prompts, retrieval, tools, permissions, parameters, policies,
evaluation-suite result, provider-controlled elements, and rollback boundary:
`{{AI_RELEASE_BUNDLE_OR_NOT_APPLICABLE_WITH_REASON_OWNER_AND_DATE}}`. Link the
applicable
[AI system evaluation](../boilerplate/AI_SYSTEM_EVALUATION.md). Urgency does
not make unknown or changed AI behaviour equivalent to a verified result.

## Impact and risk assessment

| Affected area/journey | Expected effect | Failure mode | Severity/likelihood | Control or workaround | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{AREA}}` | `{{EFFECT}}` | `{{FAILURE}}` | `{{RATING}}` | `{{CONTROL}}` | `{{OWNER}}` |

Blast radius: `{{USERS_SYSTEMS_DATA_AND_ENVIRONMENTS}}`.

Security, privacy, accessibility, data, compatibility, and recovery impact: `{{ASSESSMENT_AND_EVIDENCE}}`.

## Retained and deferred checks

| Check/gate | `RETAINED`, `REDUCED`, or `DEFERRED` | Evidence or reason | Compensating control | Risk approver | Completion deadline |
| --- | --- | --- | --- | --- | --- |
| `{{CHECK}}` | `{{STATUS}}` | `{{EVIDENCE_OR_REASON}}` | `{{CONTROL}}` | `{{NAME}}` | `{{DATE}}` |

No check may be silently omitted. A reduced or deferred check requires an accountable risk decision, compensating control, deadline, and tracked follow-up.

## Multi-component coordination

| Step | Component/candidate | Prerequisite | Action | Compatibility verification | Owner | Partial-failure response |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | `{{COMPONENT}}` | `{{PREREQUISITE}}` | `{{ACTION}}` | `{{CHECK_AND_EVIDENCE}}` | `{{OWNER}}` | `{{RESPONSE}}` |

If not applicable, record the reason and owner: `{{NOT_APPLICABLE_REASON_OR_DETAILS}}`.

## Backup, rollback, and recovery

| Control | Required result | Evidence | Owner | Trigger/authority |
| --- | --- | --- | --- | --- |
| Backup/snapshot | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Rollback or forward recovery | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Data reconciliation | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| AI safe stop, fallback, and bundle recovery | `{{RESULT_OR_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |

Point of no return: `{{CONDITION_OR_NONE}}`.

## Approval

Decision: `{{APPROVE_REJECT_DEFER}}` candidate `{{EXACT_IDENTIFIER}}`.

| Role | Name | Decision | Timestamp | Conditions/accepted risk |
| --- | --- | --- | --- | --- |
| Incident owner | `{{NAME}}` | `{{DECISION}}` | `{{TIMESTAMP}}` | `{{CONDITIONS}}` |
| Release/technical owner | `{{NAME}}` | `{{DECISION}}` | `{{TIMESTAMP}}` | `{{CONDITIONS}}` |
| Quality/verification owner | `{{NAME}}` | `{{DECISION}}` | `{{TIMESTAMP}}` | `{{CONDITIONS}}` |
| Risk/specialist owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{DECISION}}` | `{{TIMESTAMP}}` | `{{CONDITIONS}}` |

## Execution and post-release result

| Event/check | Expected | Actual result | Timestamp | Evidence | Owner | Response/follow-up |
| --- | --- | --- | --- | --- | --- | --- |
| Release action | `{{EXPECTED}}` | `{{RESULT}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION}}` |
| Effective version/configuration | `{{EXPECTED}}` | `{{RESULT}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION}}` |
| Critical journey/problem resolution | `{{EXPECTED}}` | `{{RESULT}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION}}` |
| Monitoring/error signals | `{{EXPECTED}}` | `{{RESULT}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION}}` |
| AI behavioural baseline/provider drift | `{{EXPECTED_OR_NOT_APPLICABLE}}` | `{{RESULT}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION}}` |
| Data and dependent components | `{{EXPECTED}}` | `{{RESULT}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION}}` |

Final result: `{{RELEASED_FAILED_CANCELLED_ROLLED_BACK}}`.

Final released identifier/digest: `{{IDENTIFIER_OR_NONE}}`.

## Follow-up and retrospective

| ID | Deferred check, remediation, prevention, or lesson | Owner | Due | Tracking reference | Completion evidence |
| --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{ACTION}}` | `{{OWNER}}` | `{{DATE}}` | `{{REFERENCE}}` | `{{EVIDENCE_OR_PENDING}}` |

Retrospective date and owner: `{{DATE_AND_OWNER}}`.

Record closure: `{{CLOSED_OPEN_WITH_ACTIONS}}` at `{{TIMESTAMP}}`.
