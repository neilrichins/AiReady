# Compliance control and evidence register

Use this optional register to describe reusable controls and link them to the
requirements they support. A control mapping is not evidence that the control
is correctly designed, implemented, operating, or sufficient for every mapped
obligation.

## Register identity

| Field | Value |
| --- | --- |
| Organisation/product/service | `{{NAME_AND_SCOPE}}` |
| Exact system boundary | `{{REPOSITORIES_SERVICES_DATA_ENVIRONMENTS_AND_VENDORS}}` |
| Control owner | `{{NAME_AND_ROLE}}` |
| Assessment period/candidate | `{{DATES_AND_IMMUTABLE_IDENTIFIERS}}` |
| Evidence location | `{{PROTECTED_LOCATION}}` |
| Last reviewed | `{{DATE}}` |

## Control register

| Control ID | Outcome and risk addressed | Obligation IDs | Scope/components | Owner/operator | Implementation | Frequency/trigger | Design result | Operating result | Evidence IDs | Gaps/exceptions |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `CTL-001` | `{{OUTCOME_AND_RISK}}` | `{{OBLIGATIONS}}` | `{{SCOPE}}` | `{{OWNER}}` | `{{PEOPLE_PROCESS_TECHNOLOGY}}` | `{{FREQUENCY}}` | `{{RESULT}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{DETAILS}}` |

## Control design record

For each material control, answer:

- [ ] Does the control outcome address the complete obligation and identified risk?
- [ ] Are scope, owner, operator, authority, trigger, inputs, actions, outputs,
  escalation, retention, and failure handling defined?
- [ ] Are preventive, detective, corrective, recovery, and monitoring elements
  selected according to the risk rather than convenience?
- [ ] Are human, process, physical, technical, supplier, and customer dependencies explicit?
- [ ] Can the control fail silently, be bypassed, be disabled, or produce a
  misleading success result? If so, how is that detected?
- [ ] Are segregation of duties, least privilege, approval, emergency access,
  and revocation appropriate?
- [ ] Are all interconnected repositories, services, deployment paths, and
  effective environments included?
- [ ] Does the test method establish only design, a point-in-time result, or
  operating effectiveness over the required period?

## Evidence record

| Evidence ID | Control/obligation | Exact subject and period | Collection method | Source system | Collector | Integrity/version | Result | Limitation | Protected location | Retention |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `EVD-001` | `{{CONTROL_OR_OBLIGATION}}` | `{{SCOPE_AND_PERIOD}}` | `{{METHOD}}` | `{{SOURCE}}` | `{{PERSON_OR_AUTHORISED_AUTOMATION}}` | `{{HASH_VERSION_OR_OTHER_ID}}` | `{{RESULT}}` | `{{LIMITATION}}` | `{{LOCATION}}` | `{{RULE}}` |

Evidence must identify failed, skipped, cancelled, partial, stale, contradictory,
and inaccessible results. Screenshots, dashboards, tickets, policy files, and
configuration are evidence only for what they actually show.

## Test record

| Test ID | Control | Design or operating test | Population and sample | Method/environment | Expected | Actual | Result | Tester/reviewer | Date | Evidence/defect |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `TST-001` | `{{CONTROL}}` | `{{TEST_TYPE}}` | `{{POPULATION_SAMPLE_AND_RATIONALE}}` | `{{METHOD}}` | `{{EXPECTED}}` | `{{ACTUAL}}` | `{{RESULT}}` | `{{OWNER}}` | `{{DATE}}` | `{{LINK}}` |

## Inherited and shared controls

| Control | Provider | Consumer | Responsibility split | Assurance/evidence obtained | Complementary consumer action | Gap/expiry |
| --- | --- | --- | --- | --- | --- | --- |
| `{{CONTROL}}` | `{{PROVIDER}}` | `{{CONSUMER}}` | `{{RESPONSIBILITIES}}` | `{{EVIDENCE}}` | `{{ACTION}}` | `{{GAP}}` |

Do not mark a control verified because a cloud provider, parent organisation,
shared platform, another repository, or customer claims to perform it. Confirm
scope, period, exceptions, complementary actions, and the consumer configuration.

## Artificial intelligence-assisted evaluation record

Record any material artificial intelligence (AI) contribution separately.

| AI activity | Authority | Inputs and data classification | Model/tool/version | Human verification | Unsupported conclusions | Evidence retained |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ACTIVITY}}` | `{{AUTHORITY}}` | `{{INPUTS}}` | `{{IDENTIFIER}}` | `{{REVIEW}}` | `{{LIMITS}}` | `{{EVIDENCE}}` |

AI output is a work product or test input, not an approval or independent source.

## Review decision

| Role | Name | Decision | Date | Scope and conditions |
| --- | --- | --- | --- | --- |
| Control owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Independent verifier | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Risk/compliance owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
