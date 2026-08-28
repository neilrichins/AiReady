# System and Organization Controls 2 (SOC 2) readiness checklist

Use this optional record when the
[applicability decision](COMPLIANCE_APPLICABILITY_CHECKLIST.md) identifies a
System and Organization Controls 2 (SOC 2) examination or customer assurance
objective. Use current material from the
[American Institute of Certified Public Accountants (AICPA)](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2/),
the engagement agreement, and the service auditor.

Do not copy protected criteria or guidance unless permitted. Completing this
record is internal readiness work. SOC 2 is an attestation examination, not a
certification, and only a qualified independent service auditor can issue the report.

## Engagement identity

| Field | Value |
| --- | --- |
| Service organisation/legal entity | `{{NAME}}` |
| Scoped system and services | `{{SYSTEM_SERVICES_AND_BOUNDARIES}}` |
| Intended users and purpose | `{{USERS_AND_PURPOSE}}` |
| Trust Services Criteria categories selected | `{{SECURITY_AVAILABILITY_PROCESSING_INTEGRITY_CONFIDENTIALITY_PRIVACY}}` |
| Examination type and date/period | `{{TYPE_AND_PERIOD}}` |
| Criteria and guidance version | `{{CONTROLLED_SOURCE}}` |
| Service auditor | `{{FIRM_OR_NOT_SELECTED}}` |
| Readiness owner | `{{NAME_AND_ROLE}}` |
| Evidence index | `{{LOCATION}}` |

## 1. Confirm the objective and scope

- [ ] Confirm whether the request is for readiness, a point-in-time examination,
  an examination covering operation over a period, or a customer questionnaire.
- [ ] Confirm the current AICPA Trust Services Criteria, description criteria,
  reporting guidance, engagement terms, and service-auditor instructions.
- [ ] Select criteria categories based on service commitments, system requirements,
  risks, contracts, intended users, and auditor agreement rather than marketing preference.
- [ ] Define the system boundary across infrastructure, software, people,
  procedures, data, locations, repositories, vendors, and operational processes.
- [ ] Identify subservice organisations and agree whether each is treated through
  the inclusive or carve-out method with the service auditor.
- [ ] Identify complementary user-entity controls, complementary subservice controls,
  customer responsibilities, and assumptions necessary to meet commitments.
- [ ] Define the assessment date or period and ensure control evidence covers it.

Approved scope and engagement source: `{{LOCATION_AND_APPROVER}}`.

## 2. System description readiness

- [ ] Describe the services provided and principal service commitments and system requirements.
- [ ] Describe infrastructure, software, people, procedures, data, system boundaries,
  significant changes, incidents, and relevant business processes accurately.
- [ ] Describe inputs, processing, outputs, interfaces, data flows, trust boundaries,
  supporting repositories, deployment paths, and effective environments.
- [ ] Describe applicable criteria, controls, subservice organisations,
  complementary controls, and excluded areas without obscuring dependencies.
- [ ] Reconcile the description against contracts, architecture, inventories,
  production reality, evidence, prior reports, and customer representations.
- [ ] Record significant events and changes during the period, including mergers,
  migrations, control redesigns, vendor changes, outages, incidents, and late implementation.

Description owner and version: `{{OWNER_LOCATION_AND_DATE}}`.

## 3. Control design and mapping

Use licensed/current criteria references in the
[control and evidence register](CONTROL_AND_EVIDENCE_REGISTER.md).

| Criteria reference | Risk/commitment | Control IDs | Scope | Design result | Operating evidence | Exception/gap |
| --- | --- | --- | --- | --- | --- | --- |
| `{{CONTROLLED_REFERENCE}}` | `{{RISK_OR_COMMITMENT}}` | `{{CONTROL_IDS}}` | `{{SCOPE}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{GAP}}` |

- [ ] Map every selected criterion without treating a crosswalk to another
  standard as proof of coverage.
- [ ] Include entity-level governance, oversight, risk assessment, communication,
  monitoring, control activities, logical and physical access, operations,
  change management, risk mitigation, and category-specific controls as applicable.
- [ ] Link each control to a named owner, operator, frequency, population,
  evidence source, exception process, and failure escalation.
- [ ] Identify manual controls, system-dependent manual controls, automated controls,
  inherited controls, and controls operated by vendors or customers.
- [ ] Verify control design against actual commitments and risks, not only prior-report wording.

## 4. Operating evidence and period coverage

- [ ] Establish the complete population for recurring controls before sampling.
- [ ] Preserve evidence throughout the period rather than manufacturing it at year end.
- [ ] Verify access provisioning, review, privileged activity, termination, change,
  deployment, incident, vulnerability, backup, recovery, monitoring, supplier,
  risk, and governance controls as applicable to the selected criteria.
- [ ] Record missed instances, late performance, unauthorised overrides, population
  gaps, unavailable evidence, contradictory logs, and control-owner changes.
- [ ] Distinguish a control that did not operate from evidence that was not retained.
- [ ] Reperform or independently inspect automated results where the tool,
  configuration, data, or access could make the evidence unreliable.
- [ ] Confirm evidence for interconnected repositories and services establishes
  the complete scoped system rather than isolated component health.

## 5. Privacy-category checks when selected

- [ ] Reconcile privacy commitments, notices, consent or other authority,
  collection, use, retention, disposal, access, disclosure, quality, monitoring,
  data-subject communication, complaints, and incidents with actual processing.
- [ ] Distinguish AICPA privacy criteria from legal compliance with the General
  Data Protection Regulation (GDPR) or another privacy law.
- [ ] Link applicable legal obligations to the
  [GDPR and privacy checklist](GDPR_AND_PRIVACY_CHECKLIST.md) and obligations register.

## 6. Exceptions, remediation, and representation

| ID | Control/criteria | Exception and period | Cause/prevalence | Commitment/user impact | Remediation | Owner/due | Auditor treatment |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{REFERENCE}}` | `{{DETAILS}}` | `{{CAUSE}}` | `{{IMPACT}}` | `{{ACTION}}` | `{{OWNER_DATE}}` | `{{UNKNOWN_OR_AUDITOR_INPUT}}` |

- [ ] Do not remove or rewrite exceptions to create a cleaner readiness result.
- [ ] Determine cause, affected population and period, risk, compensating evidence,
  remediation, retest, disclosure, and customer impact.
- [ ] Reconcile management representations and assertions with exceptions,
  legal matters, incidents, commitments, and known limitations.
- [ ] Leave opinion wording, materiality, sampling sufficiency, and final report
  treatment to the service auditor.

## 7. Readiness decision

| Input | Result/evidence |
| --- | --- |
| Engagement, criteria, type, period, scope, and intended users agreed | `{{RESULT}}` |
| System description complete and accurate | `{{RESULT}}` |
| Criteria-to-control mapping complete | `{{RESULT}}` |
| Control design readiness | `{{RESULT}}` |
| Operating evidence and population completeness | `{{RESULT}}` |
| Subservice and complementary controls | `{{RESULT}}` |
| Exceptions, remediation, and management representations | `{{RESULT}}` |
| Claims boundary | `{{RESULT}}` |

Readiness decision: `{{READY_NOT_READY_DEFERRED_WITH_SCOPE_AND_CONDITIONS}}`.

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| System/control owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Management assertion owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{DETAILS}}` |
| Legal/compliance owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Service auditor | `{{NAME_OR_NOT_APPLICABLE}}` | `{{INDEPENDENT_OPINION_OR_NOT_APPLICABLE}}` | `{{DATE}}` | `{{DETAILS}}` |
