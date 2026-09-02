# Requirements register

## Status definitions

- **Proposed:** identified but not approved.
- **Approved:** accepted into scope with an owner and acceptance criteria.
- **Deferred:** intentionally postponed with rationale.
- **Rejected:** not accepted into scope.
- **Retired:** no longer applicable, with migration or removal complete.

Record delivery states separately:

- **Implemented:** implementation exists but is not necessarily verified or validated.
- **Verified:** evidence shows that the implementation satisfies the stated
  requirement for the named version, environment, and method.
- **Validated:** evidence shows that the implemented outcome meets the intended
  user, business, operational, or stakeholder need in the stated context.

Verification and validation answer different questions. One does not imply the other.

## Requirements

| ID/version | Requirement | Type/priority | Owner | Lifecycle state | Implementation state | Verification state/evidence | Validation state/evidence | Features | Target release |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `REQ-001/{{VERSION}}` | `{{TESTABLE_REQUIREMENT}}` | `{{TYPE_AND_PRIORITY}}` | `{{OWNER}}` | `{{STATE}}` | `{{STATE}}` | `{{STATE_AND_EVIDENCE}}` | `{{STATE_AND_EVIDENCE}}` | `{{FEATURE_IDS}}` | `{{RELEASE_OR_BACKLOG}}` |

## Requirement detail

### REQ-001 — {{SHORT_NAME}}

- Version/effective date: `{{VERSION_AND_DATE}}`
- Rationale: `{{WHY_REQUIRED}}`
- Source and exact source version: `{{USER_RESEARCH_CONTRACT_POLICY_RISK_DECISION_OR_OTHER}}`
- Parent/derived from: `{{REQUIREMENT_IDS_OR_NONE}}`
- Derived or allocated requirements: `{{REQUIREMENT_IDS_OR_NONE}}`
- Traced to: `{{DESIGN_FEATURE_RISK_OPERATION_AND_RELEASE_IDS}}`
- Acceptance criteria:
  - [ ] `{{OBSERVABLE_CRITERION}}`
- Failure impact: `{{IMPACT}}`
- Dependencies: `{{REQUIREMENT_FEATURE_REPOSITORY_OR_EXTERNAL_DEPENDENCIES}}`
- Verification method: `{{TEST_REVIEW_INSPECTION_ANALYSIS_OR_DEMONSTRATION}}`
- Verification owner and evidence: `{{OWNER_LINK_OR_ARTEFACT}}`
- Validation method and context: `{{USER_STAKEHOLDER_OPERATIONAL_OR_OTHER_EVALUATION}}`
- Validation owner and evidence: `{{OWNER_LINK_OR_ARTEFACT}}`
- Supersedes/superseded by: `{{REQUIREMENT_IDS_OR_NONE}}`
- Approved by/date: `{{APPROVER_AND_DATE}}`

## Requirement quality review

For each material requirement, confirm or record the gap:

- [ ] Necessary: a current source, rationale, and owner justify the requirement.
- [ ] Singular: the statement contains one independently traceable obligation or outcome.
- [ ] Unambiguous: defined terms, actors, conditions, quantities, and boundaries
  support one consistent interpretation.
- [ ] Feasible: delivery constraints, dependencies, technology, data, operations,
  schedule, and cost do not make the requirement knowingly unattainable.
- [ ] Implementation-neutral where appropriate: the requirement describes the
  required outcome without silently prescribing an unapproved solution.
- [ ] Verifiable: objective acceptance criteria, method, environment, data,
  expected result, and evidence owner are defined.
- [ ] Validatable: the intended user, business, operational, or stakeholder need
  and a suitable evaluation context are defined.
- [ ] Traceable: source, parent or derivation, design, features, risks,
  implementation, tests, evidence, releases, and supersession are linked as applicable.

## Change control

Material requirement changes must update affected features, verification coverage, risks, release scope, documentation, and cross-repository contracts in the same change set.

| Date/version | Requirement | Change and reason | Source/decision | Affected traces and evidence | Approver |
| --- | --- | --- | --- | --- | --- |
| `{{DATE_AND_VERSION}}` | `{{REQUIREMENT_ID}}` | `{{CHANGE_AND_RATIONALE}}` | `{{REFERENCE}}` | `{{IMPACT}}` | `{{OWNER}}` |

Preserve stable identifiers and history. A material semantic change requires a
new version or superseding requirement; do not silently rewrite evidence that
supported an earlier definition.
