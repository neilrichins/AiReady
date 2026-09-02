# Operations and recovery

## Service and document control

| Field | Value |
| --- | --- |
| Service/system | `{{NAME_AND_SCOPE}}` |
| Accountable operations owner | `{{OWNER}}` |
| Technical and incident owners | `{{OWNERS}}` |
| Supported environments | `{{ENVIRONMENTS}}` |
| Criticality/service commitments | `{{CLASSIFICATION_AND_COMMITMENTS}}` |
| Assessed version/date | `{{VERSION_AND_DATE}}` |
| Review/exercise trigger | `{{DATE_OR_EVENT}}` |

## Authority and safety

| Operation | Command or procedure | Environment | Required approver | Operator role | Confirmation | External/destructive/cost effect |
| --- | --- | --- | --- | --- | --- | --- |
| Build/package | `{{COMMAND}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{ROLE}}` | `{{CONTROL}}` | `{{EFFECT}}` |
| Deploy/publish | `{{COMMAND}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{ROLE}}` | `{{CONTROL}}` | `{{EFFECT}}` |
| Migrate/change state | `{{COMMAND}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{ROLE}}` | `{{CONTROL}}` | `{{EFFECT}}` |
| Disable/roll back | `{{COMMAND}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{ROLE}}` | `{{CONTROL}}` | `{{EFFECT}}` |
| Restore/recover | `{{COMMAND}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{ROLE}}` | `{{CONTROL}}` | `{{EFFECT}}` |
| Delete/retire | `{{COMMAND}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{ROLE}}` | `{{CONTROL}}` | `{{EFFECT}}` |

Separate read-only preflight, build, deployment, migration, publication, deletion, and recovery unless an intentionally atomic procedure has been reviewed and verified. AI agents receive only the authority explicitly recorded for the operation.

## Environment and dependency readiness

| Environment/dependency | Expected identity/version/state | Configuration/secrets source | Capacity/availability requirement | Verification | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{EXPECTED}}` | `{{SOURCE}}` | `{{REQUIREMENT}}` | `{{METHOD_AND_EVIDENCE}}` | `{{OWNER}}` |

## Preflight

1. Confirm operator identity, environment, account/tenant/region/channel, approved candidate, digest, authority, maintenance window, expected cost, and current effective version.
2. Run `{{READ_ONLY_PREFLIGHT_COMMAND}}` and retain safe evidence.
3. Confirm dependencies, compatible component versions, quotas, capacity, feature flags, certificates, integrations, monitoring, support, and incident routes.
4. Record required backups, snapshots, exports, restore access, and recovery identifiers without exposing secrets.
5. Review the exact proposed change, data/migration effects, stop conditions, rollback triggers, point of no return, and communications.
6. Stop if actual state differs materially from the approved plan.

## Observability and operational acceptance

| Signal/service-level indicator | Expected baseline/threshold | Source | Alert/response | Owner | Evidence/retention |
| --- | --- | --- | --- | --- | --- |
| `{{SIGNAL}}` | `{{EXPECTED}}` | `{{SOURCE}}` | `{{RESPONSE}}` | `{{OWNER}}` | `{{EVIDENCE}}` |

Include user-visible availability, correctness, latency, error rates, saturation, queues/background work, dependency health, security signals, data integrity, cost, and support volume where applicable. Verify that alerts reach an available owner and contain enough safe context to act.

### AI service operation when applicable

Complete this section when model, prompt, retrieval, tool, policy, or
provider-controlled behaviour materially affects the operated service. Link the
applicable [AI system evaluation](AI_SYSTEM_EVALUATION.md).

| Concern | Required state/control | Verification | Stop/fallback/rollback trigger | Owner |
| --- | --- | --- | --- | --- |
| Exact AI release-bundle identity | `{{CODE_MODEL_PROMPT_DATA_TOOL_POLICY_AND_CONFIGURATION_IDENTIFIERS}}` | `{{METHOD_AND_EVIDENCE}}` | `{{TRIGGER}}` | `{{OWNER}}` |
| Behavioural baseline and tolerances | `{{APPROVED_QUALITY_AND_SEVERE_FAILURE_LIMITS}}` | `{{METHOD_AND_EVIDENCE}}` | `{{TRIGGER}}` | `{{OWNER}}` |
| Provider/model change detection | `{{VERSION_ALIAS_NOTICE_PROBE_OR_COMPARISON_CONTROL}}` | `{{METHOD_AND_EVIDENCE}}` | `{{TRIGGER}}` | `{{OWNER}}` |
| Shadow/canary/limited rollout | `{{PLAN_OR_NOT_APPLICABLE_WITH_REASON}}` | `{{METHOD_AND_EVIDENCE}}` | `{{TRIGGER}}` | `{{OWNER}}` |
| Safe stop, fallback, and degraded mode | `{{CONTROL_AND_USER_SYSTEM_EFFECT}}` | `{{METHOD_AND_EVIDENCE}}` | `{{TRIGGER}}` | `{{OWNER}}` |
| Whole-bundle rollback or forward recovery | `{{ATOMIC_BOUNDARY_SEQUENCE_AND_LIMITS}}` | `{{METHOD_AND_EVIDENCE}}` | `{{TRIGGER}}` | `{{OWNER}}` |

Monitor material behavioural quality and affected-user outcomes where
applicable, not only availability, latency, cost, token use, or provider error
rates. Record provider-side changes and unexpected drift even when no project
commit changed.

## Deployment or publication procedure

| Order | Action | Preconditions | Expected result | Verification | Stop/rollback trigger | Owner |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | `{{ACTION}}` | `{{PRECONDITIONS}}` | `{{EXPECTED}}` | `{{METHOD}}` | `{{TRIGGER}}` | `{{OWNER}}` |

Record actual timestamps, operators, versions, results, deviations, and evidence. Verify effective behaviour, configuration, logs, metrics, data, external delivery, security boundaries, and representative journeys. Source and Continuous Integration (CI) evidence alone do not prove deployment success.

## Migration and data preservation

| Stage | Requirement | Procedure | Evidence | Failure response | Owner |
| --- | --- | --- | --- | --- | --- |
| Dry run/rehearsal | `{{REQUIREMENT}}` | `{{PROCEDURE}}` | `{{EVIDENCE}}` | `{{RESPONSE}}` | `{{OWNER}}` |
| Backup/snapshot validation | `{{REQUIREMENT}}` | `{{PROCEDURE}}` | `{{EVIDENCE}}` | `{{RESPONSE}}` | `{{OWNER}}` |
| Compatibility/dual operation | `{{REQUIREMENT}}` | `{{PROCEDURE}}` | `{{EVIDENCE}}` | `{{RESPONSE}}` | `{{OWNER}}` |
| Migration/idempotency | `{{REQUIREMENT}}` | `{{PROCEDURE}}` | `{{EVIDENCE}}` | `{{RESPONSE}}` | `{{OWNER}}` |
| Reconciliation | `{{REQUIREMENT}}` | `{{PROCEDURE}}` | `{{EVIDENCE}}` | `{{RESPONSE}}` | `{{OWNER}}` |

Document write controls, schema/application compatibility, expected counts/invariants, partial completion, retries, reverse migration or forward recovery, and the point after which rollback is unsafe.

## Recovery objectives and procedures

| Scenario/data set | Recovery Time Objective (RTO) | Recovery Point Objective (RPO) | Recovery method | Dependencies/access | Verification | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{SCENARIO}}` | `{{RTO}}` | `{{RPO}}` | `{{METHOD}}` | `{{REQUIREMENTS}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

Last successful backup restore or recovery exercise: `{{DATE_SCOPE_RESULT_AND_EVIDENCE}}`.

Written recovery instructions without a successful exercise are partial evidence. Record untested assumptions, unavailable environments, data-loss boundaries, and manual dependencies.

## Incident and support response

| Severity/condition | Detection/reporting route | Incident authority | Initial response | Communication owner | Escalation target |
| --- | --- | --- | --- | --- | --- |
| `{{CONDITION}}` | `{{ROUTE}}` | `{{OWNER}}` | `{{RESPONSE}}` | `{{OWNER}}` | `{{TARGET}}` |

Preserve diagnostics and a timeline without exposing restricted data. Feed incidents, near misses, support patterns, and recovery exercises back into risks, requirements, architecture, tests, runbooks, and release controls.

## Multi-repository and component sequence

| Order | Repository/component/version | Required compatible state | Action | Verification | Partial-failure owner/response | Reverse order |
| ---: | --- | --- | --- | --- | --- | --- |
| `{{NUMBER}}` | `{{TARGET}}` | `{{PRECONDITION}}` | `{{ACTION}}` | `{{EVIDENCE}}` | `{{OWNER_AND_RESPONSE}}` | `{{NUMBER}}` |

Reference the authoritative repository ecosystem record. For a standalone project, record `NOT APPLICABLE`, the owner, and evidence that external packages, infrastructure, schemas, configuration, and deployment repositories were considered.

## Operational gaps and exercises

| ID | Gap or exercise | Risk/required outcome | Owner | Due/frequency | Result/evidence | Release effect |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{ITEM}}` | `{{RISK_OR_OUTCOME}}` | `{{OWNER}}` | `{{DATE}}` | `{{RESULT}}` | `{{BLOCK_CONDITION_ALLOW}}` |
