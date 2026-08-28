# General Data Protection Regulation (GDPR) and privacy readiness checklist

Use this optional record only when the
[applicability decision](COMPLIANCE_APPLICABILITY_CHECKLIST.md) identifies
personal-data or privacy obligations. Determine the exact jurisdictions and
sources rather than assuming that the European Union General Data Protection
Regulation (GDPR) is the only applicable privacy law.

Authoritative starting sources include the
[GDPR, Regulation (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng),
national law, the competent supervisory authority, and binding decisions. In
Ireland, the Data Protection Commission publishes an official
[self-assessment checklist](https://www.dataprotection.ie/en/organisations/resources-organisations/self-assessment-checklist)
and [Data Protection Impact Assessment guidance](https://www.dataprotection.ie/en/organisations/know-your-obligations/data-protection-impact-assessments).

This record is not legal advice or a compliance declaration. Artificial
intelligence (AI) cannot decide
lawful basis, high risk, privilege, reportability, adequacy, or regulatory notification.

## Assessment identity

| Field | Value |
| --- | --- |
| Controller/joint controller/processor/other roles | `{{ENTITIES_AND_ROLES}}` |
| Product, service, processing, and release | `{{SCOPE_AND_IDENTIFIERS}}` |
| People and jurisdictions | `{{DATA_SUBJECTS_AND_LOCATIONS}}` |
| Data Protection Officer/legal owner | `{{NAME_OR_RATIONALE_IF_NOT_REQUIRED}}` |
| Assessment owner and reviewers | `{{NAMES_AND_ROLES}}` |
| Sources and versions checked | `{{SOURCES}}` |
| Assessment date and review trigger | `{{DATE_AND_TRIGGER}}` |
| Evidence and processing-record location | `{{LOCATION}}` |

## 1. Applicability, roles, and accountability

- [ ] Identify every controller, joint controller, processor, subprocessor,
  recipient, representative, Data Protection Officer, and supervisory authority.
- [ ] Determine territorial and material scope for each entity, establishment,
  offering, monitoring activity, person, and processing operation.
- [ ] Identify national implementing and supplementary law, electronic-marketing
  and cookie rules, employment rules, sector rules, contracts, and regulator guidance.
- [ ] Record accountable governance, policies, training, audit, monitoring,
  complaint, breach, rights, vendor, and change-management responsibilities.
- [ ] Document whether a Data Protection Officer and representative are required,
  the rationale, independence, resources, contact details, and escalation access.
- [ ] Maintain demonstrable accountability evidence rather than relying on a policy statement.

## 2. Processing and data-flow inventory

| Processing ID | Purpose | People/data | Sources | Systems/repos/models | Recipients/processors | Locations/transfers | Lawful basis | Retention | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `PRC-001` | `{{PURPOSE}}` | `{{DATA}}` | `{{SOURCE}}` | `{{SYSTEMS}}` | `{{RECIPIENTS}}` | `{{LOCATIONS}}` | `{{LEGAL_REVIEW}}` | `{{RULE}}` | `{{OWNER}}` |

- [ ] Inventory collected, observed, inferred, derived, generated, enriched,
  pseudonymised, anonymised, backed-up, logged, exported, and deleted data.
- [ ] Include identifiers, online identifiers, device and usage data, content,
  telemetry, support records, authentication, security logs, model inputs and
  outputs, training/evaluation data, and metadata.
- [ ] Identify special-category data, criminal-offence data, children's data,
  biometric, genetic, health, financial, location, communications, employment,
  and other high-impact data.
- [ ] Reconcile the inventory against source code, schemas, interfaces, analytics,
  cloud services, vendors, repositories, documentation, notices, contracts, and production.
- [ ] Maintain required records of processing activities and processor records.

## 3. Purpose, lawful basis, fairness, and minimisation

- [ ] Define a specific, explicit, legitimate purpose before collection or use.
- [ ] Obtain accountable legal review of the lawful basis for each purpose and
  any additional condition for special-category or criminal-offence data.
- [ ] Record legitimate-interest assessments where relied upon and preserve the
  purpose, necessity, balancing, safeguards, objections, and approval.
- [ ] Verify consent is specific, informed, freely given, unambiguous, recorded,
  granular, withdrawable, and not bundled where consent is the selected basis.
- [ ] Test necessity, proportionality, fairness, compatibility of secondary use,
  data minimisation, accuracy, storage limitation, and least-access principles.
- [ ] Prevent unapproved function creep, model training, profiling, advertising,
  sharing, or retention beyond the recorded purpose and authority.

## 4. Transparency and individual rights

- [ ] Provide timely, accessible, accurate, layered information covering required
  identities, purposes, bases, recipients, transfers, retention, rights,
  complaints, source, automated decisions, and other applicable disclosures.
- [ ] Reconcile notices and consent interfaces with actual processing and every
  materially different user, language, platform, and collection context.
- [ ] Operate authenticated, accessible, secure processes for access,
  rectification, erasure, restriction, objection, portability, consent withdrawal,
  complaints, and rights related to automated decisions as applicable.
- [ ] Record request receipt, identity verification, scope, searches across all
  repositories and processors, exemptions, redactions, response, timing, and appeal.
- [ ] Prevent rights handling from disclosing another person's data, security
  secrets, privileged material, or data outside the authorised response.

## 5. Privacy by design, default, and impact assessment

- [ ] Integrate privacy requirements into product discovery, design, architecture,
  data models, defaults, procurement, development, testing, deployment, support,
  decommissioning, and release approval.
- [ ] Use privacy-protective defaults for collection, visibility, sharing,
  permissions, retention, tracking, personalisation, and model use.
- [ ] Screen every new or materially changed processing operation for likely
  high risk and document the Data Protection Impact Assessment (DPIA) decision.
- [ ] Where required, complete the DPIA before processing: describe operations
  and purposes, assess necessity and proportionality, assess risks to people's
  rights and freedoms, identify safeguards, consult affected people where
  appropriate, obtain Data Protection Officer advice, and record approval.
- [ ] Escalate residual high risk for required prior consultation; AI cannot make
  or submit that determination.
- [ ] Revisit the DPIA after changes to purpose, data, model, people, scale,
  technology, decisions, vendors, locations, threats, incidents, or safeguards.

## 6. Automated decisions, profiling, and AI

- [ ] Inventory profiling, ranking, recommendation, eligibility, fraud, identity,
  employment, credit, health, safety, moderation, and other automated decisions.
- [ ] Determine the legal effect, similarly significant effect, human involvement,
  applicable conditions, safeguards, explanation, contest, intervention, and bias risk.
- [ ] Verify human review is meaningful, competent, authorised, informed, and able
  to change the outcome rather than a ceremonial approval.
- [ ] Link applicable AI obligations to the [AI governance checklist](AI_GOVERNANCE_CHECKLIST.md).

## 7. Processors, sharing, and international transfers

- [ ] Perform proportionate due diligence before appointing processors or subprocessors.
- [ ] Put required controller-processor, joint-controller, confidentiality,
  instruction, security, assistance, deletion/return, audit, and subprocessing terms in place.
- [ ] Maintain current subprocessors, processing locations, data flows, change
  notification, objections, assurance, incidents, and termination evidence.
- [ ] Identify every restricted international transfer and obtain legal review
  of the transfer mechanism, supplementary measures, transfer-risk assessment,
  onward transfers, government-access risk, and current validity.
- [ ] Verify technical transfer routes and remote access against contractual diagrams.

## 8. Security, incidents, and breaches

- [ ] Select security appropriate to risk, including confidentiality, integrity,
  availability, resilience, restoration, testing, access, encryption or
  pseudonymisation where appropriate, logging, vulnerabilities, and supplier controls.
- [ ] Link implementation evidence to the [secure software](SECURE_SOFTWARE_DEVELOPMENT_CHECKLIST.md)
  and [software supply-chain](SOFTWARE_SUPPLY_CHAIN_CHECKLIST.md) records where applicable.
- [ ] Operate a personal-data breach process covering detection, containment,
  facts, affected people/data, risk, documentation, notification decisions,
  communications, authority, deadlines, recovery, and lessons learned.
- [ ] Record all personal-data breaches, including those not notified, with the
  accountable rationale. AI cannot make the final notification decision.
- [ ] Test backup restoration, deletion propagation, key destruction, processor
  escalation, rights searches, and incident communication across all repositories.

## 9. Retention, deletion, and lifecycle

| Data/record | Purpose/source | Active retention | Backup/archive | Legal hold | Deletion/anonymisation method | Verification | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{DATA}}` | `{{PURPOSE}}` | `{{PERIOD}}` | `{{PERIOD}}` | `{{RULE}}` | `{{METHOD}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

- [ ] Reconcile privacy deletion with legal, security, financial, audit,
  employment, suspicious-activity, contractual, and evidence-retention duties.
- [ ] Test deletion from replicas, caches, indexes, exports, models where relevant,
  logs, vendors, devices, backups according to the approved design.
- [ ] Verify anonymisation claims against re-identification risk and retained linkages.

## 10. Readiness and release decision

| Input | Result/evidence |
| --- | --- |
| Roles, scope, sources, and processing inventory | `{{RESULT}}` |
| Purpose, lawful basis, fairness, minimisation, and transparency | `{{RESULT}}` |
| Rights and complaint handling | `{{RESULT}}` |
| DPIA, automated decisions, and prior consultation | `{{RESULT}}` |
| Processors, sharing, and transfers | `{{RESULT}}` |
| Security, breaches, retention, and deletion | `{{RESULT}}` |
| Open risks, exceptions, limitations, and claims | `{{RESULT}}` |

Readiness decision: `{{READY_NOT_READY_DEFERRED_WITH_SCOPE_AND_CONDITIONS}}`.

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| Controller/product owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Data Protection Officer/privacy specialist | `{{NAME}}` | `{{ADVICE_AND_DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Security/engineering owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Legal/compliance owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{DETAILS}}` |
| Release authority | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{DETAILS}}` |
