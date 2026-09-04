# Artificial intelligence (AI) coding readiness assessment

> Adapt this assessment within the project's existing governance records. Replace every `{{PLACEHOLDER}}`, attach verifiable evidence, and record unresolved limitations. This assessment is a point-in-time engineering record, not a certification.

## Assessment identity

| Field | Value |
| --- | --- |
| Project | `{{PROJECT_NAME}}` |
| Repository | `{{REPOSITORY_URL_OR_IDENTIFIER}}` |
| Assessed commit | `{{FULL_COMMIT_SHA}}` |
| Assessment date | `{{YYYY-MM-DD}}` |
| Assessor | `{{NAME_OR_TEAM}}` |
| AI probe tool, model, and configuration | `{{IDENTIFIER_VERSION_AND_CONFIGURATION_OR_NOT_RUN}}` |
| Fresh-context isolation method | `{{NEW_SESSION_SEPARATE_AGENT_CLEARED_CONTEXT_OR_NOT_RUN}}` |
| Accountable project/AI authority owner | `{{ACCOUNTABLE_OWNER}}` |
| Technical owner | `{{ACCOUNTABLE_OWNER}}` |
| Intended AI use | `{{READ_ONLY_DISCOVERY_HUMAN_APPLIED_REMEDIATION_ASSISTED_CODING_SUPERVISED_AUTOMATION_OR_OTHER}}` |
| Approved AI tools/models | `{{APPROVED_TOOLS_OR_NONE}}` |
| Data classification | `{{PUBLIC_INTERNAL_CONFIDENTIAL_RESTRICTED}}` |
| Repository model | `{{STANDALONE_OR_MULTI_REPOSITORY}}` |
| Ecosystem/change-set identifier | `{{IDENTIFIER_OR_NOT_APPLICABLE}}` |
| Previous comparable assessment | `{{ASSESSMENT_IDENTIFIER_OR_NONE}}` |
| Next review | `{{YYYY-MM-DD_OR_RELEASE_TRIGGER}}` |

## Decision

Choose exactly one:

- [ ] **Not ready for AI coding** — only explicitly authorised read-only discovery or human-applied remediation suggestions may proceed.
- [ ] **Assisted only** — AI may propose changes, but a human must inspect and apply them.
- [ ] **Supervised** — AI may edit an isolated branch or worktree; every change requires human review.
- [ ] **Controlled automation** — AI may complete bounded tasks and open pull requests; protected operations remain human-controlled.

Decision owner: `{{NAME_OR_TEAM}}`

Decision rationale: `{{EVIDENCE_BASED_RATIONALE}}`

## Hard blockers

Any `FAIL` result is an unresolved blocker and overrides the numerical score. Mark each control `PASS`, `FAIL`, or `NOT APPLICABLE`, and justify every `NOT APPLICABLE` result.

| Blocker | Status | Evidence or remediation |
| --- | --- | --- |
| An accountable human owner and review authority are named | `{{STATUS}}` | `{{EVIDENCE}}` |
| Approved controls prevent secrets, credentials, personal data, or restricted data from entering prompts or repository output improperly | `{{STATUS}}` | `{{EVIDENCE}}` |
| AI cannot directly deploy, publish, delete, migrate, purchase, provision, scale, message users, or mutate production without explicit authorisation and confirmation | `{{STATUS}}` | `{{EVIDENCE}}` |
| Any authorised billable or metered operation has explicit resource, environment, quantity/run/duration, budget or usage, alert/stop, expiry, and cleanup controls | `{{STATUS}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |
| The project has a reproducible build and test command | `{{STATUS}}` | `{{EVIDENCE}}` |
| Stateful changes have a tested backup, rollback, and recovery path | `{{STATUS}}` | `{{EVIDENCE}}` |
| Untrusted AI output is deterministically validated before it can become executable code, commands, queries, markup, URLs, configuration, or infrastructure | `{{STATUS}}` | `{{EVIDENCE}}` |
| The repository has a defined source-of-truth and generated-file boundary | `{{STATUS}}` | `{{EVIDENCE}}` |
| Authoritative instructions define reading order, source precedence, active scope, non-goals, and escalation for material conflicts | `{{STATUS}}` | `{{EVIDENCE}}` |
| Every current approved requirement applicable to authorised AI work, including requirements confirmed through AiReady discovery, is available through an approved authoritative source; requirements that are unavailable, restricted, or identified but not yet confirmed remain visible and block the affected work | `{{STATUS}}` | `{{EVIDENCE}}` |
| A representative fresh-context probe can trace a bounded change from normal starting material to authoritative implementation, affected dependencies, and a safe verification path | `{{STATUS}}` | `{{EVIDENCE}}` |
| Applicable legal, regulatory, contractual, licensing, and accessibility obligations are known and owned | `{{STATUS}}` | `{{EVIDENCE}}` |
| Multi-repository changes have coordinated compatibility validation, release sequencing, partial-failure handling, and rollback | `{{STATUS}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |

Unresolved blocker count: `{{NUMBER}}`

## Scoring instructions

Score every control from 0 to 2:

- **0 — absent:** no reliable control or evidence;
- **1 — partial:** documented or implemented incompletely, manually, or without enforcement;
- **2 — effective:** implemented, current, reproducible, and supported by evidence.

Use `N/A` only when the control genuinely cannot apply. Explain it and remove its points from the denominator. Calculate each area as `earned points / applicable points × 10`. The maximum total is 100.

### 1. Purpose, ownership, and authority — 10 points

| Control | Score | Evidence / limitation |
| --- | ---: | --- |
| The intended AI use and prohibited uses are documented | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Product, design, technical, quality, operations, risk, and release decision rights are assigned to accountable people | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Human owners, reviewers, escalation routes, and approval authority are named | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Agent permissions follow least privilege and distinguish read, write, external, production, purchasing, provisioning, scaling, and deletion actions | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Billable or metered work has explicit resource, environment, quantity/run/duration, budget or usage, stop, expiry, and cleanup boundaries | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |
| Stop conditions and actions requiring fresh approval are explicit | `{{0_1_2}}` | `{{EVIDENCE}}` |

Area score: `{{X_OF_10}}`

### 2. Repository instructions and context — 10 points

| Control | Score | Evidence / limitation |
| --- | ---: | --- |
| The AI tools in use receive authoritative objectives, invariants, workflow, commands, and prohibited actions through a supported instruction source | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Specialised parts of the project provide scoped context where global instructions are insufficient | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Terminology, business rules, and non-obvious constraints are documented | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Instructions identify authoritative sources and warn against stale/generated artefacts | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Instructions define a task-relevant reading order, precedence rule, current delivery boundary, explicit non-goals, and governing decisions | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Global, scoped, task-specific, and on-demand context has explicit activation, inheritance, ownership, and conflict rules where applicable | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |
| Material instruction claims, paths, commands, versions, and conventions are checked against current authoritative source or runtime evidence | `{{0_1_2}}` | `{{EVIDENCE}}` |
| A contributor can locate the minimum sufficient authoritative context for a bounded change, including cross-cutting sources, known ambiguity, and stop conditions, without relying on a prescribed repository layout | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Representative fresh-context AI probes demonstrate effective navigation, dependency discovery, ambiguity handling, and selection of focused verification for the intended change classes | `{{0_1_2}}` | `{{EVIDENCE}}` |

Area score: `{{X_OF_10}}`

### 3. Architecture and source ownership — 10 points

| Control | Score | Evidence / limitation |
| --- | ---: | --- |
| Components, data flows, trust boundaries, and external dependencies are documented | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Source, generated output, configuration, infrastructure, and production data ownership are distinct | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Shared validation and rendering boundaries prevent duplicated safety logic | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Architecture changes require an explicit decision record and migration assessment | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Interconnected repositories have an owned dependency map, version/contract policy, and authoritative source for each shared interface | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |
| Stable component responsibilities, forbidden ownership, discovery, compatibility ranges, failure behaviour, and change authority are documented where applicable | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Repository and delivery units are evidence-classified without confusing a shared dependency graph, independent collection, embedded component, or multi-repository system | `{{0_1_2}}` | `{{EVIDENCE}}` |
| High-blast-radius components and change-amplification relationships are identified with safe change boundaries, additional review, and verification requirements | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |
| Canonical domain concepts, business operations, interfaces, validation boundaries, and failure patterns are distinguishable from intentional variants and accidental duplication | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Material stakeholder concerns and architectural views are represented, with current baseline, target state, and transition steps kept distinct | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Cross-quality trade-offs, decision reversibility, review findings, and improvement actions are explicit and owned where applicable | `{{0_1_2}}` | `{{EVIDENCE}}` |

Area score: `{{X_OF_10}}`

### 4. Task definition and traceability — 10 points

| Control | Score | Evidence / limitation |
| --- | ---: | --- |
| Work begins with a problem, outcome, acceptance criteria, and constraints | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Approved product and design intent is separated from observed legacy behaviour, assumptions, defects, and unknowns | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Requirements use stable identities and versions, preserve source and derivation, and distinguish implementation, verification, validation, and release evidence | `{{0_1_2}}` | `{{EVIDENCE}}` |
| The AI can access every current authoritative requirement applicable to the change, including requirements confirmed through AiReady discovery; newly identified but unconfirmed requirements and unavailable, restricted, conflicting, or stale sources constrain scope and trigger a stop | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Changes link to an issue or decision record and remain reviewable | `{{0_1_2}}` | `{{EVIDENCE}}` |
| A current change-impact source identifies related implementation, contracts, generated artefacts, tests, documentation, operations, support, release, and recovery work | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Pull requests require risk, verification, documentation, and limitation evidence | `{{0_1_2}}` | `{{EVIDENCE}}` |
| AI involvement and material human decisions can be recorded without exposing private prompts or data | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Cross-repository work uses one change-set identifier, names every affected repository, and defines merge/release order | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |

Area score: `{{X_OF_10}}`

#### Requirements access evidence

Requirements may be held in repositories, product records, design systems,
issue trackers, contract or policy stores, architecture decisions, operational
runbooks, compliance records, or other approved systems. File presence or a
human-accessible link does not prove that the approved AI tool can retrieve and
use the requirement within its authorised data and access boundary.

Include functional, product, experience, design, quality, security, privacy,
accessibility, legal, contractual, compliance, compatibility, data,
operational, recovery, and release requirements that can affect the authorised
change classes. Include requirements discovered, reconstructed, or confirmed
during AiReady adoption. A discovered requirement is not approved intent until
the accountable owner confirms it; until then, preserve it as an explicit
unknown or stop condition.

| Requirement source and version | Requirement types and applicable scope | AI access path and permission | Authority, currency, and precedence verified | Restricted, missing, conflicting, or unapproved content | Result and evidence | Owner/action |
| --- | --- | --- | --- | --- | --- | --- |
| `{{SOURCE_AND_VERSION}}` | `{{TYPES_CHANGE_CLASSES_REPOSITORIES_AND_COMPONENTS}}` | `{{APPROVED_ACCESS_METHOD_OR_UNAVAILABLE}}` | `{{CHECK_AND_RESULT}}` | `{{GAP_OR_NONE}}` | `{{PASS_FAIL_AND_EVIDENCE}}` | `{{OWNER_AND_ACTION}}` |

Requirements access result: `{{PASS_FAIL}}`.

Do not grant broader access merely to pass this check. When a requirement
cannot be exposed to an AI tool, provide an approved, authoritative and
sufficiently detailed representation if the owner and data controls permit it.
Otherwise exclude and block the affected work. For interconnected repositories,
include system-level requirements, shared contracts, supported combinations,
and requirements held outside the repository being edited.

### 5. Reproducible development environment — 10 points

| Control | Score | Evidence / limitation |
| --- | ---: | --- |
| Supported runtime and tool versions are explicit | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Dependencies are locked and clean installation is reproducible | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Configuration is documented, validated, and separated from secrets | `{{0_1_2}}` | `{{EVIDENCE}}` |
| A clean checkout can build and test without undocumented local state | `{{0_1_2}}` | `{{EVIDENCE}}` |

Area score: `{{X_OF_10}}`

### 6. Tests and deterministic quality gates — 10 points

| Control | Score | Evidence / limitation |
| --- | ---: | --- |
| One documented command runs the complete local quality gate | `{{0_1_2}}` | `{{EVIDENCE}}` |
| CI runs the same gate from a clean environment and blocks merging on failure | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Tests cover normal behaviour, failure paths, security boundaries, migrations, and regressions | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Manual, browser, accessibility, performance, or production checks are identified where automation is insufficient | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Critical journeys, alternate states, usability, content, and experience outcomes have defined evaluation and evidence | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Contract and integration tests verify supported combinations across repository boundaries | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |
| Simulated, component, packaged, integrated, representative, physical/specialist, and effective-environment evidence are kept distinct where applicable | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Material command records preserve exact execution scope, environment, exit result, failures, skips, reruns, and limitations | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Common change types have a focused, deterministic feedback loop with known prerequisites, expected duration, actionable diagnostics, and a defined trigger for the complete gate | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Applicable reliability, recovery, and incident assumptions are exercised safely and actual outcomes, limitations, and corrective actions are retained | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |
| Performance, capacity, resource efficiency, technology cost/value, and sustainability have separate applicability and evidence decisions | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |

Area score: `{{X_OF_10}}`

### 7. Security, privacy, and supply chain — 10 points

| Control | Score | Evidence / limitation |
| --- | ---: | --- |
| Security policy, private reporting route, threat boundaries, and incident ownership are documented | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Secret scanning, static analysis, dependency review, and licence review are enabled or explicitly risk-accepted | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Logs, fixtures, prompts, issue text, and generated artefacts exclude sensitive data | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Third-party actions, packages, models, plugins, and tools are pinned and reviewed | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Applicable source/build integrity, provenance, attestation, signing, and open-source security objectives identify exact framework versions and are verified by the intended consumer against an approved policy | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |

Area score: `{{X_OF_10}}`

### 8. AI-output and data trust boundaries — 10 points

| Control | Score | Evidence / limitation |
| --- | ---: | --- |
| AI output is treated as untrusted input and deterministically validated before use | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Closed schemas, allowlists, escaping, parameterisation, and sandboxing protect executable boundaries | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Prompt inputs and retrieved context follow data-classification and minimum-necessary rules | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Generated claims, code, dependencies, licences, and citations have an appropriate verification process | `{{0_1_2}}` | `{{EVIDENCE}}` |

Area score: `{{X_OF_10}}`

### 9. Deployment, migration, rollback, and recovery — 10 points

| Control | Score | Evidence / limitation |
| --- | ---: | --- |
| Build, deploy, publish, migrate, delete, and other material operations are separate and explicit | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Destructive, external, purchasing, provisioning, scaling, or other cost-bearing actions require scoped authority and confirmation | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Authorised billable resources have current budget/usage limits, stop thresholds, expiry, cleanup, actual-use evidence, and accountable ownership | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |
| Migrations have dry-run/preflight, backup, idempotency, verification, and rollback controls | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Production verification checks rendered/effective behaviour rather than source alone | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Multi-repository releases define compatible intermediate states, sequencing, partial-failure handling, and coordinated rollback | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |

Area score: `{{X_OF_10}}`

### 10. Human review, documentation, and evidence — 10 points

| Control | Score | Evidence / limitation |
| --- | ---: | --- |
| Code ownership and required reviewers match project risk | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Documentation changes accompany behavioural and operational changes | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Review covers applicable product, design, engineering, quality, security/data, operations, and release responsibilities | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Release evidence separates automated results, manual checks, production checks, unknowns, and accepted risks | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Delivery checkpoints are distinguished from immutable release candidates, approvals, and released outcomes | `{{0_1_2}}` | `{{EVIDENCE}}` |
| The assessment is reviewed after material architecture, tooling, data, dependency, or authority changes | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Repeated review feedback, failed changes, incidents, support patterns, and manual corrections can propose guidance improvements without bypassing owner approval or source precedence | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Assessment findings and projected improvements remain separate from authority to modify the project or claim readiness | `{{0_1_2}}` | `{{EVIDENCE}}` |
| Optional architecture, cybersecurity, cost/value, and sustainability framework mappings record exact sources, versions, scope, gaps, limitations, and decision ownership without implying certification | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |
| Comparable assessments record control-level improvements, regressions, changed evidence, and new or resolved blockers without treating an aggregate score as an automatic approval gate | `{{0_1_2_NA}}` | `{{EVIDENCE_OR_NOT_APPLICABLE}}` |

Area score: `{{X_OF_10}}`

## Mechanical comprehensibility and agent efficiency ready check

This check determines whether an unfamiliar artificial intelligence (AI) agent
can understand and work within the assessed codebase efficiently enough for the
proposed operating level. It assesses the development system around the agent,
not the agent's confidence, writing speed, token volume, or ability to produce a
plausible explanation.

An approved AI agent should perform the probes. The accountable owner defines
the representative change classes and a human reviewer verifies the evidence
and accepts the resulting operating boundary. The project's usual AI may
perform the baseline. For a high-risk system or a controlled-automation
decision, independently repeat proportionate probes with a separate AI session,
agent, or model when practicable.

### Probe method

1. Select two to five bounded, representative change classes for the intended
   AI use. Include a cross-repository change when interconnected repositories
   are in scope.
2. Start each probe in a fresh context with only the normal entry material and
   authorised repository access available to a newly assigned contributor. Do
   not privately supply file locations or implementation answers that the
   repository itself should make discoverable.
3. Begin read-only. A sandboxed implementation or command may be included only
   when its authority, containment, expected effects, and stop conditions were
   approved in advance.
4. Ask the agent to locate the authoritative context and implementation, trace
   dependencies and change impact, identify ambiguity and generated-file
   boundaries, and select the narrowest safe verification path.
5. Preserve the discovery path, sources consulted, commands and exact results,
   dead ends, contradictions, assumptions, elapsed feedback time, and
   limitations in the discovery baseline.
6. Have the human reviewer reproduce or inspect material evidence before using
   a probe to support the readiness decision.

| Probe/change class | Initial context supplied | Authoritative entry point and implementation found | Dependencies, repositories, and blast radius found | Focused verification and actionable result | Dead ends, conflicts, assumptions, or stops | Result and evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `{{REPRESENTATIVE_PROBE}}` | `{{STARTING_MATERIAL_AND_ACCESS}}` | `{{SOURCES_AND_DISCOVERY_PATH}}` | `{{IMPACT_AND_EVIDENCE}}` | `{{CHECK_RESULT_DURATION_AND_DIAGNOSTICS}}` | `{{FRICTION_OR_NONE}}` | `{{EFFECTIVE_FRICTION_BLOCKED_NOT_ASSESSED_AND_EVIDENCE}}` |

| Summary | Result |
| --- | --- |
| Change classes represented | `{{CLASSES_AND_JUSTIFICATION}}` |
| Material change classes not assessed | `{{CLASSES_AND_REASON_OR_NONE}}` |
| Overall mechanical-readiness result | `{{EFFECTIVE_FRICTION_BLOCKED_NOT_ASSESSED}}` |
| Principal comprehension or efficiency constraints | `{{FINDINGS_OR_NONE}}` |
| Human reviewer and review date | `{{NAME_AND_DATE}}` |

Use these result meanings:

- **Effective:** the agent reached the correct authoritative sources, bounded
  the impact, identified material uncertainty, and obtained an actionable
  verification result with reproducible evidence.
- **Friction:** the agent completed the probe safely, but unnecessary
  ambiguity, duplication, navigation, context loading, change amplification,
  or weak diagnostics materially reduced efficiency.
- **Blocked:** the agent could not safely determine what owned the behaviour,
  what else would be affected, or how the change could be verified.
- **Not assessed:** no sufficient representative evidence was collected.

A blocked result that prevents safe navigation, impact analysis, or
verification is a hard blocker. A not-assessed change class cannot support
`Supervised` or `Controlled automation` authority for that class. Friction must
produce an owned remediation or an explicit, bounded risk decision. One
successful probe supports only the demonstrated change class and system
boundary; it does not prove that the whole codebase is mechanically ready.

Do not impose universal targets for tokens, files consulted, elapsed time,
repository size, dependency depth, or source layout. These are diagnostic
signals only. Judge whether the context and effort were necessary, whether the
result was correct and reproducible, and whether the feedback enabled a safe
next decision.

## Result

| Measure | Result |
| --- | --- |
| Earned points | `{{NUMBER}}` |
| Applicable points | `{{NUMBER}}` |
| Normalised score | `{{NUMBER_OF_100}}` |
| Unresolved hard blockers | `{{NUMBER}}` |
| Readiness level | `{{NOT_READY_ASSISTED_ONLY_SUPERVISED_CONTROLLED_AUTOMATION}}` |

Interpretation:

- **0–39:** Not ready.
- **40–59:** Assisted only.
- **60–79:** Supervised.
- **80–100:** Eligible for controlled automation only when there are no unresolved hard blockers and the authorised scope is explicit.

## Comparison with the previous assessment

Complete this section only when an earlier assessment has a sufficiently
comparable system boundary, intended AI use, scoring method, and evidence
standard. Otherwise record why comparison would be misleading and establish
this assessment as the new baseline.

| Area/control | Previous result and evidence | Current result and evidence | Improved/regressed/unchanged/unknown | Explanation and risk effect | Owner/action |
| --- | --- | --- | --- | --- | --- |
| `{{AREA_OR_CONTROL}}` | `{{RESULT_AND_EVIDENCE}}` | `{{RESULT_AND_EVIDENCE}}` | `{{CLASSIFICATION}}` | `{{CAUSE_AND_EFFECT}}` | `{{OWNER_AND_ACTION}}` |

| Comparison summary | Result |
| --- | --- |
| Previous assessment identifier and exact scope | `{{IDENTIFIER_AND_SCOPE_OR_NONE}}` |
| New blockers | `{{NUMBER_AND_IDENTIFIERS}}` |
| Resolved blockers | `{{NUMBER_AND_IDENTIFIERS}}` |
| Controls improved | `{{NUMBER_AND_IDENTIFIERS}}` |
| Controls regressed | `{{NUMBER_AND_IDENTIFIERS}}` |
| Evidence invalidated, stale, or no longer comparable | `{{DETAILS_OR_NONE}}` |

An aggregate-score increase does not cure a hard blocker, prove that a
particular risk was reduced, or authorise broader AI use. An aggregate-score
decrease is a review signal, not an automatic release failure, unless an
accountable owner has approved a specific evidence-based control as a gate.

## Required remediation

| Priority | Action | Owner | Due | Evidence required |
| --- | --- | --- | --- | --- |
| `{{P0_P1_P2}}` | `{{ACTION}}` | `{{OWNER}}` | `{{DATE}}` | `{{EVIDENCE}}` |

## Accepted risks and limitations

| Risk or limitation | Impact | Owner | Expiry/review trigger | Rationale |
| --- | --- | --- | --- | --- |
| `{{RISK}}` | `{{IMPACT}}` | `{{OWNER}}` | `{{DATE_OR_TRIGGER}}` | `{{RATIONALE}}` |

## Evidence record

Record commands and results without secrets, private prompts, personal data, or restricted output.

| Evidence | Result | Location or command | Date |
| --- | --- | --- | --- |
| Clean installation | `{{PASS_FAIL_NOT_RUN}}` | `{{EVIDENCE}}` | `{{DATE}}` |
| Complete quality gate | `{{PASS_FAIL_NOT_RUN}}` | `{{EVIDENCE}}` | `{{DATE}}` |
| Security and dependency checks | `{{PASS_FAIL_NOT_RUN}}` | `{{EVIDENCE}}` | `{{DATE}}` |
| Manual/user-interface checks | `{{PASS_FAIL_NOT_RUN_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{DATE}}` |
| Deployment/recovery checks | `{{PASS_FAIL_NOT_RUN_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{DATE}}` |
| Cross-repository contract and compatibility checks | `{{PASS_FAIL_NOT_RUN_NOT_APPLICABLE}}` | `{{EVIDENCE}}` | `{{DATE}}` |
| Mechanical comprehensibility and agent efficiency probes | `{{EFFECTIVE_FRICTION_BLOCKED_NOT_ASSESSED}}` | `{{EVIDENCE}}` | `{{DATE}}` |
| Applicable requirements access and coverage reconciliation | `{{PASS_FAIL_NOT_RUN}}` | `{{EVIDENCE}}` | `{{DATE}}` |

## Approval

| Role | Name | Decision | Date |
| --- | --- | --- | --- |
| Project/AI authority owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` |
| Product/design owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` |
| Technical owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` |
| Quality/verification owner | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` |
| Security/data owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` |
| Release/operations owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` |
