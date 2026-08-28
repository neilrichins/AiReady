# Delivery checkpoint evidence

Use this optional record when a phase, milestone, migration step, architectural
baseline, or other meaningful delivery boundary needs durable evidence before
a release candidate exists. Adapt it into the project's existing work or
governance system when that system is already authoritative.

A checkpoint records what was true at a bounded point in delivery. It is not a
release candidate, release approval, deployment authorisation, or evidence that
the result works in an untested environment.

## Checkpoint identity

| Field | Value |
| --- | --- |
| Checkpoint identifier | `{{IDENTIFIER}}` |
| Phase/milestone/outcome | `{{NAME_AND_REQUIRED_OUTCOME}}` |
| Status | `{{PLANNED_IN_PROGRESS_MET_NOT_MET_PARTIAL_SUPERSEDED}}` |
| Accountable owner | `{{OWNER}}` |
| Assessment date | `{{DATE}}` |
| Change-set/issues | `{{IDENTIFIERS_OR_LINKS}}` |
| Exact commits/components | `{{IDENTIFIERS}}` |
| Evidence archive | `{{LOCATION}}` |
| Supersedes or depends on | `{{CHECKPOINTS_OR_NONE}}` |

## Scope and boundary

- Required outcome: `{{OBSERVABLE_OUTCOME}}`.
- Included work: `{{SCOPE}}`.
- Explicit non-goals and deferred work: `{{EXCLUSIONS}}`.
- Stable behaviour and compatibility that must remain operational: `{{INVARIANTS}}`.
- Governing decisions and contracts: `{{IDENTIFIERS_OR_LINKS}}`.
- Release or production authority granted by this record: `NONE` unless a separate authorised record explicitly states otherwise.

## Deliverable state

| Deliverable/criterion | Required state | Actual state | Exact evidence | Owner | Limitation/follow-up |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{CRITERION}}` | `{{MET_NOT_MET_PARTIAL_BLOCKED}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{LIMITATION_OR_ACTION}}` |

## Architecture and compatibility

| Boundary/contract/invariant | Expected state | Components/versions checked | Result | Evidence | Change decision required |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{EXPECTED}}` | `{{IDENTIFIERS}}` | `{{PASS_FAIL_PARTIAL_NOT_RUN}}` | `{{EVIDENCE}}` | `{{DECISION_OR_NONE}}` |

## Verification summary

| Verification level | Environment and boundary | Command/procedure | Exit/result | Evidence | Claim established | Claim not established |
| --- | --- | --- | --- | --- | --- | --- |
| `{{SIMULATED_COMPONENT_PACKAGED_INTEGRATED_REPRESENTATIVE_PHYSICAL_SPECIALIST_EFFECTIVE_OR_OTHER}}` | `{{ENVIRONMENT}}` | `{{EXACT_COMMAND_OR_PROCEDURE}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{CLAIM}}` | `{{LIMIT}}` |

Record failures, skips, reruns, environment limitations, unavailable systems,
and manual checks separately. A passing summary is not a substitute for the
underlying evidence.

## Decisions, risks, and deviations

| Item | Type | Impact | Decision/action | Owner/approver | Due/review trigger |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{DECISION_RISK_DEFECT_DEVIATION_UNKNOWN}}` | `{{IMPACT}}` | `{{ACTION}}` | `{{OWNER}}` | `{{DATE_OR_TRIGGER}}` |

## Checkpoint decision

Decision: `{{MET_NOT_MET_PARTIAL_DEFERRED}}`.

Rationale: `{{EVIDENCE_BASED_RATIONALE_AND_LIMITATIONS}}`.

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| Accountable delivery owner | `{{NAME}}` | `{{ACCEPT_REJECT_DEFER}}` | `{{DATE}}` | `{{SCOPE}}` |
| Technical owner | `{{NAME}}` | `{{ACCEPT_REJECT_DEFER}}` | `{{DATE}}` | `{{SCOPE}}` |
| Quality/verification owner | `{{NAME}}` | `{{ACCEPT_REJECT_DEFER}}` | `{{DATE}}` | `{{SCOPE}}` |
| Specialist owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{ACCEPT_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` | `{{SCOPE}}` |

## Handoff

- Next authorised outcome: `{{OUTCOME}}`.
- Preconditions for the next checkpoint or release candidate: `{{CONDITIONS}}`.
- Open work, owners, and dates: `{{ITEMS}}`.
- Evidence that will become stale after: `{{CHANGE_DATE_OR_EVENT}}`.
