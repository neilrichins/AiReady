# Release evidence: {{VERSION_OR_CANDIDATE}}

Create one completed record for every candidate that reaches a release decision, including rejected, failed, cancelled, and rolled-back candidates. Preserve it as an immutable historical record after closure; corrections should be append-only and attributable.

## Record control

| Field | Value |
| --- | --- |
| Record status | `{{DRAFT_DECISION_COMPLETE_CORRECTED}}` |
| Release outcome | `{{APPROVED_REJECTED_RELEASED_FAILED_CANCELLED_ROLLED_BACK}}` |
| Release class | `{{STANDARD_MAJOR_MINOR_PATCH_HOTFIX_EMERGENCY_OTHER}}` |
| Record owner | `{{OWNER}}` |
| Created/closed | `{{TIMESTAMPS}}` |
| Evidence archive | `{{IMMUTABLE_LOCATION}}` |
| Correction history | `{{APPEND_ONLY_CORRECTIONS_OR_NONE}}` |

## Release identity

| Field | Value |
| --- | --- |
| Product/service | `{{NAME}}` |
| Version/release identifier | `{{VERSION_OR_IDENTIFIER}}` |
| Candidate identifier | `{{CANDIDATE_IDENTIFIER}}` |
| Change-set baseline and head | `{{IDENTIFIERS}}` |
| Issue/review references | `{{LINKS_OR_IDENTIFIERS}}` |
| Release target/environment | `{{TARGET}}` |
| Planned window | `{{START_AND_END}}` |
| Compatibility promise | `{{SUPPORTED_VERSIONS_OR_CONTRACT}}` |
| Supersedes | `{{PRIOR_RELEASE_OR_NONE}}` |

Earlier release records remain unchanged. This record applies only to the exact candidate identified below.

## Exact commits, components, and artefacts

| Repository/component | Commit/version | Artefact and immutable digest | Build/provenance evidence | Configuration/schema version | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{REPOSITORY_OR_COMPONENT}}` | `{{IDENTIFIER}}` | `{{ARTEFACT_AND_DIGEST}}` | `{{EVIDENCE}}` | `{{VERSION}}` | `{{OWNER}}` |

Candidate integrity result: `{{PASS_FAIL_AND_EVIDENCE}}`.

Record how the approved candidate was proven identical to the released artefact. A branch name, moving tag, environment label, or successful build alone is insufficient.

## Scope and feature qualification

### Included scope

| Feature/change ID | Required outcome | Implementation state | Verification state | Candidate-specific evidence | Release qualification |
| --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{OUTCOME}}` | `{{STATE}}` | `{{STATE}}` | `{{EVIDENCE}}` | `{{INCLUDED_CONDITIONALLY_INCLUDED_REJECTED}}` |

### Explicitly excluded or deferred scope

| Item | Reason | User/operational impact | Owner | Target or decision reference |
| --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{REASON}}` | `{{IMPACT}}` | `{{OWNER}}` | `{{REFERENCE}}` |

## Gate evidence

| Gate | Status | Candidate-specific evidence | Evidence date/environment | Owner | Limitations or exceptions |
| --- | --- | --- | --- | --- | --- |
| Scope and traceability | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Build and artefact integrity | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Functional verification | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Regression verification | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Accessibility and inclusive use | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Security, privacy, and data | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Performance, capacity, and cost | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Reliability and recovery | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Compatibility and migration | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Operations, monitoring, and support | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Documentation, licensing, and obligations | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |

`NOT APPLICABLE` requires a reason, evidence, and accountable owner. Retain raw results or immutable links where permitted; do not include credentials, secrets, session material, private data, or unsafe operational details.

## Multi-repository and component coordination

Complete this section when the release spans interconnected repositories, services, packages, schemas, clients, infrastructure, content, or configuration.

| Step | Component/candidate | Prerequisite | Action/order | Compatibility check | Verification | Owner | Partial-failure response |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | `{{COMPONENT_AND_IDENTIFIER}}` | `{{PREREQUISITE}}` | `{{ACTION}}` | `{{CHECK}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{RESPONSE}}` |

Supported combination verified: `{{COMBINATION_AND_EVIDENCE}}`.

Cross-repository change-set reference: `{{MANIFEST_ISSUE_OR_OTHER_REFERENCE}}`.

## Migration and data preservation

| Concern | Required outcome | Pre-release evidence | Execution evidence | Result | Owner |
| --- | --- | --- | --- | --- | --- |
| Backup/snapshot | `{{OUTCOME}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Migration rehearsal | `{{OUTCOME}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Data preservation/reconciliation | `{{OUTCOME}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |
| Rollback/forward recovery | `{{OUTCOME}}` | `{{EVIDENCE}}` | `{{EVIDENCE}}` | `{{RESULT}}` | `{{OWNER}}` |

Point of no return and authority: `{{CONDITION_OWNER_AND_DECISION}}`.

## Effective-environment verification

| Environment/surface | Expected effective version/configuration | Verification method | Result | Timestamp | Evidence | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ENVIRONMENT}}` | `{{EXPECTED_STATE}}` | `{{METHOD}}` | `{{PASS_FAIL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

Verify externally observable behaviour and effective configuration, not only source state or deployment-command success.

## Known defects and accepted risks

| ID | Defect/risk | Affected outcome | Severity/likelihood | Control/workaround | Approver | Expiry/review | Follow-up | Release condition |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{ITEM}}` | `{{IMPACT}}` | `{{RATING}}` | `{{CONTROL}}` | `{{NAME}}` | `{{DATE}}` | `{{ACTION}}` | `{{BLOCK_ACCEPT}}` |

Risk acceptance must be explicit, within the approver's authority, time-bounded, and linked to a tracked resolution. Silence is not acceptance.

## Readiness decision

Decision: `{{APPROVE_REJECT_DEFER}}` for candidate `{{EXACT_IDENTIFIER}}`.

Decision timestamp: `{{TIMESTAMP}}`.

Conditions: `{{CONDITIONS_OR_NONE}}`.

| Role | Name | Decision | Timestamp | Scope/conditions |
| --- | --- | --- | --- | --- |
| Release owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{TIMESTAMP}}` | `{{SCOPE}}` |
| Product owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{TIMESTAMP}}` | `{{SCOPE}}` |
| Technical/operations owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{TIMESTAMP}}` | `{{SCOPE}}` |
| Specialist owner(s) | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{TIMESTAMP}}` | `{{SCOPE}}` |

A materially changed candidate requires a new decision and updated evidence.

## Release execution and result

| Event | Planned | Actual timestamp/result | Operator | Evidence | Deviation/incident |
| --- | --- | --- | --- | --- | --- |
| Start | `{{PLAN}}` | `{{ACTUAL}}` | `{{OWNER}}` | `{{EVIDENCE}}` | `{{NONE_OR_REFERENCE}}` |
| Component/migration step | `{{PLAN}}` | `{{ACTUAL}}` | `{{OWNER}}` | `{{EVIDENCE}}` | `{{NONE_OR_REFERENCE}}` |
| Traffic/publication/activation | `{{PLAN}}` | `{{ACTUAL}}` | `{{OWNER}}` | `{{EVIDENCE}}` | `{{NONE_OR_REFERENCE}}` |
| Completion/abort/rollback | `{{PLAN}}` | `{{ACTUAL}}` | `{{OWNER}}` | `{{EVIDENCE}}` | `{{NONE_OR_REFERENCE}}` |

Final released identifier and artefact digest: `{{IDENTIFIER_DIGEST_OR_NONE}}`.

Final result: `{{RELEASED_FAILED_CANCELLED_ROLLED_BACK}}`.

## Post-release verification and closure

| Check | Expected result | Actual result | Timestamp | Evidence | Owner | Follow-up |
| --- | --- | --- | --- | --- | --- | --- |
| Effective version/configuration | `{{EXPECTED}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |
| Critical journeys/contracts | `{{EXPECTED}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |
| Monitoring/error/health signals | `{{EXPECTED}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |
| Data/migration reconciliation | `{{EXPECTED}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |
| Support/customer impact | `{{EXPECTED}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |

Closure decision and timestamp: `{{CLOSED_OPEN_WITH_ACTIONS_AND_TIMESTAMP}}`.

## Deviations, incidents, and follow-up

| ID | Planned versus actual difference, incident, or lesson | Impact | Decision/action | Owner | Due | Tracking reference |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{ITEM}}` | `{{IMPACT}}` | `{{ACTION}}` | `{{OWNER}}` | `{{DATE}}` | `{{REFERENCE}}` |
