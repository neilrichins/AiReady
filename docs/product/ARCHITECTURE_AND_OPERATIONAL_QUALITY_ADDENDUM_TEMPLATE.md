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
| Architecture review/framework mappings | `{{LINKS_OR_NOT_APPLICABLE}}` |
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

## Stakeholder concerns and required views

| Stakeholder/affected group | Concern or decision | Required outcome | Architecture view/evidence | Owner |
| --- | --- | --- | --- | --- |
| `{{STAKEHOLDER}}` | `{{CONCERN}}` | `{{OUTCOME}}` | `{{VIEW_OR_SOURCE}}` | `{{OWNER}}` |

## Baseline, target, and transition

| Dimension | Current baseline and evidence | Approved target and outcome | Gap/risk | Transition state/dependency | Owner |
| --- | --- | --- | --- | --- | --- |
| Business capability/service | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |
| Information/data | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |
| Application/component/repository | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |
| Technology/infrastructure/operations | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |

Keep observed baseline, approved target, implemented change, and verified
effective state distinct. Use an optional [architecture review and improvement
record](../boilerplate/ARCHITECTURE_REVIEW.md) for a point-in-time review or
external framework mapping rather than duplicating the architecture source.

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
| User/business health and observability | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Support/escalation | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Runbooks/automation | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Failure/security/recovery exercises | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Operational learning/improvement | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{TRIGGER}}` |

## Security, privacy, and data governance

| Risk/obligation | Required outcome | Preventive/detective control | Verification | Residual risk/owner |
| --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{OUTCOME}}` | `{{CONTROL}}` | `{{METHOD_AND_EVIDENCE}}` | `{{RISK_AND_OWNER}}` |

Document identity, authentication, authorisation, least privilege, secrets, encryption, retention, deletion, auditability, dependency integrity, incident response, and third-party processing where applicable.

Use the [optional compliance-readiness checklists](../compliance/README.md) only
when the approved applicability decision selects them. They add obligation,
control, evidence, audit, and claim records; they do not create a certification,
legal conclusion, or universal product requirement.

## Reliability, continuity, and recovery

| Scenario | Required service behaviour | Detection | Recovery objective | Backup/restore/rollback method | Exercise evidence | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{FAILURE_SCENARIO}}` | `{{BEHAVIOUR}}` | `{{SIGNAL}}` | `{{OBJECTIVE}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

State which changes are reversible, which require forward recovery, and how data preservation is verified.

## Performance and capacity

| Workload/operation | Demand condition | Measure | Baseline | Required threshold | Capacity/quota limit | Scaling/degradation behaviour | Test evidence | Owner |
| --- | --- | --- | ---: | ---: | ---: | --- | --- | --- |
| `{{WORKLOAD}}` | `{{NORMAL_PEAK_DEGRADED_RECOVERY_GROWTH_OR_OTHER}}` | `{{MEASURE}}` | `{{VALUE}}` | `{{VALUE}}` | `{{VALUE}}` | `{{BEHAVIOUR}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

Specify normal, peak, degraded, recovery, and growth conditions where they materially differ.

## Cost and delivered value

| Workload/operation | Business/user outcome | Demand/unit | Baseline cost | Cost/value guardrail | Budget/anomaly response | Evidence | Owner |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| `{{WORKLOAD}}` | `{{OUTCOME}}` | `{{UNIT_AND_VOLUME}}` | `{{VALUE}}` | `{{GUARDRAIL}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

Use the optional [technology cost and value
record](../boilerplate/TECHNOLOGY_COST_AND_VALUE.md) when allocation, forecasting,
unit economics, commitments, AI consumption, or optimisation outcomes require
more detail. A lower technical cost is not an improvement if it degrades an
approved user, security, reliability, accessibility, recovery, or business outcome.

## Sustainability and resource use

| Impact source and lifecycle boundary | Useful unit | Baseline or proxy | Required outcome/guardrail | Measurement method/limitation | Idle/data/downstream/retirement effect | Trade-off/decision | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{COMPUTE_STORAGE_TRANSFER_DEVICE_HARDWARE_WATER_EMISSIONS_OR_OTHER}}` | `{{UNIT}}` | `{{BASELINE}}` | `{{OUTCOME}}` | `{{METHOD_AND_LIMITATION}}` | `{{EFFECT}}` | `{{DECISION}}` | `{{OWNER}}` |

Use only applicable, supportable measures. Record provider and estimation
boundaries, uncertainty, customer/device effects, data lifecycle, idle resource
use, and decommissioning rather than presenting a narrow proxy as full impact.

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

### Cross-quality trade-offs

| Decision/change | Outcome improved | Outcomes degraded or put at risk | Evidence and alternatives | Reversibility/point of no return | Acceptance owner/expiry | Required verification |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{BENEFIT}}` | `{{SECURITY_RELIABILITY_PERFORMANCE_COST_SUSTAINABILITY_ACCESSIBILITY_OPERATIONS_OR_OTHER}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` | `{{OWNER_AND_DATE}}` | `{{CHECKS}}` |

A material trade-off requires an accountable decision. A favourable aggregate
score or outcome must not conceal a failed required quality boundary.

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
| Finance/sustainability/specialist owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` | `{{CONDITIONS_OR_NONE}}` |
