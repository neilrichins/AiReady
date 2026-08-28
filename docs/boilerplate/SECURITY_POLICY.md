# Security policy

## Scope and supported versions

| Product/component/version | Support status | Security-fix policy | End-of-support date | Owner |
| --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{SUPPORTED_LIMITED_UNSUPPORTED}}` | `{{POLICY}}` | `{{DATE_OR_NOT_SET}}` | `{{OWNER}}` |

In-scope systems, repositories, services, data, and exclusions: `{{SCOPE}}`.

## Reporting vulnerabilities

Report vulnerabilities privately through `{{PRIVATE_REPORTING_ROUTE}}`. Do not put exploit details, credentials, personal data, private prompts, restricted source, customer information, production identifiers, or sensitive logs in public issues.

Include the affected version, impact, safe reproduction, prerequisites, and suggested mitigation when available. Remove or mask sensitive values.

| Stage | Target | Owner/channel |
| --- | --- | --- |
| Acknowledgement | `{{TIME_PERIOD}}` | `{{OWNER}}` |
| Initial assessment | `{{TIME_PERIOD}}` | `{{OWNER}}` |
| Status updates | `{{FREQUENCY}}` | `{{CHANNEL}}` |
| Coordinated disclosure | `{{POLICY}}` | `{{OWNER}}` |

Do not promise a fixed remediation date before impact, exploitability, affected versions, and a safe release path are understood.

## Security ownership and decision rights

- Security owner: `{{OWNER}}`.
- Incident commander/escalation: `{{OWNER_AND_ROUTE}}`.
- Risk-acceptance authority: `{{OWNER_AND_LIMIT}}`.
- Credential/permission authority: `{{OWNER}}`.
- Release-blocking severity policy: `{{POLICY}}`.

## Development and repository controls

| Control | Requirement | Enforcement | Evidence | Owner |
| --- | --- | --- | --- | --- |
| Branch/review protection | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Secret prevention/detection | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Static/dynamic analysis | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Dependency and licence review | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Build/release integrity | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| Environment isolation | `{{REQUIREMENT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

## Threat and data boundaries

Authoritative threat model and data-flow record: `{{LINK_OR_LOCATION}}`.

| Asset/data/process | Threat or abuse case | Preventive/detective control | Verification | Residual risk | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{THREAT}}` | `{{CONTROL}}` | `{{EVIDENCE}}` | `{{RISK}}` | `{{OWNER}}` |

## Artificial intelligence-specific boundaries

- Approved tools, models, plugins, and connectors: `{{LIST_OR_POLICY_LINK}}`.
- Prohibited prompt/context data: `{{DATA_CLASSES}}`.
- Retention, training, residency, and supplier restrictions: `{{POLICY}}`.
- Prompt-injection and untrusted-repository-content controls: `{{CONTROLS}}`.
- Generated output validation: `{{SCHEMAS_ALLOWLISTS_ESCAPING_PARAMETERISATION_SANDBOXING_AND_REVIEW}}`.
- Agent credentials, network, filesystem, external-service, and production permissions: `{{LEAST_PRIVILEGE_BOUNDARY}}`.
- Actions requiring fresh human approval: `{{ACTIONS}}`.
- Incident shutdown and access-revocation path: `{{OWNER_AND_PROCEDURE}}`.

## Supply chain and release integrity

Dependencies, actions, tools, models, plugins, connectors, build images, and external services must be reviewed, version-controlled or pinned where possible, monitored for vulnerabilities and end of support, and removed when no longer required.

Record provenance and integrity evidence for released artefacts. Preserve release materials and supporting evidence according to the project's retention and access policy.

## Vulnerability response and learning

| Activity | Procedure/owner | Evidence retained |
| --- | --- | --- |
| Triage and affected-version analysis | `{{PROCEDURE}}` | `{{EVIDENCE}}` |
| Containment and credential response | `{{PROCEDURE}}` | `{{EVIDENCE}}` |
| Fix, regression tests, and release | `{{PROCEDURE}}` | `{{EVIDENCE}}` |
| Disclosure and stakeholder communication | `{{PROCEDURE}}` | `{{EVIDENCE}}` |
| Root cause and control improvement | `{{PROCEDURE}}` | `{{EVIDENCE}}` |

Security findings, accepted risks, incidents, and control failures must update affected requirements, architecture, tests, operations, AI authority, and release decisions.
