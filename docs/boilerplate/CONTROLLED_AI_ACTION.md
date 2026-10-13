# Controlled artificial intelligence action and write-back

Use this optional record when an artificial intelligence (AI) system or agent
can propose or perform an action that changes an external, shared, operational,
customer, financial, communication, infrastructure, or production system. Do
not require it for read-only AI use or ordinary source edits already controlled
by the project's development workflow.

This record defines a controlled action path. It does not grant authority,
approve an action, require direct AI write access, or prescribe a workflow
engine, protocol, platform, or automation architecture. Prefer an existing
transaction, change-management, approval, operations, or audit system when it
already provides the required control and evidence.

## How to use this record

1. Identify each AI-influenced action and its real effect.
2. Separate proposal, validation, approval, execution, verification,
   reconciliation, and recovery.
3. Bind approval to exact action parameters and sufficiently current state.
4. Recheck authoritative state immediately before consequential execution.
5. Preserve actual results, conflicts, retries, partial completion, and
   recovery evidence.
6. Keep the Product Owner's risk decision separate from execution authority.

## Document control

| Field | Value |
| --- | --- |
| Action capability/use | `{{NAME_PURPOSE_AND_SCOPE}}` |
| Accountable Product Owner | `{{OWNER}}` |
| Action/execution authority | `{{OWNER_OR_SYSTEM}}` |
| Technical/operational owner | `{{OWNER}}` |
| Authoritative workflow or record | `{{LOCATION}}` |
| Assessed system/version | `{{IDENTIFIERS}}` |
| Status | `{{DRAFT_REVIEW_APPROVED_SUPERSEDED}}` |
| Assessed date and review trigger | `{{DATE_AND_EVENT}}` |

## Applicability and authority boundary

AI role: `{{PROPOSE_RECOMMEND_PREPARE_EXECUTE_OR_OTHER}}`.

Permitted action types and targets: `{{ACTIONS_TARGETS_AND_ENVIRONMENTS}}`.

Prohibited actions and targets: `{{BOUNDARY}}`.

Maximum affected records/resources/value/duration: `{{LIMITS}}`.

Actions requiring fresh human approval: `{{ACTIONS}}`.

Actions that may execute under a previously approved deterministic policy:
`{{ACTIONS_POLICY_AND_LIMITS_OR_NONE}}`.

Stop and escalation conditions: `{{CONDITIONS_AND_OWNER}}`.

Authority not explicitly granted remains prohibited. An AI model must not infer
approval from a prior similar action, silence, schedule pressure, successful
validation, or possession of credentials.

## Action contract

| Action type | Authoritative target/interface | Required inputs/schema | Preconditions/invariants | Deterministic validation/policy | Approval | Idempotency/concurrency control | Success evidence | Recovery/compensation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ACTION}}` | `{{TARGET_AND_CONTRACT}}` | `{{INPUTS}}` | `{{CONDITIONS}}` | `{{RULES}}` | `{{OWNER_OR_POLICY}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{RESPONSE}}` |

## Controlled action path

| Stage | Required control | Evidence captured | Failure/stop behaviour | Accountable owner |
| --- | --- | --- | --- | --- |
| 1. Proposed action | Record intended outcome, exact target, parameters, basis, context identity, and expected effect | `{{EVIDENCE}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| 2. Fresh state read | Read authoritative state, version/revision, permissions, dependencies, and material limits | `{{EVIDENCE}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| 3. Conflict and precondition check | Detect changed, stale, missing, duplicate, incompatible, or out-of-scope state | `{{EVIDENCE}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| 4. Deterministic validation | Apply schemas, allowlists, policy, invariants, quantity/value limits, and safety rules | `{{EVIDENCE}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| 5. Approval/authorisation | Bind the approver or approved policy to the exact action and current state | `{{EVIDENCE}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| 6. Controlled execution | Use least privilege, bounded target, idempotency, ordering, transaction, or guarded write controls | `{{EVIDENCE}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| 7. Outcome verification | Read effective state and compare actual with expected result and limits | `{{EVIDENCE}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| 8. Reconciliation/audit | Record exact outcome, deviations, duplicates, retries, partial completion, and actor identities | `{{EVIDENCE}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |
| 9. Recovery/compensation | Roll back, reverse, compensate, isolate, or escalate using the approved response | `{{EVIDENCE}}` | `{{BEHAVIOUR}}` | `{{OWNER}}` |

## Freshness and time-of-check protection

| Concern | Required control | Maximum age/validity | Conflict signal | Response | Evidence |
| --- | --- | --- | --- | --- | --- |
| Authoritative state | `{{REREAD_VERSION_ETAG_REVISION_LOCK_OR_OTHER}}` | `{{LIMIT}}` | `{{SIGNAL}}` | `{{REFRESH_REAPPROVE_REJECT_OR_OTHER}}` | `{{EVIDENCE}}` |
| Approval | `{{ACTION_AND_STATE_BINDING}}` | `{{LIMIT}}` | `{{SIGNAL}}` | `{{REAPPROVE_OR_STOP}}` | `{{EVIDENCE}}` |
| Permissions/policy | `{{REVALIDATION}}` | `{{LIMIT}}` | `{{SIGNAL}}` | `{{STOP_OR_ESCALATE}}` | `{{EVIDENCE}}` |
| Dependency/capacity/budget | `{{REVALIDATION}}` | `{{LIMIT}}` | `{{SIGNAL}}` | `{{STOP_OR_ESCALATE}}` | `{{EVIDENCE}}` |

Address time-of-check to time-of-use (TOCTOU) risk proportionately. An approval
or validation based on stale state must not be silently reused when the changed
state could affect scope, safety, cost, correctness, permissions, or intent.

## Write, retry, and partial-failure controls

- Preview/dry-run or proposed diff: `{{METHOD_OR_NOT_APPLICABLE}}`.
- Target/account/tenant/region/environment binding: `{{CONTROL}}`.
- Schema and field allowlist: `{{CONTROL}}`.
- Maximum affected count, value, cost, or rate: `{{LIMITS}}`.
- Idempotency key or duplicate prevention: `{{CONTROL}}`.
- Optimistic/pessimistic concurrency or version check: `{{CONTROL}}`.
- Transaction/atomicity boundary: `{{BOUNDARY}}`.
- Ordering and replay behaviour: `{{CONTROL}}`.
- Timeout and unknown-outcome handling: `{{CONTROL}}`.
- Partial-completion detection and reconciliation: `{{CONTROL}}`.
- Rollback, reversal, or compensating action: `{{CONTROL}}`.

A retry does not erase or prove the outcome of the first attempt. Resolve an
unknown outcome from authoritative state before repeating a consequential
action.

## Approval and separation of duties

| Decision/action | Approver/authority | Required evidence | May delegate to | Expiry/reapproval trigger | Separation requirement |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{OWNER}}` | `{{EVIDENCE}}` | `{{DELEGATE_OR_NONE}}` | `{{TRIGGER}}` | `{{CONTROL}}` |

The AI agent cannot approve its own proposal, accept residual risk, expand its
authority, or treat technical validation as human approval. Where staffing
prevents separation, record the constraint, compensating control, risk owner,
and review trigger.

## Action evidence ledger

| Action ID | Proposal/context/state identifiers | Validation and policy result | Approval identity/scope/time | Execution identity/time | Actual effect | Verification/reconciliation | Failure/recovery | Evidence location |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{IDENTIFIERS}}` | `{{RESULT}}` | `{{APPROVAL}}` | `{{EXECUTION}}` | `{{OUTCOME}}` | `{{RESULT}}` | `{{RESPONSE}}` | `{{LOCATION}}` |

Protect evidence according to its classification and retention requirements.
Do not log credentials, unnecessary personal data, private prompts, or
restricted payloads merely to create an audit trail.

## Verification scenarios

| Scenario | Expected control/result | Method/environment | Actual result | Evidence | Owner/action |
| --- | --- | --- | --- | --- | --- |
| Valid approved action | `{{EXPECTED}}` | `{{METHOD}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_ACTION}}` |
| State changes after proposal or approval | `{{EXPECTED}}` | `{{METHOD}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_ACTION}}` |
| Duplicate request or retry | `{{EXPECTED}}` | `{{METHOD}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_ACTION}}` |
| Concurrent conflicting action | `{{EXPECTED}}` | `{{METHOD}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_ACTION}}` |
| Partial completion or timeout with unknown result | `{{EXPECTED}}` | `{{METHOD}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_ACTION}}` |
| Invalid, unauthorised, excessive, or wrong-target action | `{{EXPECTED}}` | `{{METHOD}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_ACTION}}` |
| Dependency, policy, approval, or verification unavailable | `{{EXPECTED}}` | `{{METHOD}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_ACTION}}` |
| Recovery, reversal, or compensation | `{{EXPECTED}}` | `{{METHOD}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER_ACTION}}` |

## Monitoring, incidents, and change triggers

| Signal/change | Detection | Alert/review trigger | Restrict/stop/recover action | Owner | Evidence retention |
| --- | --- | --- | --- | --- | --- |
| `{{FAILURE_CONFLICT_DUPLICATE_POLICY_PERMISSION_SCHEMA_TARGET_VOLUME_COST_DRIFT_OR_OTHER}}` | `{{SOURCE}}` | `{{TRIGGER}}` | `{{ACTION}}` | `{{OWNER}}` | `{{LOCATION}}` |

Review this record after material changes to action types, targets, context,
schemas, policy, permissions, approval, limits, dependencies, execution
mechanisms, failure behaviour, or recovery.

## Risks, exceptions, and decision

| ID | Gap/risk/exception | Action or outcome affected | Disposition | Owner | Review trigger | Evidence/reference |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{ITEM}}` | `{{EFFECT}}` | `{{REMEDIATE_ACCEPT_AND_SKIP_DEFER_DECLINE_TRANSFER_NOT_APPLICABLE}}` | `{{OWNER}}` | `{{TRIGGER}}` | `{{REFERENCE}}` |

Product Owner decision: `{{DECISION_RATIONALE_AND_DATE}}`.

The Product Owner may accept and skip an AiReady finding. Preserve the actual
action limitation and consequences; acceptance does not grant execution
authority or turn a failed control into a passing result.
