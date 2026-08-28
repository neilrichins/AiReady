# Architecture and operational-quality addendum: {{PRODUCT_NAME}}

## Document control

| Field | Value |
| --- | --- |
| Status | `{{DRAFT_REVIEW_APPROVED_SUPERSEDED}}` |
| Accountable technical owner | `{{OWNER}}` |
| Product/operations owners | `{{OWNERS}}` |
| Version/date | `{{VERSION_AND_DATE}}` |
| Applies to | `{{SYSTEM_CAPABILITY_OR_CHANGE}}` |
| Related architecture/requirements | `{{LINKS_OR_LOCATIONS}}` |
| Review trigger | `{{DATE_OR_EVENT}}` |

## Quality outcomes

| ID | Quality attribute | Required measurable outcome | Operating conditions | Verification method | Evidence | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `QAR-001` | `{{SECURITY_RELIABILITY_PERFORMANCE_OR_OTHER}}` | `{{TESTABLE_OUTCOME}}` | `{{LOAD_FAILURE_OR_ENVIRONMENT_CONDITION}}` | `{{METHOD}}` | `{{LOCATION}}` | `{{OWNER}}` |

Quality targets are requirements. They are not verified until evidence exists for the exact candidate and relevant environment.

## Architecture principles and boundaries

| Principle/boundary | Required decision or behaviour | Rationale | Verification/review evidence |
| --- | --- | --- | --- |
| `{{PRINCIPLE}}` | `{{REQUIREMENT}}` | `{{RATIONALE}}` | `{{EVIDENCE}}` |

## Components, data, and trust

| Component/service/repository | Responsibility | Owner | Inputs/outputs | Data class | Trust boundary | Contract/version |
| --- | --- | --- | --- | --- | --- | --- |
| `{{COMPONENT}}` | `{{RESPONSIBILITY}}` | `{{OWNER}}` | `{{FLOW}}` | `{{CLASSIFICATION}}` | `{{BOUNDARY}}` | `{{CONTRACT}}` |

Authoritative architecture and data-flow diagrams: `{{LINKS_OR_LOCATIONS}}`.

## Operational excellence

| Concern | Requirement | Control or operating procedure | Evidence | Owner | Review trigger |
| --- | --- | --- | --- | --- | --- |
| Deployment authority | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Configuration/secrets | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Observability/alerting | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Support/escalation | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Runbooks/automation | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |

## Security, privacy, and data governance

| Risk/obligation | Required outcome | Preventive/detective control | Verification | Residual risk/owner |
| --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{OUTCOME}}` | `{{CONTROL}}` | `{{METHOD_AND_EVIDENCE}}` | `{{RISK_AND_OWNER}}` |

Document identity, authentication, authorisation, least privilege, secrets, encryption, retention, deletion, auditability, dependency integrity, incident response, and third-party processing where applicable.

## Reliability, continuity, and recovery

| Scenario | Required service behaviour | Detection | Recovery objective | Backup/restore/rollback method | Exercise evidence | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{FAILURE_SCENARIO}}` | `{{BEHAVIOUR}}` | `{{SIGNAL}}` | `{{OBJECTIVE}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

State which changes are reversible, which require forward recovery, and how data preservation is verified.

## Performance, capacity, and cost

| Workload/operation | Measure | Baseline | Required threshold | Capacity limit | Cost guardrail | Test evidence | Owner |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| `{{WORKLOAD}}` | `{{MEASURE}}` | `{{VALUE}}` | `{{VALUE}}` | `{{VALUE}}` | `{{VALUE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

Specify normal, peak, degraded, recovery, and growth conditions where they materially differ.

## Sustainability and resource use

| Impact source | Baseline or proxy | Required outcome/guardrail | Measurement method | Trade-off/decision | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{COMPUTE_STORAGE_TRANSFER_HARDWARE_OR_OTHER}}` | `{{BASELINE}}` | `{{OUTCOME}}` | `{{METHOD}}` | `{{DECISION}}` | `{{OWNER}}` |

## Compatibility, contracts, and migration

| Producer/change | Consumer/affected system | Contract/schema/version | Supported combinations | Migration/order | Compatibility evidence | Rollback boundary |
| --- | --- | --- | --- | --- | --- | --- |
| `{{COMPONENT}}` | `{{CONSUMER}}` | `{{CONTRACT}}` | `{{COMBINATIONS}}` | `{{SEQUENCE}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |

For interconnected repositories, identify coordinated commits, version constraints, deployment order, cross-repository verification, ownership, and partial-failure recovery.

## Responsibility boundary

| Responsibility | Project/team | User/operator/customer | Provider/dependency | Evidence or agreement |
| --- | --- | --- | --- | --- |
| `{{RESPONSIBILITY}}` | `{{DUTY}}` | `{{DUTY}}` | `{{DUTY}}` | `{{SOURCE}}` |

## Failure modes and trade-offs

| ID | Failure mode/trade-off | Trigger | Impact | Detection | Prevention/response | Accepted by/expiry | Release effect |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{ITEM}}` | `{{TRIGGER}}` | `{{IMPACT}}` | `{{DETECTION}}` | `{{CONTROL}}` | `{{OWNER_AND_DATE}}` | `{{BLOCK_CONDITION_ALLOW}}` |

## Verification and release evidence

| Quality requirement | Candidate-specific check | Required environment | Pass criterion | Evidence retained | Post-release check |
| --- | --- | --- | --- | --- | --- |
| `{{QAR_ID}}` | `{{CHECK}}` | `{{ENVIRONMENT}}` | `{{CRITERION}}` | `{{LOCATION}}` | `{{CHECK}}` |

## Approval

| Role | Name | Decision | Date | Conditions |
| --- | --- | --- | --- | --- |
| Technical owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Product owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
| Security/privacy/operations owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
