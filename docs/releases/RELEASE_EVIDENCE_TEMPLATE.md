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

### Optional supply-chain attestation and consumer verification

Complete this when the release requires provenance, attestations, signatures,
verifiable manifests, Software Bills of Materials (SBOMs), or a source/build
framework claim. Otherwise record `NOT APPLICABLE`, the reason, owner, and assessed date.

| Field | Approved expectation | Actual candidate value | Consumer verification result/evidence | Failure/revocation behaviour |
| --- | --- | --- | --- | --- |
| Subject artefact and digest | `{{EXPECTATION}}` | `{{VALUE}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` |
| Source repository, revision, and reference | `{{EXPECTATION}}` | `{{VALUE}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` |
| Builder/issuer identity and build definition | `{{EXPECTATION}}` | `{{VALUE}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` |
| Inputs, parameters, and dependency completeness | `{{EXPECTATION}}` | `{{VALUE}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` |
| Attestation/manifest/SBOM type, schema, and version | `{{EXPECTATION}}` | `{{VALUE}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` |
| Signature, certificate, keyless identity, or equivalent | `{{EXPECTATION}}` | `{{VALUE}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` |
| Trust root, identity constraints, validity, and rotation | `{{EXPECTATION}}` | `{{VALUE}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` |
| Distribution, discovery, transparency, and retention | `{{EXPECTATION}}` | `{{VALUE}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` |
| Consumer policy, policy version, verifier, and tool version | `{{EXPECTATION}}` | `{{VALUE}}` | `{{RESULT}}` | `{{BEHAVIOUR}}` |

Selected framework result, exact version, track, level, scope, and limitations:
`{{RESULT_OR_NOT_APPLICABLE}}`.

The verification evidence must identify the exact subject digest, policy,
trusted identities, verifier, time, result, and limitations. Do not present the
existence of signed metadata as successful consumer verification.

### Optional AI system release bundle

Complete this when product or operational behaviour materially depends on AI.
Otherwise record `NOT APPLICABLE`, the reason, owner, and assessed date. Link
the candidate-specific
[AI system evaluation](../boilerplate/AI_SYSTEM_EVALUATION.md).

| Element | Approved identity/version/configuration | Released effective state | Evidence | Rollback/recovery boundary |
| --- | --- | --- | --- | --- |
| Bundle identifier | `{{IDENTIFIER}}` | `{{ACTUAL}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Models/providers | `{{IDENTIFIERS_ALIASES_AND_CONFIGURATION}}` | `{{ACTUAL}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Instructions/prompts/templates | `{{IDENTIFIERS}}` | `{{ACTUAL}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Retrieval data/indexes | `{{IDENTIFIERS}}` | `{{ACTUAL}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Tools/integrations/permissions | `{{IDENTIFIERS_AND_AUTHORITY}}` | `{{ACTUAL}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Parameters/thresholds/policies/guardrails | `{{IDENTIFIERS_AND_VALUES}}` | `{{ACTUAL}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |
| Evaluation suite and result | `{{SUITE_AND_RESULT_IDENTIFIERS}}` | `{{ACTUAL}}` | `{{EVIDENCE}}` | `{{BOUNDARY}}` |

Record provider-controlled or otherwise mutable elements, observed deviations,
and whether the approved bundle can be restored as a unit.

## Scope and feature qualification

### Included scope

| Feature/change and requirement version | Required outcome | Implementation state | Verification state | Validation state | Candidate-specific evidence | Release qualification |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ID_AND_VERSION}}` | `{{OUTCOME}}` | `{{STATE}}` | `{{STATE}}` | `{{STATE}}` | `{{EVIDENCE}}` | `{{INCLUDED_CONDITIONALLY_INCLUDED_REJECTED}}` |

### Explicitly excluded or deferred scope

| Item | Reason | User/operational impact | Owner | Target or decision reference |
| --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{REASON}}` | `{{IMPACT}}` | `{{OWNER}}` | `{{REFERENCE}}` |

## Gate evidence

| Gate | Status | Candidate-specific evidence | Evidence date/environment | Owner | Limitations or exceptions |
| --- | --- | --- | --- | --- | --- |
| Scope and traceability | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Build and artefact integrity | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Provenance, attestation, and consumer-policy verification | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Functional verification | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Regression verification | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Test basis, completion criteria, variance, and residual quality risk | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Validation of intended user, business, operational, and stakeholder outcomes | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| AI-system evaluation and behavioural assurance | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Product intent, design, content, accessibility, and inclusive use | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Security, privacy, and data | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Reliability, continuity, recovery, and exercises | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Performance, capacity, and resource efficiency | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Technology cost, allocation, budget, and delivered value | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
| Sustainability and resource lifecycle | `{{PASS_FAIL_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{CONTEXT}}` | `{{OWNER}}` | `{{LIMITATION}}` |
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
| Experience/design/accessibility owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{TIMESTAMP}}` | `{{SCOPE}}` |
| Technical/operations owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{TIMESTAMP}}` | `{{SCOPE}}` |
| Quality/verification owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{TIMESTAMP}}` | `{{SCOPE}}` |
| Specialist owner(s) | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{TIMESTAMP}}` | `{{SCOPE}}` |
| Finance/cost/value/sustainability owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{TIMESTAMP}}` | `{{SCOPE}}` |

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
| Effective artefact digest and consumer-policy verification | `{{EXPECTED}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |
| Critical journeys/contracts | `{{EXPECTED}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |
| Monitoring/error/health signals | `{{EXPECTED}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |
| Cost/usage, resource-efficiency, and sustainability signals | `{{EXPECTED_OR_NOT_APPLICABLE}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |
| Temporary-resource expiry and cleanup | `{{EXPECTED_OR_NOT_APPLICABLE}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |
| Data/migration reconciliation | `{{EXPECTED}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |
| Support/customer impact | `{{EXPECTED}}` | `{{ACTUAL}}` | `{{TIMESTAMP}}` | `{{EVIDENCE}}` | `{{OWNER}}` | `{{ACTION_OR_NONE}}` |

Closure decision and timestamp: `{{CLOSED_OPEN_WITH_ACTIONS_AND_TIMESTAMP}}`.

## Deviations, incidents, and follow-up

| ID | Planned versus actual difference, incident, or lesson | Impact | Decision/action | Owner | Due | Tracking reference |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{ITEM}}` | `{{IMPACT}}` | `{{ACTION}}` | `{{OWNER}}` | `{{DATE}}` | `{{REFERENCE}}` |
