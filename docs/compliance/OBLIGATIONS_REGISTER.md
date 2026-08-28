# Compliance obligations register

Use this optional register for requirements selected through the
[applicability checklist](COMPLIANCE_APPLICABILITY_CHECKLIST.md). Record one
requirement per row at a level that can be assigned, implemented, verified,
reviewed, and changed without hiding a partial failure.

## Register identity

| Field | Value |
| --- | --- |
| Organisation/product/service | `{{NAME_AND_SCOPE}}` |
| Authoritative owner | `{{NAME_AND_ROLE}}` |
| Repository/system scope | `{{SCOPE}}` |
| Current as of | `{{DATE}}` |
| Review cadence and triggers | `{{CADENCE_AND_EVENTS}}` |
| Protected source location | `{{LOCATION_OR_NOT_APPLICABLE}}` |

## Source register

| Source ID | Type | Issuer/jurisdiction | Exact title/version/amendment | Official or controlled location | Effective/assessment period | Interpretation owner | Last verified |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `SRC-001` | `{{LAW_STANDARD_CONTRACT_GUIDANCE_POLICY}}` | `{{ISSUER}}` | `{{TITLE_VERSION}}` | `{{LOCATION}}` | `{{PERIOD}}` | `{{OWNER}}` | `{{DATE}}` |

For licensed standards, record access and version without copying protected
text into a public or unauthorised repository. For laws, verify implementing
and amending sources as well as the base instrument.

## Obligation register

| Obligation ID | Source/section | Applies to | Required outcome | Frequency/deadline | Control IDs | Verification and evidence | State | Owner | Exception/uncertainty |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `OBL-001` | `{{SOURCE_AND_SECTION}}` | `{{ENTITY_SYSTEM_DATA_PROCESS_OR_PERIOD}}` | `{{TESTABLE_OUTCOME}}` | `{{DATE_OR_EVENT}}` | `{{CONTROL_IDS}}` | `{{METHOD_AND_EVIDENCE}}` | `{{STATE}}` | `{{OWNER}}` | `{{DETAILS}}` |

## Obligation rules

- [ ] Separate duties that have different owners, systems, evidence, deadlines,
  exceptions, or possible results.
- [ ] Record the original source and section rather than citing another checklist.
- [ ] State whether the obligation concerns design, implementation, continuous
  operation, a defined period, a transaction, an incident, a filing, or a release.
- [ ] Identify every entity, repository, component, vendor, environment, dataset,
  and process inside or outside the scope.
- [ ] Record mandatory wording, form, recipient, channel, signature, retention,
  timing, or approval requirements separately from technical controls.
- [ ] Record conflicts between legal, contractual, certification, and operational
  requirements and escalate them to the appropriate owner.
- [ ] Link shared implementation to the [control and evidence register](CONTROL_AND_EVIDENCE_REGISTER.md)
  without merging distinct obligations.
- [ ] Reopen affected obligations after source, scope, architecture, supplier,
  incident, organisational, or release changes.

## Exceptions, alternatives, and inherited duties

| ID | Obligation | Claimed exception/alternative/inheritance | Authoritative basis | Preconditions and evidence | User/customer impact | Approver | Expiry/review |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `EXC-001` | `{{OBLIGATION}}` | `{{CLAIM}}` | `{{SOURCE_AND_SECTION}}` | `{{EVIDENCE}}` | `{{IMPACT}}` | `{{OWNER}}` | `{{DATE}}` |

An exception, compensating control, inherited control, transfer of responsibility,
or contractual allocation is not valid merely because it appears in this table.
Record every precondition and obtain the authority required by the controlling source.

## Change log

| Date | Source or obligation changed | Previous state | New state | Affected controls/releases/claims | Owner and approval |
| --- | --- | --- | --- | --- | --- |
| `{{DATE}}` | `{{CHANGE}}` | `{{STATE}}` | `{{STATE}}` | `{{IMPACT}}` | `{{OWNER}}` |
