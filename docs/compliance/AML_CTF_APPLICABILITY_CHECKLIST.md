# Anti-Money Laundering and Counter-Terrorist Financing (AML/CTF) applicability and readiness checklist

Use this optional record only when an organisation, product, customer, or
activity may be subject to Anti-Money Laundering and Counter-Terrorist Financing
(AML/CTF), counter-proliferation financing, sanctions, customer due diligence,
or suspicious-activity obligations.

The [Financial Action Task Force (FATF) Recommendations](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html)
are international standards implemented through jurisdiction-specific law and
supervision. They do not by themselves determine a project's legal duties.
Verify current national law, sector rules, regulator guidance, licence conditions,
customer contracts, and sanctions regimes with qualified owners.

This checklist does not establish that an entity is regulated or compliant, or
that a person or transaction is suspicious, sanctioned, criminal, or safe.

## Assessment identity

| Field | Value |
| --- | --- |
| Legal entities, regulated roles, and licences | `{{ENTITIES_ROLES_AND_LICENCES}}` |
| Product/service/activity | `{{NAME_AND_SCOPE}}` |
| Countries, customers, counterparties, and delivery channels | `{{SCOPE}}` |
| Transactions/assets/currencies/virtual assets | `{{SCOPE_OR_NOT_APPLICABLE}}` |
| Exact systems, repositories, models, data, and vendors | `{{IDENTIFIERS}}` |
| Money Laundering Reporting Officer or equivalent | `{{NAME_OR_NOT_APPLICABLE}}` |
| Legal/compliance and sanctions owners | `{{NAMES_AND_ROLES}}` |
| Sources checked and date | `{{SOURCES_AND_DATE}}` |
| Evidence location and access classification | `{{LOCATION}}` |

## 1. Applicability and regulated perimeter

- [ ] Identify every legal entity and activity that may be a financial institution,
  payment service, credit institution, virtual-asset service, money service,
  trust/company service, professional service, gambling service, dealer,
  marketplace, intermediary, agent, outsourced provider, or other regulated person.
- [ ] Distinguish a software supplier from the regulated operator and document
  obligations transferred, retained, supported, or prohibited by contract and law.
- [ ] Identify countries of establishment, licence, customer residence,
  transaction origin/destination, asset, branch, agent, vendor, and remote service.
- [ ] Determine thresholds, exemptions, simplified or enhanced measures,
  business-wide assessments, supervisory expectations, and commencement dates.
- [ ] Identify sanctions, asset-freeze, proliferation-financing, fraud,
  anti-bribery, tax, consumer, privacy, record-retention, and payment rules that
  interact with AML/CTF without treating them as one obligation.
- [ ] Record `UNCLEAR` and obtain specialist advice where the regulated perimeter
  depends on product capability, customer use, funds flow, custody, control, or jurisdiction.

Applicability decision and authoritative evidence: `{{LOCATION_AND_APPROVAL}}`.

## 2. Enterprise and product risk assessment

| Risk factor | Exposure and evidence | Inherent risk | Controls | Residual risk | Owner | Review trigger |
| --- | --- | --- | --- | --- | --- | --- |
| Customers and beneficial owners | `{{EXPOSURE}}` | `{{LEVEL}}` | `{{CONTROLS}}` | `{{LEVEL}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Countries and geographic routes | `{{EXPOSURE}}` | `{{LEVEL}}` | `{{CONTROLS}}` | `{{LEVEL}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Products, services, assets, and transaction types | `{{EXPOSURE}}` | `{{LEVEL}}` | `{{CONTROLS}}` | `{{LEVEL}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Delivery channels, agents, and intermediaries | `{{EXPOSURE}}` | `{{LEVEL}}` | `{{CONTROLS}}` | `{{LEVEL}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| New technology, artificial intelligence (AI), privacy, fraud, and cyber-enabled abuse | `{{EXPOSURE}}` | `{{LEVEL}}` | `{{CONTROLS}}` | `{{LEVEL}}` | `{{OWNER}}` | `{{TRIGGER}}` |

- [ ] Use current national, supranational, sector, and organisation risk assessments.
- [ ] Assess scale, speed, anonymity, cross-border reach, non-face-to-face access,
  nested relationships, third parties, cash or virtual assets, evasion, mule
  activity, account takeover, synthetic identity, and misuse of product features.
- [ ] Assess product risk before launch and after material feature, market,
  customer, channel, data, model, vendor, typology, incident, or regulatory change.
- [ ] Keep financial-crime risk distinct from customer profitability or product adoption.
- [ ] Require authorised residual-risk approval; AI cannot determine risk appetite.

## 3. Governance, policy, and assurance

- [ ] Assign governing-body or senior-management accountability, compliance,
  reporting, investigation, sanctions, operations, technology, data, model,
  training, independent testing, and regulatory liaison responsibilities.
- [ ] Maintain approved policies and procedures matching actual products,
  jurisdictions, risks, systems, staffing, vendors, escalation, and recordkeeping.
- [ ] Screen relevant personnel where lawful and provide role-specific training.
- [ ] Provide independent, risk-based testing with access to complete populations,
  models, cases, decisions, overrides, incidents, and remediation.
- [ ] Track findings to cause, prevalence, owner, due date, retest, governance,
  regulator/customer consequence, and closure evidence.

## 4. Customer and beneficial-owner controls

- [ ] Define when customer due diligence, identity verification, beneficial-owner
  identification, purpose/nature, source-of-funds or wealth, and ongoing review apply.
- [ ] Use authoritative, risk-appropriate sources and record confidence,
  discrepancies, failed verification, impersonation, document fraud, and escalation.
- [ ] Identify and handle politically exposed persons, family members, close
  associates, high-risk countries, correspondent or nested relationships, and
  enhanced due diligence according to the applicable source.
- [ ] Define simplified measures only where permitted and supported by documented risk.
- [ ] Prevent customer onboarding, continuation, rejection, exit, freeze, or
  disclosure from being decided solely by an opaque score or unreviewed
  AI result.
- [ ] Provide accessible and non-discriminatory customer processes while preserving
  required controls and anti-tipping-off restrictions.

## 5. Sanctions and screening

- [ ] Identify every applicable sanctions issuer, list, ownership/control rule,
  sectoral measure, geographic restriction, licence, reporting duty, and update source.
- [ ] Define screening populations, fields, transliteration, aliases, fuzzy matching,
  update timing, rescreening, payment/message points, and list availability failure.
- [ ] Validate matching, thresholds, false negatives, false positives, data quality,
  latency, overrides, suppression, audit logs, and manual disposition.
- [ ] Escalate potential matches to authorised specialists before action or communication.
- [ ] Record blocking, rejecting, freezing, licensing, reporting, and release of
  funds/assets only under applicable law and authorised procedure.

## 6. Transaction monitoring and investigation

| Scenario/model/rule | Risk/typology | Data and population | Threshold/version | Validation result | Alert/case route | Owner | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{SCENARIO}}` | `{{RISK}}` | `{{DATA}}` | `{{VERSION}}` | `{{RESULT}}` | `{{ROUTE}}` | `{{OWNER}}` | `{{LIMITATION}}` |

- [ ] Map monitoring to assessed risks, products, customers, transactions,
  channels, countries, assets, typologies, and evasion behaviour.
- [ ] Verify data completeness, lineage, timeliness, identity linkage, thresholds,
  scenarios, models, segmentation, prioritisation, case creation, and outage handling.
- [ ] Validate rules and models before use and periodically for effectiveness,
  bias, drift, explainability, overrides, changes, and residual blind spots.
- [ ] Investigate alerts using complete authorised information, documented reasoning,
  independent review where required, escalation, confidentiality, and time controls.
- [ ] Measure effectiveness beyond alert volume or closure speed; investigate missed
  cases, defensive closure, backlogs, repeat patterns, and downstream outcomes.

## 7. Suspicious activity, confidentiality, and reporting

- [ ] Define authorised escalation to the Money Laundering Reporting Officer or equivalent.
- [ ] Record facts, analysis, decisions, timing, supporting material, linked activity,
  filing references, continuing activity, and required follow-up in protected systems.
- [ ] Determine reportability, timing, form, recipient, consent/defence process,
  law-enforcement contact, and customer handling under current applicable sources.
- [ ] Enforce strict need-to-know access and anti-tipping-off controls.
- [ ] AI may organise authorised facts and flag inconsistencies; it must not make
  the final suspicion or filing decision, submit a report, notify a customer, or
  reveal protected information without explicit authority.

## 8. Records, data, vendors, and system controls

- [ ] Reconcile AML/CTF retention and confidentiality with privacy, rights,
  deletion, litigation hold, security, and regulator-access duties.
- [ ] Protect identity, screening, transaction, case, filing, model, and law-enforcement data.
- [ ] Maintain lineage from source transactions and customer records through
  screening, monitoring, case, decision, reporting, correction, and retention.
- [ ] Govern outsourced identity, screening, data, model, investigation, hosting,
  and support services with due diligence, contract, monitoring, audit, incident,
  resilience, change, and exit controls.
- [ ] Test reconciliation, batch failure, duplicate/missing transactions, delayed
  lists/data, model outage, queue backlog, access failure, recovery, and replay.
- [ ] Verify supported combinations across all contributing repositories and systems.

## 9. Non-exhaustive official starting points

This table was checked on 28 August 2026. Verify current consolidated law,
amendments, commencement, regulator guidance, sector rules, licence conditions,
sanctions sources, and reporting arrangements before use.

| Jurisdiction or layer to investigate | Starting authoritative source | Additional checks when applicable |
| --- | --- | --- |
| International standards and country implementation | [Financial Action Task Force Recommendations](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html), country mutual evaluation, national risk assessment, and sector guidance | Recommendations are implemented through local law; confirm regulated activities, risk-based measures, supervision, technical compliance, effectiveness, and current revisions |
| European Union obliged entities and activities | [Regulation (EU) 2024/1624](https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng), related directives/regulations, national implementation, and competent authority | Entity/activity scope, application and transition dates, customer/beneficial-owner duties, enhanced measures, outsourcing, reporting, records, supervision, and Anti-Money Laundering Authority arrangements |
| Ireland designated persons and activities | [Revised Criminal Justice (Money Laundering and Terrorist Financing) Act 2010](https://www.irishstatutebook.ie/eli/isbc/2010_6.html), later amendments, regulations, competent authority, Financial Intelligence Unit, and sanctions sources | Designated-person scope, business and customer risk, due diligence, beneficial ownership, politically exposed persons, monitoring, suspicious transaction reporting, tipping off, records, training, policies, and supervision |
| United Kingdom relevant persons and activities | [Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017](https://www.legislation.gov.uk/uksi/2017/692/contents), current amendments, sector supervisor, National Crime Agency, and sanctions authority | Relevant-person scope, registration, risk, customer due diligence, beneficial ownership, politically exposed persons, reporting, records, training, independent audit, cryptoasset duties, sanctions, and guidance |
| United States financial institutions and covered businesses | [Financial Crimes Enforcement Network Bank Secrecy Act sources](https://www.fincen.gov/resources/statutes-and-regulations/bank-secrecy-act), current regulations, functional regulator, and sanctions authority | Entity type, programme, customer identification, beneficial ownership, monitoring, currency and suspicious-activity reports, records, information sharing, testing, current rule changes, federal/state interaction |
| Any other country, state, territory, sector, or licence | Official legislation database, financial-intelligence unit, supervisor, sanctions authority, licensing body, and current sector guidance | Complete Sections 1–8; do not reuse another jurisdiction's thresholds, terminology, reports, deadlines, exemptions, data access, confidentiality, or decision authority |

## 10. Readiness decision

| Input | Result/evidence |
| --- | --- |
| Regulated perimeter, sources, licences, and ownership | `{{RESULT}}` |
| Risk assessment, governance, training, and independent testing | `{{RESULT}}` |
| Customer, beneficial-owner, enhanced-due-diligence, and sanctions controls | `{{RESULT}}` |
| Transaction monitoring, model validation, investigation, and reporting | `{{RESULT}}` |
| Data, records, vendors, resilience, and multi-system reconciliation | `{{RESULT}}` |
| Open findings, uncertainty, limitations, and regulatory actions | `{{RESULT}}` |

Decision: `{{READY_NOT_READY_DEFERRED_WITH_SCOPE_AND_CONDITIONS}}`.

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| AML/CTF compliance owner | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Money Laundering Reporting Officer/equivalent | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Sanctions/legal owner | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Product/technology/data owner | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
| Governing body/release authority | `{{NAME}}` | `{{DECISION}}` | `{{DATE}}` | `{{DETAILS}}` |
