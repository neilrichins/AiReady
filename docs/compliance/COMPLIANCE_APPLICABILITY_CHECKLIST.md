# Compliance applicability checklist

Use this optional record before selecting any detailed compliance pack. Its
purpose is to identify questions that require investigation, not to assume that
every law, standard, or assurance framework applies.

## Assessment identity

| Field | Value |
| --- | --- |
| Organisation and legal entities | `{{NAMES_AND_ROLES}}` |
| Product, service, or programme | `{{NAME_AND_SCOPE}}` |
| Exact system/release scope | `{{REPOSITORIES_SERVICES_ARTEFACTS_ENVIRONMENTS_AND_VERSIONS}}` |
| Countries and regions | `{{ESTABLISHMENT_USERS_MARKETS_HOSTING_AND_DELIVERY_LOCATIONS}}` |
| Sectors and regulated activities | `{{SECTORS_ACTIVITIES_AND_LICENCES}}` |
| Customers and procurement routes | `{{PUBLIC_PRIVATE_REGULATED_CONSUMER_AND_ENTERPRISE}}` |
| Assessor | `{{NAME_AND_ROLE}}` |
| Legal/compliance owner | `{{NAME_AND_ROLE}}` |
| Sources checked on | `{{DATE}}` |
| Review trigger | `{{DATE_OR_CHANGE_EVENT}}` |

Artificial intelligence (AI) authority and stop conditions:
`{{PERMITTED_DISCOVERY_ANALYSIS_AND_ACTIONS}}`.

## 1. Establish the complete footprint

- [ ] Identify every provider, controller, processor, operator, developer,
  deployer, importer, distributor, merchant, service provider, employer,
  contracting party, supplier, and public-sector role that may be relevant.
- [ ] Identify countries where entities are established, people are located,
  products are offered, behaviour is monitored, data is stored or accessed,
  services are delivered, staff work, and suppliers operate.
- [ ] Inventory websites, applications, application programming interfaces,
  mobile applications, devices, hosted services, internal tools, datasets,
  machine-learning models, documents, communications, and support channels.
- [ ] Map all repositories, shared components, build systems, deployment systems,
  cloud accounts, identity services, data stores, vendors, subprocessors, and
  operational teams that can affect the scoped service.
- [ ] Record customer promises, tenders, security schedules, data-processing
  agreements, licences, certifications represented, insurance conditions, and
  incorporated external standards.
- [ ] Record intended release markets and effective dates rather than assuming
  current operations describe the future release.

Footprint evidence and known omissions: `{{LINKS_LIMITATIONS_AND_OWNER}}`.

## 2. Investigate applicability triggers

| Trigger | Finding | Potential source or pack | State | Evidence | Decision owner |
| --- | --- | --- | --- | --- | --- |
| Personal data or identifiable user/device data | `{{FINDING}}` | General Data Protection Regulation (GDPR)/privacy | `{{STATE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Security certification, customer requirement, cybersecurity profile, or improvement objective | `{{FINDING}}` | International Organization for Standardization/International Electrotechnical Commission (ISO/IEC) 27001, System and Organization Controls 2 (SOC 2), National Institute of Standards and Technology Cybersecurity Framework (NIST CSF), contract, or other | `{{STATE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Payment account data or systems that can affect its security | `{{FINDING}}` | Payment Card Industry Data Security Standard (PCI DSS) or payment-scheme requirements | `{{STATE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| AI system development, provision, deployment, distribution, or use | `{{FINDING}}` | AI governance, sector law, or contract | `{{STATE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Essential, important, financial, public, health, safety, or regulated service | `{{FINDING}}` | Sector and jurisdiction pack | `{{STATE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Customer identity, funds, assets, transactions, virtual assets, or regulated financial activity | `{{FINDING}}` | Anti-Money Laundering and Counter-Terrorist Financing (AML/CTF), sanctions, fraud, or financial regulation | `{{STATE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Employees, contractors, outsourced labour, hardware, hosting, content moderation, or global suppliers | `{{FINDING}}` | Modern slavery, employment, procurement, or supply-chain duties | `{{STATE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Children, health, biometrics, location, communications, finance, education, employment, or other sensitive context | `{{FINDING}}` | Privacy and sector overlays | `{{STATE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Open-source, commercial, source-available, model, data, media, or content licences | `{{FINDING}}` | Software supply chain and intellectual-property review | `{{STATE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Public procurement, government funding, critical infrastructure, export, sanctions, or national-security concern | `{{FINDING}}` | Procurement, sector, export, or sanctions sources | `{{STATE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Public environmental, ethical, security, privacy, accessibility, or compliance claim | `{{FINDING}}` | Claims and approvals record | `{{STATE}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

## 3. Source discovery

For every potential obligation, find the current official source and record it
in the [obligations register](OBLIGATIONS_REGISTER.md).

- [ ] Check primary legislation, implementing legislation, amendments, official
  consolidated text, regulator rules, binding decisions, and official guidance.
- [ ] Check entity size, activity, location, user, data, sector, product, service,
  contract, procurement, turnover, transaction, and commencement thresholds.
- [ ] Check whether a standard is mandatory, contractually incorporated,
  voluntarily adopted, used only as guidance, or part of a certification or
  assurance objective.
- [ ] Check required versions, amendments, transition periods, audit periods,
  filing dates, notification deadlines, and review frequency.
- [ ] Check exemptions, exclusions, equivalence, inherited controls, compensating
  controls, alternative measures, and required approvals.
- [ ] Record unresolved conflict between sources rather than selecting the most
  convenient interpretation.

Search results, AI output, vendor summaries, blogs, questionnaires, and prior
assessments are discovery aids. They are not authoritative applicability evidence.

## 4. Framework selection decision

| Framework or concern | Applicability state | Scope and authoritative basis | Required records | Specialist owner | Review trigger |
| --- | --- | --- | --- | --- | --- |
| ISO/IEC 27001 readiness or certification | `{{STATE}}` | `{{SCOPE_AND_SOURCE}}` | `{{RECORDS}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| SOC 2 readiness or examination | `{{STATE}}` | `{{SCOPE_AND_SOURCE}}` | `{{RECORDS}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| NIST CSF 2.0 current/target profile and improvement | `{{STATE}}` | `{{SCOPE_AND_SOURCE}}` | `{{RECORDS}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| GDPR or other privacy/data protection | `{{STATE}}` | `{{SCOPE_AND_SOURCE}}` | `{{RECORDS}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Secure software development | `{{STATE}}` | `{{SCOPE_AND_SOURCE}}` | `{{RECORDS}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Software supply chain and licences | `{{STATE}}` | `{{SCOPE_AND_SOURCE}}` | `{{RECORDS}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| AI governance | `{{STATE}}` | `{{SCOPE_AND_SOURCE}}` | `{{RECORDS}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| AML/CTF, sanctions, or regulated financial activity | `{{STATE}}` | `{{SCOPE_AND_SOURCE}}` | `{{RECORDS}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Modern slavery or forced-labour due diligence | `{{STATE}}` | `{{SCOPE_AND_SOURCE}}` | `{{RECORDS}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Sector, jurisdiction, procurement, or contractual overlay | `{{STATE}}` | `{{SCOPE_AND_SOURCE}}` | `{{RECORDS}}` | `{{OWNER}}` | `{{TRIGGER}}` |

## 5. Multi-repository and inherited-control scope

| Component/repository/service | Owner/entity | Obligations affected | Controls provided | Controls consumed | Evidence boundary | Gap or dependency |
| --- | --- | --- | --- | --- | --- | --- |
| `{{COMPONENT}}` | `{{OWNER}}` | `{{OBLIGATIONS}}` | `{{CONTROLS}}` | `{{DEPENDENCIES}}` | `{{EVIDENCE}}` | `{{GAP}}` |

- [ ] Verify control ownership across organisational and repository boundaries.
- [ ] Record shared-control assumptions, complementary customer or user controls,
  subservice organisations, and evidence that must be obtained from another team.
- [ ] Test supported component combinations and deployed configurations rather
  than treating independent repository results as system-level evidence.
- [ ] Include partial failure, revocation, rollback, data migration, vendor outage,
  and control hand-off behaviour where it affects an obligation.

## 6. Approval

Overall decision: `{{APPLICABLE_PACKS_UNCLEAR_ITEMS_AND_EXCLUDED_PACKS}}`.

| Role | Name | Decision | Date | Scope, uncertainty, and conditions |
| --- | --- | --- | --- | --- |
| Legal/compliance owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Security/privacy/sector specialist | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Product/service owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{DETAILS}}` |
| Release/procurement authority | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{DETAILS}}` |
