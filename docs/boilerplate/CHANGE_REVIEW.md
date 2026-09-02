# Change review

## Outcome

Problem and intended user or operational outcome: `{{DESCRIBE}}`

Linked issue/change set: `{{LINK}}`

## Scope

- Repositories affected: `{{LIST_OR_SINGLE_REPOSITORY}}`
- Interfaces/schemas/packages affected: `{{LIST_OR_NONE}}`
- Data or migration impact: `{{DESCRIBE_OR_NONE}}`
- External or production effects: `{{DESCRIBE_OR_NONE}}`
- Technology cost, budget, resource, or sustainability effects: `{{DESCRIBE_OR_NONE}}`
- Required merge/release order: `{{ORDER_OR_NOT_APPLICABLE}}`
- Applicable change-impact matrix/source: `{{LINK_LOCATION_OR_NOT_APPLICABLE_WITH_REASON}}`
- High-blast-radius components or relationships: `{{LIST_OR_NONE_WITH_EVIDENCE}}`
- Canonical concept, implementation, or contract affected: `{{SOURCE_OR_NOT_APPLICABLE}}`

## Change-impact review

| Triggered relationship | Expected related change or assessment | Actual result/evidence | Exception or newly discovered impact | Owner/status |
| --- | --- | --- | --- | --- |
| `{{MATRIX_ENTRY_OR_CHANGE_SURFACE}}` | `{{EXPECTED_WORK}}` | `{{RESULT_AND_EVIDENCE}}` | `{{NONE_OR_DETAILS}}` | `{{OWNER_AND_STATUS}}` |

- [ ] Every applicable impact entry was assessed across affected repositories,
  components, contracts, generated artefacts, tests, documentation, operations,
  support, release, and recovery.
- [ ] Newly discovered relationships were added to the authoritative impact
  source or retained as an owned, time-bounded exception.
- [ ] A missing related change is classified as not applicable, deferred,
  blocked, or accepted risk with evidence and the required authority.
- [ ] High-impact relationships were assessed using current evidence, and any
  enhanced review, sequencing, verification, or recovery requirement was met.
- [ ] Similar or duplicated implementations were checked against approved
  intent before reuse, consolidation, or creation of a new variant.

## AI involvement

- AI tool/model: `{{APPROVED_TOOL_OR_NONE}}`
- AI contribution: `{{ANALYSIS_CODE_TESTS_DOCUMENTATION_OR_NONE}}`
- Human decisions and review: `{{DESCRIBE}}`
- Sensitive data exposed to AI: `NONE` or `{{APPROVED_CLASS_AND_CONTROL}}`

Do not include private prompts, credentials, personal data, restricted source, or sensitive generated output.

## Safety boundaries

- [ ] Architecture and source-of-truth boundaries are preserved.
- [ ] Generated output remains validated before executable or production use.
- [ ] Authentication, authorisation, privacy, security, accessibility, and recovery controls are not weakened.
- [ ] Cross-repository compatibility and partial-rollout states are tested where applicable.
- [ ] Inputs and trust boundaries remain validated, failure states and material
  errors remain observable, and fallback behaviour does not hide an invalid or
  unknown state without an approved decision.
- [ ] Destructive, external, production, and cost-bearing actions remain explicitly authorised.
- [ ] Provisioning, scaling, purchasing, metered use, expiry, and cleanup remain within approved resource, duration, usage, and budget limits.

## Verification

- [ ] Focused feedback loop completed: `{{COMMAND_OR_PROCEDURE_RESULT_AND_DURATION_CLASS}}`
- [ ] Complete local quality gate: `{{COMMAND}}`
- [ ] Required CI passed
- [ ] Contract/integration combinations passed or are not applicable
- [ ] Reliability and recovery exercises completed or recorded as not applicable with evidence
- [ ] Performance, capacity, and resource-efficiency checks completed or recorded as limitations
- [ ] Technology cost/value and sustainability effects verified or assigned to accountable owners
- [ ] Manual/effective-environment checks completed or recorded as limitations
- [ ] Documentation and decision records updated
- [ ] Applicable change-impact and AI-instruction currency records updated
- [ ] Rollback/recovery impact reviewed

Evidence and unresolved limitations: `{{EVIDENCE}}`

## Responsibility decisions

| Responsibility | Reviewer/owner | Decision or evidence | Status/conditions |
| --- | --- | --- | --- |
| Product and design | `{{OWNER}}` | `{{DECISION_OR_NOT_APPLICABLE_WITH_REASON}}` | `{{STATUS}}` |
| Engineering and architecture | `{{OWNER}}` | `{{DECISION}}` | `{{STATUS}}` |
| Security, privacy, and data | `{{OWNER}}` | `{{DECISION_OR_NOT_APPLICABLE_WITH_REASON}}` | `{{STATUS}}` |
| Quality and verification | `{{OWNER}}` | `{{DECISION}}` | `{{STATUS}}` |
| Operations, support, and release | `{{OWNER}}` | `{{DECISION_OR_NOT_APPLICABLE_WITH_REASON}}` | `{{STATUS}}` |
| Technology cost, value, and sustainability | `{{OWNER}}` | `{{DECISION_OR_NOT_APPLICABLE_WITH_REASON}}` | `{{STATUS}}` |
