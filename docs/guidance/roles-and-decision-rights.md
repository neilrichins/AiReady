# Roles and decision rights

## Principle

AiReady assigns responsibilities and decisions, not mandatory job titles or team structures. One person may hold several roles, and work may be distributed across teams, suppliers, or repositories. Every material outcome still needs an accountable human owner.

An AI agent may research, analyse, draft, implement, test, and assemble evidence within its authority. It cannot be accountable for a business decision, approve its own output, accept residual risk, grant itself permissions, or authorise a production release.

## Responsibility model

| Responsibility | Accountable outcomes | Typical evidence | Decisions reserved for an authorised person |
| --- | --- | --- | --- |
| Product/service ownership | Problem, users, outcomes, priorities, scope, claims, success measures | Product brief, requirements, feature priorities, acceptance decisions | Approve intent, priority, scope, claims, and product risk |
| Research and design | Research quality, journeys, interaction/content states, usability, inclusion, design rationale | Research findings, experience specification, prototypes, evaluation results | Approve design intent and unresolved experience trade-offs |
| Engineering and architecture | Maintainability, architecture boundaries, implementation, compatibility, technical decisions | Architecture, decisions, commits, reviews, component tests | Approve architecture and material technical debt or migration trade-offs |
| Security, privacy, and data | Threats, data use, access, regulatory/contractual controls, incident readiness | Threat assessment, data flow, control evidence, risk records | Accept security/privacy/data risk and approve sensitive access |
| Quality assurance | Verification and validation strategy, coverage, environments, defects, evidence confidence | Testing contract, verification and validation matrices, defect records, test results | Determine whether evidence meets defined acceptance and disclose limitations |
| Operations and reliability | Deployment, observability, capacity, backup, recovery, support, incident response | Runbooks, restore tests, service signals, environment evidence | Authorise operations and accept operational risk within delegated authority |
| Technology cost, value, and sustainability | Cost allocation, budget and forecast, unit value, resource efficiency, commitments, lifecycle effects | Billing/usage evidence, forecasts, unit measures, optimisation results, resource inventory | Approve spending/resource boundaries and accept material cost, value, or sustainability trade-offs |
| Release management | Candidate integrity, gate completion, approvals, execution, closure | Readiness record, checklist, artefact provenance, release evidence | Approve, reject, abort, or roll back the exact candidate |
| Framework/process ownership | AI operating model, permissions, control effectiveness, improvement | Readiness assessment, adoption map, audit trail, retrospectives | Authorise AI use and expand or revoke its scope |

## Decision-rights record

Projects should map these decisions to named owners and alternates in an existing governance system or an adapted record.

| Decision | Accountable owner | Required consulted owners | Evidence required | Delegate/alternate | Escalation/expiry |
| --- | --- | --- | --- | --- | --- |
| Approve product requirement | `{{OWNER}}` | `{{ROLES}}` | `{{EVIDENCE}}` | `{{ALTERNATE}}` | `{{RULE}}` |
| Validate intended product/user/operational outcome | `{{OWNER}}` | `{{ROLES}}` | `{{EVIDENCE}}` | `{{ALTERNATE}}` | `{{RULE}}` |
| Approve experience/design intent | `{{OWNER}}` | `{{ROLES}}` | `{{EVIDENCE}}` | `{{ALTERNATE}}` | `{{RULE}}` |
| Approve architecture decision | `{{OWNER}}` | `{{ROLES}}` | `{{EVIDENCE}}` | `{{ALTERNATE}}` | `{{RULE}}` |
| Accept security/privacy/data risk | `{{OWNER}}` | `{{ROLES}}` | `{{EVIDENCE}}` | `{{ALTERNATE}}` | `{{RULE}}` |
| Accept unresolved quality risk | `{{OWNER}}` | `{{ROLES}}` | `{{EVIDENCE}}` | `{{ALTERNATE}}` | `{{RULE}}` |
| Authorise AI access or expanded authority | `{{OWNER}}` | `{{ROLES}}` | `{{EVIDENCE}}` | `{{ALTERNATE}}` | `{{RULE}}` |
| Authorise purchasing, provisioning, scaling, retention, or billable usage | `{{OWNER}}` | `{{ROLES}}` | `{{EVIDENCE}}` | `{{ALTERNATE}}` | `{{RULE}}` |
| Approve release candidate | `{{OWNER}}` | `{{ROLES}}` | `{{EVIDENCE}}` | `{{ALTERNATE}}` | `{{RULE}}` |
| Execute deployment/migration | `{{OWNER}}` | `{{ROLES}}` | `{{EVIDENCE}}` | `{{ALTERNATE}}` | `{{RULE}}` |
| Abort or roll back release | `{{OWNER}}` | `{{ROLES}}` | `{{EVIDENCE}}` | `{{ALTERNATE}}` | `{{RULE}}` |

## Required hand-offs

| From | To | Minimum hand-off |
| --- | --- | --- |
| Product/research | Design/engineering/quality | Approved outcome, users, constraints, evidence, priority, acceptance boundary, unknowns |
| Design | Engineering/quality | Journeys, all relevant states, content, accessibility, assets, responsive behaviour, design rationale, evaluation status |
| Engineering | Quality/operations | Exact candidate, change scope, architecture effects, configuration, migrations, failure modes, tests, known limitations |
| Quality | Release authority | Candidate-specific verification and validation results, environment, coverage, defects, stale/skipped checks, evidence limitations |
| Security/data | Release authority | Applicable controls, findings, residual risk, acceptance authority, expiry and contingency |
| Operations | Release authority | Environment readiness, backup/recovery evidence, monitoring, support, execution and rollback plan |
| Technology cost/value owner | Product/engineering/operations/release authority | Allocation, budget/forecast, unit value, usage anomalies, resource limits, sustainability effects, and cleanup status |
| Release authority | Operators/support/stakeholders | Exact approved artefacts, sequence, conditions, stop triggers, communications, support and incident ownership |
| Operations/support | Product/framework owners | Effective results, incidents, user feedback, operational signals, lessons and required control changes |

## Separation of duties

Apply separation proportionate to consequence. At minimum:

- the author does not provide the only approval of a material change;
- the AI agent does not approve its own work;
- risk is accepted only by an owner with authority over the affected outcome;
- production credentials and release authority are not granted merely because an agent can build or test;
- emergency execution and retrospective approval are not treated as equivalent; and
- a person who executes a release records actual results without rewriting the prior approval decision.

Where staffing prevents full separation, record the constraint, compensating review, evidence, owner, and expiry in the risk register.
