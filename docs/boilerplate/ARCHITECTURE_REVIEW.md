# Architecture review and improvement record

## Purpose and boundary

Use this optional record for a point-in-time, evidence-based review of a system,
workload, product, service, or material architecture change. Adapt it into the
project's existing architecture, risk, decision, or work-management system when
that system is authoritative.

This record may map a review to an external architecture framework, but it does
not reproduce that framework, replace its official review method, certify
conformity, or approve a release. A completed review identifies decisions,
risks, and improvement work; evidence and accountable approval remain required.

## Review control

| Field | Value |
| --- | --- |
| System/workload and boundary | `{{SCOPE}}` |
| Repositories/components/versions | `{{IDENTIFIERS}}` |
| Environments and effective version | `{{ENVIRONMENTS_AND_STATE}}` |
| Lifecycle stage or review trigger | `{{DESIGN_MIGRATION_GO_LIVE_MATERIAL_CHANGE_INCIDENT_PERIODIC_OR_OTHER}}` |
| Criticality and business context | `{{CLASSIFICATION_AND_CONTEXT}}` |
| Accountable architecture owner | `{{OWNER}}` |
| Review facilitator | `{{NAME_OR_ROLE}}` |
| Required participants | `{{PRODUCT_ENGINEERING_SECURITY_DATA_OPERATIONS_FINANCE_SUSTAINABILITY_OR_OTHER}}` |
| Review date/status | `{{DATE_AND_DRAFT_REVIEW_APPROVED_SUPERSEDED}}` |
| Previous review | `{{IDENTIFIER_OR_NONE}}` |
| Next review date/trigger | `{{DATE_OR_EVENT}}` |

The review should be proportionate, collaborative, and focused on improving
user and business outcomes. It is not a blame exercise or a substitute for the
specialist evaluation required by an applicable risk or obligation.

## Framework, lens, or profile selection

Select only sources that apply to the stated system and review purpose. Verify
the current official source, version, licensing conditions, and permitted use
before relying on or storing controlled material.

| Framework/lens/profile | Applicability and reason | Official source/version/date | Selected scope/questions | Authoritative result location | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{FRAMEWORK_OR_INTERNAL_METHOD}}` | `{{APPLIES_DOES_NOT_APPLY_UNCLEAR_AND_REASON}}` | `{{SOURCE_VERSION_AND_DATE}}` | `{{SCOPE_OR_REFERENCES}}` | `{{LINK_OR_LOCATION}}` | `{{OWNER}}` |

Examples of external sources that a project may select include:

- [Amazon Web Services Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html);
- [Microsoft Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/what-is-well-architected-framework);
- [Google Cloud Well-Architected Framework](https://docs.cloud.google.com/architecture/framework);
- [The Open Group Architecture Framework](https://www.opengroup.org/togaf), subject to its current licensing conditions;
- [FinOps Framework](https://www.finops.org/framework/), subject to its current attribution terms; and
- [National Institute of Standards and Technology Cybersecurity Framework](https://www.nist.gov/cyberframework) for security-risk outcomes.

This list is not exhaustive and does not make any framework applicable. Link to
provider-native assessments or licensed records rather than copying volatile or
restricted questionnaires into this document.

## Stakeholders, concerns, and views

| Stakeholder or affected group | Concern/decision | Required outcome | Architecture view or evidence needed | Owner | Status/gap |
| --- | --- | --- | --- | --- | --- |
| `{{STAKEHOLDER}}` | `{{CONCERN}}` | `{{OUTCOME}}` | `{{VIEW_SOURCE_OR_EVIDENCE}}` | `{{OWNER}}` | `{{STATUS}}` |

Include users, affected non-users, product and delivery owners, operators,
support, security/privacy/data specialists, finance/procurement, suppliers, and
dependent-system owners where applicable. A diagram or model supports only the
concerns, scope, and currency it actually represents.

## Baseline, target, and transition

| Architecture dimension | Current baseline and evidence | Approved target and outcome | Gap/risk | Transition state or dependency | Owner |
| --- | --- | --- | --- | --- | --- |
| Business capability/service | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |
| Information/data | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |
| Application/component/repository | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |
| Technology/infrastructure/operations | `{{BASELINE}}` | `{{TARGET}}` | `{{GAP}}` | `{{TRANSITION}}` | `{{OWNER}}` |

Do not turn the observed baseline into approved intent or a proposed target into
implemented behaviour. Identify supported intermediate combinations,
sequencing, partial-failure response, and rollback or forward-recovery
boundaries for multi-repository or multi-component transitions.

## Quality and cross-cutting review

Use `PASS`, `FAIL`, `PARTIAL`, `CANNOT_DETERMINE`, `NOT_APPLICABLE`, or `STALE`.
Every result requires current evidence, limitations, and an owner.

| Quality concern | Applicability/required outcome | Current evidence and finding | Status | Cross-quality trade-off or dependency | Owner/action |
| --- | --- | --- | --- | --- | --- |
| Operational excellence and supportability | `{{OUTCOME}}` | `{{EVIDENCE_AND_FINDING}}` | `{{STATUS}}` | `{{EFFECT}}` | `{{OWNER_AND_ACTION}}` |
| Security, privacy, compliance, and data | `{{OUTCOME}}` | `{{EVIDENCE_AND_FINDING}}` | `{{STATUS}}` | `{{EFFECT}}` | `{{OWNER_AND_ACTION}}` |
| Reliability, continuity, and recovery | `{{OUTCOME}}` | `{{EVIDENCE_AND_FINDING}}` | `{{STATUS}}` | `{{EFFECT}}` | `{{OWNER_AND_ACTION}}` |
| Performance and capacity | `{{OUTCOME}}` | `{{EVIDENCE_AND_FINDING}}` | `{{STATUS}}` | `{{EFFECT}}` | `{{OWNER_AND_ACTION}}` |
| Cost and delivered value | `{{OUTCOME}}` | `{{EVIDENCE_AND_FINDING}}` | `{{STATUS}}` | `{{EFFECT}}` | `{{OWNER_AND_ACTION}}` |
| Sustainability and resource use | `{{OUTCOME}}` | `{{EVIDENCE_AND_FINDING}}` | `{{STATUS}}` | `{{EFFECT}}` | `{{OWNER_AND_ACTION}}` |
| Accessibility, usability, and user impact | `{{OUTCOME}}` | `{{EVIDENCE_AND_FINDING}}` | `{{STATUS}}` | `{{EFFECT}}` | `{{OWNER_AND_ACTION}}` |
| Compatibility, migration, and supplier dependency | `{{OUTCOME}}` | `{{EVIDENCE_AND_FINDING}}` | `{{STATUS}}` | `{{EFFECT}}` | `{{OWNER_AND_ACTION}}` |
| AI behaviour, data, and authority | `{{OUTCOME_OR_NOT_APPLICABLE}}` | `{{EVIDENCE_AND_FINDING}}` | `{{STATUS}}` | `{{EFFECT}}` | `{{OWNER_AND_ACTION}}` |

A favourable result in one concern must not hide degradation in another.
Record the affected user or business outcome, alternatives, evidence, risk
owner, and review trigger for every material trade-off.

## Material decisions and reversibility

| Decision ID | Choice and rationale | Alternatives | Benefits | Adverse effects/trade-offs | Reversibility and point of no return | Approver | Review trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{DECISION}}` | `{{ALTERNATIVES}}` | `{{BENEFITS}}` | `{{EFFECTS}}` | `{{BOUNDARY}}` | `{{OWNER}}` | `{{TRIGGER}}` |

Link significant decisions to the project's authoritative decision record. A
hard-to-reverse change requires greater evidence and review than a bounded,
tested, and safely reversible change.

## Findings and improvement plan

| ID | Source/reference | Finding, risk, or opportunity | User/business effect | Evidence/limitation | Priority | Action and verification | Owner/due | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{FRAMEWORK_SECTION_OR_INTERNAL_SOURCE}}` | `{{FINDING}}` | `{{EFFECT}}` | `{{EVIDENCE}}` | `{{PRIORITY}}` | `{{ACTION_AND_EVIDENCE_REQUIRED}}` | `{{OWNER_AND_DATE}}` | `{{OPEN_IN_PROGRESS_BLOCKED_VERIFIED_ACCEPTED_CLOSED}}` |

Prioritise findings using project context, not an unexamined external score.
Projected improvements are proposals until their controls and outcomes are
implemented and verified. Preserve rejected and deferred findings with reasons.

## Review conclusion

- Material strengths and evidence: `{{SUMMARY}}`.
- Critical findings/blockers: `{{ITEMS_OR_NONE}}`.
- Accepted risks and expiry: `{{REFERENCES_OR_NONE}}`.
- Required transition or improvement work: `{{REFERENCES}}`.
- Claims this review supports: `{{BOUNDED_CLAIMS}}`.
- Claims this review does not support: `{{LIMITATIONS}}`.

## Artificial intelligence use boundary

AI may inventory sources, draft mappings, identify conflicts, compare evidence
with selected framework concerns, and propose improvement work when authorised.
It must not decide applicability, copy controlled framework content without
rights, invent evidence, accept trade-offs or risk, approve architecture,
declare conformity, or expand its own authority.

## Approval

| Role | Name | Decision | Date | Conditions/limitations |
| --- | --- | --- | --- | --- |
| Architecture/technical owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Product/service owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Operations/reliability owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Security/privacy/data owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Finance/sustainability/specialist owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
