# Sector and jurisdiction compliance discovery checklist

Use this optional record to discover additional obligations created by a
country, region, sector, product type, service, customer, licence, public
procurement, or contract. It is a discovery aid, not a determination that any
listed source applies.

Laws, standards, guidance, enforcement, and dates change. Verify current
official sources, implementing measures, amendments, regulator guidance, and
the facts of the actual entity, product, users, market, contract, and release.

## Assessment identity

| Field | Value |
| --- | --- |
| Organisation/entities | `{{NAMES_AND_ROLES}}` |
| Product/service/release | `{{SCOPE_AND_IDENTIFIERS}}` |
| Countries/regions | `{{LOCATIONS}}` |
| Sectors/activities/licences | `{{DETAILS}}` |
| Customer/procurement/contract profile | `{{DETAILS}}` |
| Legal/compliance/sector owners | `{{NAMES_AND_ROLES}}` |
| Sources checked on | `{{DATE}}` |
| Review trigger | `{{DATE_OR_CHANGE}}` |

## 1. Discovery questions

- [ ] Where are entities established, staff and contractors located, users
  targeted or monitored, data stored or accessed, and services offered or delivered?
- [ ] Is the organisation public, private, non-profit, educational, regulated,
  licensed, grant-funded, critical, essential, important, or a government supplier?
- [ ] Does the product handle payments, health, safety, identity, biometrics,
  communications, children, education, employment, finance, transport, energy,
  government, defence, gambling, virtual assets, artificial intelligence (AI),
  or regulated professional services?
- [ ] Is the product consumer-facing, a connected product, software as a service,
  mobile application, online platform, marketplace, search service, hosting
  service, cloud service, device, component, medical device, or safety component?
- [ ] Which public tenders, licences, insurance policies, grants, security
  schedules, data-processing terms, customer codes, and incorporated standards apply?
- [ ] Which reporting, registration, conformity, certification, testing,
  representative, records, accessibility, transparency, support, update,
  incident, vulnerability, recall, or end-of-support duties may apply?
- [ ] Which state, province, territory, municipality, sector regulator, and
  professional-body rules supplement national requirements?

## 2. Jurisdiction and sector register

| Jurisdiction/sector | Entity/product/activity | Official source and section | Applicability state | Obligations/standard | Effective/deadline | Regulator/owner | Evidence/uncertainty |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{JURISDICTION}}` | `{{SCOPE}}` | `{{SOURCE}}` | `{{STATE}}` | `{{OBLIGATIONS}}` | `{{DATE}}` | `{{OWNER}}` | `{{EVIDENCE}}` |

Transfer each confirmed requirement to the
[obligations register](OBLIGATIONS_REGISTER.md). Keep an official source,
version or consolidation date, exact section, interpretation owner, and review trigger.

## 3. Non-exhaustive official starting points

This table was checked on 28 August 2026. It does not replace applicability or
legal review and must be refreshed before adoption.

| Situation to investigate | Starting authoritative source | Checks when applicable |
| --- | --- | --- |
| European Union personal data | [General Data Protection Regulation (GDPR)](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng), national law, competent supervisory authority | Roles, territorial scope, lawful processing, transparency, rights, privacy by design/default, impact assessment, processors, transfers, security, breaches, records, enforcement |
| European Union AI systems | [AI Act, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng), Commission and national authority sources | Entity role, prohibited practices, classification, high-risk or transparency duties, general-purpose models, literacy, conformity, registration, documentation, monitoring, incidents, dates |
| European Union products with digital elements | [Cyber Resilience Act, Regulation (EU) 2024/2847](https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng) | Product and economic-operator role, essential cybersecurity requirements, secure development, vulnerability handling, support period, technical documentation, conformity, reporting, market surveillance, transition dates |
| European Union essential or important entities | [Network and Information Systems 2 (NIS2) Directive, Directive (EU) 2022/2555](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng), national implementing law, competent authority | Entity/size/sector scope, governance, risk measures, supply chain, incident reporting, supervision, registration, management accountability, national differences |
| European Union financial entities and information and communications technology providers | [Digital Operational Resilience Act, Regulation (EU) 2022/2554](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng) and related technical standards | Entity/service scope, technology risk, incidents, resilience testing, third-party risk, registers, contractual terms, oversight, concentration and exit |
| Payment-card account data | [Payment Card Industry Security Standards Council document library](https://www.pcisecuritystandards.org/document_library/?class=pcidss&doc=pci_dss), payment brand, acquirer, and programme owner | Cardholder-data environment, entity role, current Payment Card Industry Data Security Standard (PCI DSS) version, segmentation, service providers, assessment type/eligibility, qualified assessor/scanning, reporting and evidence |
| United States health information | [United States Department of Health and Human Services Health Insurance Portability and Accountability Act (HIPAA) Security Rule](https://www.hhs.gov/hipaa/for-professionals/security/index.html), current regulation and guidance | Covered entity/business associate role, protected information, administrative/physical/technical safeguards, risk analysis, agreements, privacy, breaches, state-law interaction |
| United States children under the applicable age threshold | [Federal Trade Commission Children's Online Privacy Protection Rule](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa), current amendments and state law | Operator/service scope, actual knowledge, notice, parental consent, data minimisation, retention, security, schools, safe harbour, age assurance, state rules |
| Software components and federal secure-development expectations | [National Institute of Standards and Technology (NIST) Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final), procurement terms, agency rules | Secure development practices, supplier attestations, provenance, vulnerability disclosure, Software Bill of Materials (SBOM), evidence, contract-specific versions and forms |
| AI management-system objective | International Organization for Standardization/International Electrotechnical Commission [ISO/IEC 42001:2023](https://www.iso.org/standard/42001), amendments, licensed standard, certification rules | AI management-system scope, policy, risk, impact, controls, operation, monitoring, internal audit, management review, corrective action, certification boundary |
| Information-security management-system objective | [ISO/IEC 27001:2022](https://www.iso.org/standard/27001), amendments, licensed standard, certification rules | Information Security Management System (ISMS) scope, risk assessment/treatment, Statement of Applicability (SoA), selected controls, objectives, operation, monitoring, internal audit, management review, corrective action, certification boundary |
| Service-organisation assurance objective | [American Institute of Certified Public Accountants (AICPA) System and Organization Controls 2 (SOC 2) resources](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2/), engagement and service-auditor sources | Scoped system, criteria categories, description, report type/period, controls, subservice organisations, complementary controls, evidence populations, exceptions, intended users |
| Anti-Money Laundering and Counter-Terrorist Financing (AML/CTF) or virtual-asset activity | [Financial Action Task Force (FATF) Recommendations](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html), current national law, regulator and licence sources | Regulated perimeter, risk assessment, customer/beneficial-owner due diligence, politically exposed persons, sanctions, monitoring, reporting, confidentiality, records, training, independent testing |
| Modern slavery, forced labour, or supply-chain reporting | [United Kingdom transparency-in-supply-chains guidance](https://www.gov.uk/government/publications/transparency-in-supply-chains-a-practical-guide), applicable Australian, Canadian, European Union, national and procurement sources | Entity/turnover/market scope, supply-chain mapping, risk, due diligence, worker voice, remediation, effectiveness, board approval, signature, filing/publication, mandatory content |
| Open-source and third-party intellectual property | Current licence text, rights holder, contract, [System Package Data Exchange (SPDX)](https://spdx.dev/), and qualified legal review | Provenance, licence compatibility, notices, source/disclosure, distribution, network use, patents, trademarks, data/model/content rights, export, customer obligations |
| Any other country, region, sector, product, licence, or contract | Official legislation database, regulator, standards body, procurement authority, executed agreement, court/tribunal, and qualified owner | Complete Sections 1–5; do not reuse another jurisdiction's scope, version, regulator, deadline, exception, form, or approval without authoritative adoption |

## 4. Cross-border and conflicting requirements

- [ ] Identify different, overlapping, or conflicting requirements for data,
  security, records, disclosure, localisation, access, encryption, monitoring,
  worker evidence, exports, sanctions, consumer rights, and incident reporting.
- [ ] Determine which entity and system performs each duty and how users,
  customers, regulators, auditors, and suppliers receive the required outcome.
- [ ] Record legal privilege, confidentiality, blocking-statute, secrecy,
  law-enforcement, suspicious-activity, and evidence-transfer restrictions.
- [ ] Escalate conflicts to qualified owners; do not let AI select a jurisdiction
  or suppress an obligation.

## 5. Decision

| Source/jurisdiction | State | Scope and conclusion | Required pack/actions | Owner | Review trigger |
| --- | --- | --- | --- | --- | --- |
| `{{SOURCE}}` | `{{APPLIES_DOES_NOT_APPLY_UNCLEAR_STALE}}` | `{{CONCLUSION}}` | `{{ACTION}}` | `{{OWNER}}` | `{{TRIGGER}}` |

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| Legal/compliance owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Sector/security/privacy specialist | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Product/service owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Release/procurement authority | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{DETAILS}}` |
