# International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 27001 readiness checklist

Use this optional record only when the
[applicability decision](COMPLIANCE_APPLICABILITY_CHECKLIST.md) identifies an
information security management system (ISMS), customer requirement,
procurement requirement, or certification objective based on International
Organization for Standardization/International Electrotechnical Commission
(ISO/IEC) 27001.

The official source is [ISO/IEC 27001:2022](https://www.iso.org/standard/27001),
including applicable amendments such as ISO/IEC 27001:2022/Amd 1:2024. Obtain
and use an authorised current copy. This checklist deliberately does not
reproduce the standard's requirements or Annex A control text.

Completing this record does not establish conformity or certification. Only an
authorised certification body can issue certification for an approved scope.

## Readiness identity

| Field | Value |
| --- | --- |
| Organisation and ISMS owner | `{{ENTITY_AND_OWNER}}` |
| Intended ISMS scope | `{{BOUNDARIES_LOCATIONS_SERVICES_TECHNOLOGY_AND_EXCLUSIONS}}` |
| Standard/version/amendments | `{{LICENSED_SOURCE_DETAILS}}` |
| Objective | `{{INTERNAL_ADOPTION_CUSTOMER_PROCUREMENT_OR_CERTIFICATION}}` |
| Certification body/auditor | `{{NAME_OR_NOT_SELECTED}}` |
| Assessment period | `{{DATES}}` |
| Repositories/services/releases in scope | `{{IDENTIFIERS}}` |
| Evidence index | `{{LOCATION}}` |
| Readiness assessor and independent reviewer | `{{NAMES_AND_ROLES}}` |

## 1. Source, scope, and authority

- [ ] Confirm access to the correct licensed standard, amendments,
  certification rules, accreditation requirements, and contractual sources.
- [ ] Define the ISMS scope using actual organisational, physical, technical,
  information, service, process, interface, dependency, and location boundaries.
- [ ] Identify outsourced processes, cloud and shared services, interconnected
  repositories, supporting teams, suppliers, customers, and inherited controls.
- [ ] Record exclusions and interfaces without excluding dependencies that can
  affect confidentiality, integrity, availability, or the ISMS outcomes.
- [ ] Identify interested parties and their legal, regulatory, contractual,
  security, privacy, resilience, and assurance requirements.
- [ ] Assign top-management accountability, ISMS ownership, control ownership,
  independent verification, internal audit, risk acceptance, and certification liaison.
- [ ] Record relevant internal and external context, including material climate
  considerations required by the current amendment.

Approved ISMS scope and evidence: `{{LOCATION_AND_APPROVER}}`.

## 2. ISMS governance

- [ ] Approve an information security policy aligned to the organisation's
  purpose, risks, obligations, objectives, and commitment to continual improvement.
- [ ] Define roles, responsibilities, authorities, segregation of duties, and
  escalation across all in-scope entities, repositories, services, and vendors.
- [ ] Establish measurable information security objectives, owners, resources,
  timeframes, methods, monitoring, and change control.
- [ ] Provide competent personnel, awareness, communication, and retained
  evidence appropriate to each security responsibility.
- [ ] Control creation, approval, version, availability, protection, change,
  retention, and disposal of required documented information.
- [ ] Integrate ISMS requirements into product, software, data, procurement,
  supplier, personnel, physical, operational, incident, continuity, and release processes.

## 3. Information security risk management

| Risk activity | Method/source | Scope/population | Owner | Result/evidence | Limitation/action |
| --- | --- | --- | --- | --- | --- |
| Risk identification and analysis | `{{METHOD}}` | `{{SCOPE}}` | `{{OWNER}}` | `{{RESULT}}` | `{{LIMITATION}}` |
| Risk evaluation and acceptance criteria | `{{METHOD}}` | `{{SCOPE}}` | `{{OWNER}}` | `{{RESULT}}` | `{{LIMITATION}}` |
| Risk treatment and residual risk | `{{METHOD}}` | `{{SCOPE}}` | `{{OWNER}}` | `{{RESULT}}` | `{{LIMITATION}}` |
| Change and emerging-risk review | `{{METHOD}}` | `{{SCOPE}}` | `{{OWNER}}` | `{{RESULT}}` | `{{LIMITATION}}` |

- [ ] Use repeatable risk criteria and preserve threat, vulnerability, likelihood,
  consequence, existing control, uncertainty, treatment, and residual-risk evidence.
- [ ] Include information in every form and risks from people, process, physical
  conditions, technology, suppliers, software supply chain, data, and artificial
  intelligence (AI) use.
- [ ] Connect risks to accountable owners and treatment plans with due dates.
- [ ] Require authorised acceptance of residual risk; AI cannot accept risk.

## 4. Statement of Applicability and control selection

Maintain the Statement of Applicability (SoA) in an authorised system.

| SoA/control reference | Selected | Selection or exclusion rationale | Implementation status | Control owner | Evidence IDs | Gap/treatment |
| --- | --- | --- | --- | --- | --- | --- |
| `{{LICENSED_REFERENCE}}` | `{{YES_NO}}` | `{{RATIONALE}}` | `{{STATE}}` | `{{OWNER}}` | `{{EVIDENCE}}` | `{{ACTION}}` |

- [ ] Consider all controls required by risk treatment, Annex A, law, contract,
  customer commitments, and other adopted sources using the licensed text.
- [ ] Explain every included and excluded Annex A control and identify additional
  controls required by the organisation's risks.
- [ ] Ensure the SoA matches actual implementation, control ownership, risk
  treatment, system scope, evidence, and current standard version.
- [ ] Verify organisational, people, physical, and technological controls rather
  than reducing the ISMS to repository or cloud configuration checks.

## 5. Operation and evidence

- [ ] Operate risk assessment and treatment at planned intervals and after
  material organisational, product, architecture, supplier, threat, incident,
  jurisdiction, contract, and release changes.
- [ ] Preserve evidence for access, asset and information handling, personnel,
  physical safeguards, secure development, cryptography, operations, logging,
  vulnerabilities, suppliers, incidents, continuity, recovery, compliance, and
  other selected controls as required by the licensed sources and SoA.
- [ ] Verify shared and inherited controls, complementary customer responsibilities,
  supplier assurance periods, exceptions, and consumer configurations.
- [ ] Test control failure, override, emergency access, revocation, escalation,
  recovery, and monitoring rather than collecting successful screenshots only.
- [ ] Reconcile effective-environment evidence with source, pipeline, ticket,
  policy, interview, and configuration evidence.

Use the [control and evidence register](CONTROL_AND_EVIDENCE_REGISTER.md) and
[audit evidence index](AUDIT_EVIDENCE_INDEX.md) for detailed records.

## 6. Performance evaluation and improvement

- [ ] Define what is monitored and measured, methods, frequency, criteria,
  ownership, analysis, evaluation, reporting, and retained evidence.
- [ ] Plan risk-based internal audits with competent, objective auditors who do
  not audit their own work where independence is required.
- [ ] Cover the complete ISMS scope, requirements, selected controls, sites,
  services, repositories, suppliers, and time periods across the audit programme.
- [ ] Record nonconformities and objective evidence without downgrading them to
  recommendations for convenience.
- [ ] Conduct management review with required inputs, decisions, actions,
  resources, changes, opportunities, and retained approval evidence.
- [ ] Contain and correct nonconformities, determine cause and prevalence,
  implement corrective action, verify effectiveness, and update risks and controls.
- [ ] Demonstrate continual improvement through outcomes, not document volume.

## 7. Certification-readiness decision

| Readiness input | Result/evidence |
| --- | --- |
| Licensed sources, scope, interested parties, and requirements | `{{RESULT}}` |
| Risk assessment, treatment plan, residual-risk approval, and SoA | `{{RESULT}}` |
| Control design and operating evidence | `{{RESULT}}` |
| Objectives, monitoring, internal audit, and management review | `{{RESULT}}` |
| Nonconformities and corrective-action effectiveness | `{{RESULT}}` |
| Certification stage, sites, sampling, and external-audit plan | `{{RESULT}}` |
| Open gaps, exclusions, limitations, and claim boundary | `{{RESULT}}` |

Readiness decision: `{{READY_NOT_READY_DEFERRED_WITH_SCOPE_AND_CONDITIONS}}`.

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| ISMS owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Internal audit owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Top management | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{DETAILS}}` |
| Certification body | `{{NAME_OR_NOT_APPLICABLE}}` | `{{EXTERNAL_DECISION_OR_NOT_APPLICABLE}}` | `{{DATE}}` | `{{DETAILS}}` |
