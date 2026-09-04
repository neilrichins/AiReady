# Discovery and baseline record

## Assessment boundary

| Field | Value |
| --- | --- |
| Project/system | `{{NAME}}` |
| Assessed repositories and commits | `{{REPOSITORIES_AND_FULL_COMMITS}}` |
| Accountable owner | `{{OWNER}}` |
| Assessors | `{{PEOPLE_AND_APPROVED_AI_TOOLS}}` |
| AI probe tool, model, and configuration | `{{IDENTIFIER_VERSION_AND_CONFIGURATION_OR_NOT_RUN}}` |
| Fresh-context isolation method | `{{NEW_SESSION_SEPARATE_AGENT_CLEARED_CONTEXT_OR_NOT_RUN}}` |
| Assessment date | `{{DATE}}` |
| Data classification | `{{CLASSIFICATION}}` |
| Read/write/execute/network authority | `{{AUTHORITY}}` |
| Excluded systems/data | `{{EXCLUSIONS}}` |
| Stop conditions | `{{CONDITIONS}}` |

## Evidence labels

Use one label for every material statement:

- `OBSERVED`: directly established from reproducible source, configuration, history, or runtime evidence;
- `DOCUMENTED`: stated by an existing source whose currency has not yet been established;
- `CONFIRMED`: accepted as intent by an accountable owner;
- `INFERRED`: reasoned from incomplete evidence and awaiting confirmation; or
- `UNKNOWN`: not established.

## Repository and system inventory

| Repository/component/system | Purpose | Owner | Assessed version | Technology/runtime | Authoritative artefacts | Depends on | Evidence label/source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{PURPOSE}}` | `{{OWNER_OR_UNKNOWN}}` | `{{IDENTIFIER}}` | `{{TECHNOLOGY}}` | `{{ARTEFACTS}}` | `{{DEPENDENCIES}}` | `{{LABEL_AND_SOURCE}}` |

## System, repository, and delivery classification

Classify what the evidence shows before selecting controls. Do not assume that
a repository is a deployable application, that colocated projects share a
dependency graph, or that one repository is the complete system.

| Repository/component/system | Type and purpose | Build/publish/deploy/operate model | Delivery or release unit | Relationship to other units | Conditional/platform variants | Evidence label/source |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{APPLICATION_SERVICE_LIBRARY_PACKAGE_MOBILE_DESKTOP_INFRASTRUCTURE_DATA_NOTEBOOK_DOCUMENTATION_CONTENT_COURSE_COLLECTION_OR_OTHER}}` | `{{MODEL_OR_NOT_APPLICABLE}}` | `{{INDEPENDENT_COORDINATED_EMBEDDED_OR_NONE}}` | `{{SHARED_GRAPH_LOOSE_COLLECTION_EXTERNAL_SYSTEM_OR_OTHER}}` | `{{VARIANTS_OR_NONE}}` | `{{LABEL_AND_EVIDENCE}}` |

Record authoritative manifests, workspace or project definitions, generated
artefacts, release tooling, deployed units, and observed dependency edges.
Unknown classification or delivery boundaries remain visible because they can
change which instructions, tests, compatibility checks, and release controls apply.

## Source, generated, configuration, and data boundaries

| Item/location | Classification | Authoritative source | Writers/regeneration | Sensitive content | Safe handling | Confidence/evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{SOURCE_GENERATED_CONFIGURATION_DATA_INFRASTRUCTURE_OR_OTHER}}` | `{{SOURCE}}` | `{{PROCESS}}` | `{{CLASS_OR_NONE}}` | `{{CONTROL}}` | `{{LABEL_AND_EVIDENCE}}` |

## Existing documentation and control map

| Concern | Existing source | Owner | Currency | Evidence quality | Conflict/gap | Action |
| --- | --- | --- | --- | --- | --- | --- |
| Product intent and requirements | `{{SOURCE_OR_MISSING}}` | `{{OWNER}}` | `{{CURRENT_STALE_UNKNOWN}}` | `{{STRONG_PARTIAL_WEAK_NONE}}` | `{{FINDING}}` | `{{REUSE_VALIDATE_IMPROVE_CREATE}}` |
| Experience and design | `{{SOURCE_OR_MISSING}}` | `{{OWNER}}` | `{{STATUS}}` | `{{QUALITY}}` | `{{FINDING}}` | `{{ACTION}}` |
| Architecture/data flows | `{{SOURCE_OR_MISSING}}` | `{{OWNER}}` | `{{STATUS}}` | `{{QUALITY}}` | `{{FINDING}}` | `{{ACTION}}` |
| Build/development environment | `{{SOURCE_OR_MISSING}}` | `{{OWNER}}` | `{{STATUS}}` | `{{QUALITY}}` | `{{FINDING}}` | `{{ACTION}}` |
| Testing/verification | `{{SOURCE_OR_MISSING}}` | `{{OWNER}}` | `{{STATUS}}` | `{{QUALITY}}` | `{{FINDING}}` | `{{ACTION}}` |
| Security/privacy/data | `{{SOURCE_OR_MISSING}}` | `{{OWNER}}` | `{{STATUS}}` | `{{QUALITY}}` | `{{FINDING}}` | `{{ACTION}}` |
| Operations/recovery | `{{SOURCE_OR_MISSING}}` | `{{OWNER}}` | `{{STATUS}}` | `{{QUALITY}}` | `{{FINDING}}` | `{{ACTION}}` |
| Release history/process | `{{SOURCE_OR_MISSING}}` | `{{OWNER}}` | `{{STATUS}}` | `{{QUALITY}}` | `{{FINDING}}` | `{{ACTION}}` |
| AI instructions/authority | `{{SOURCE_OR_MISSING}}` | `{{OWNER}}` | `{{STATUS}}` | `{{QUALITY}}` | `{{FINDING}}` | `{{ACTION}}` |

## Requirements sources and AI access baseline

Inventory every source of requirements that can affect the intended AI change
classes, including requirements discovered, reconstructed, or confirmed during
AiReady adoption. Do not treat observed behaviour or an AI inference as an
approved requirement without accountable owner confirmation.

| Requirement source and version | Requirement types and applicable scope | Authority, owner, currency, and precedence | Approved AI access method | Access tested from the assessed AI environment | Missing, restricted, conflicting, or unapproved content | Affected work and stop condition | Evidence label/source | Owner/action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{SOURCE_AND_VERSION}}` | `{{FUNCTIONAL_PRODUCT_DESIGN_QUALITY_SECURITY_PRIVACY_ACCESSIBILITY_LEGAL_CONTRACTUAL_COMPLIANCE_COMPATIBILITY_DATA_OPERATIONS_RECOVERY_RELEASE_OR_OTHER_AND_SCOPE}}` | `{{AUTHORITY_AND_STATUS}}` | `{{ACCESS_METHOD_OR_UNAVAILABLE}}` | `{{PASS_FAIL_NOT_RUN_AND_EVIDENCE}}` | `{{GAP_OR_NONE}}` | `{{BOUNDARY_AND_ACTION}}` | `{{LABEL_AND_SOURCE}}` | `{{OWNER_AND_ACTION}}` |

A human-readable link is insufficient when the approved AI tool cannot access
it. Do not broaden data or system access merely to complete the assessment. If
an approved authoritative representation cannot safely provide the necessary
requirement, exclude and block the affected AI work. For interconnected
repositories, include shared and system-level requirement sources outside the
repository being edited.

## AI instruction and context currency

| Instruction source/scope | Material claim, command, path, or rule checked | Current authoritative evidence | Assessed commit/version/date | Result | Risk or work affected | Owner/action |
| --- | --- | --- | --- | --- | --- | --- |
| `{{SOURCE_AND_SCOPE}}` | `{{ITEM}}` | `{{EVIDENCE}}` | `{{IDENTIFIER_AND_DATE}}` | `{{CURRENT_STALE_CONFLICTING_UNKNOWN}}` | `{{EFFECT}}` | `{{OWNER_AND_ACTION}}` |

Check material instructions against current source, manifests, lockfiles,
configuration, repository structure, interfaces, CI, executable commands, and
effective behaviour as applicable. Do not upgrade `DOCUMENTED` instructions to
`OBSERVED` or `CONFIRMED` merely because an AI repeated or summarised them.

## Context locality, consistency, and changeability baseline

Record the current state before proposing structural remediation. This baseline
does not prescribe directories, file sizes, naming styles, dependency depth,
design patterns, or a target context size.

| Component/domain/change surface | Authoritative context entry point | Scattered, duplicated, conflicting, or missing context | Canonical terminology/implementation state | High-impact relationships or blast radius | Focused verification and friction | Evidence label/source | Owner/action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{SURFACE}}` | `{{SOURCE_OR_UNKNOWN}}` | `{{FINDING_OR_NONE}}` | `{{CURRENT_AMBIGUOUS_DUPLICATED_UNKNOWN}}` | `{{RELATIONSHIPS_AND_EVIDENCE}}` | `{{CHECK_DURATION_DIAGNOSTICS_AND_GAPS}}` | `{{LABEL_AND_SOURCE}}` | `{{OWNER_AND_ACTION}}` |

Counts, static-analysis findings, dependency graphs, and AI-generated summaries
are investigation signals. Validate them against project intent, current
contracts, runtime behaviour, history, and accountable owner knowledge before
classifying a defect or recommending consolidation. A high fan-in/fan-out
component, repeated implementation, or long-running check may be justified;
record the reason and its controls rather than assuming a remediation.

## Mechanical comprehensibility and agent efficiency probes

Use the [AiReady assessment probe method](../AiReady.md#mechanical-comprehensibility-and-agent-efficiency-ready-check)
to test whether an unfamiliar AI agent can navigate and act safely from the
project's normal starting material. Select two to five bounded change classes
that represent the intended AI use. Begin read-only and use a fresh context for
each probe. Include at least one cross-repository change when interconnected
repositories are in scope.

Do not repair documentation, reveal undiscovered implementation locations, or
coach the agent through dead ends while collecting the baseline. Record those
interventions as limitations if safety or assessment continuity requires them.

| Probe/change class | Initial context and access supplied | Discovery path and sources consulted | Authoritative entry point and canonical implementation | Dependencies, repositories, and blast radius | Focused verification, result, duration, and diagnostics | Dead ends, conflicts, assumptions, or stop conditions | Verdict and evidence | Owner/action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{REPRESENTATIVE_PROBE}}` | `{{STARTING_MATERIAL_AND_ACCESS}}` | `{{ORDERED_PATH_AND_SOURCES}}` | `{{AUTHORITATIVE_SOURCE_OR_UNKNOWN}}` | `{{IMPACT_AND_EVIDENCE}}` | `{{CHECK_RESULT_DURATION_AND_DIAGNOSTICS}}` | `{{FRICTION_OR_NONE}}` | `{{EFFECTIVE_FRICTION_BLOCKED_NOT_ASSESSED_AND_EVIDENCE}}` | `{{OWNER_AND_ACTION}}` |

| Probe summary | Result |
| --- | --- |
| Intended AI change classes | `{{CLASSES}}` |
| Represented change classes | `{{CLASSES_AND_JUSTIFICATION}}` |
| Material change classes not assessed | `{{CLASSES_AND_REASON_OR_NONE}}` |
| Overall mechanical-readiness result | `{{EFFECTIVE_FRICTION_BLOCKED_NOT_ASSESSED}}` |
| Principal comprehension or efficiency constraints | `{{FINDINGS_OR_NONE}}` |
| Human reviewer and review date | `{{NAME_AND_DATE}}` |

`EFFECTIVE` requires correct, reproducible navigation, impact analysis,
uncertainty handling, and actionable verification. `FRICTION` means the probe
completed safely but avoidable ambiguity, duplication, navigation, context
loading, change amplification, or weak diagnostics materially impaired it.
`BLOCKED` means the agent could not safely identify ownership, impact, or a
verification path. `NOT ASSESSED` means the evidence is insufficient.

Treat file counts, token use, elapsed time, dependency depth, and repository
size as diagnostic signals, not universal targets. Assess whether the work was
necessary and whether it led to a correct, bounded, reviewable result. A
successful probe supports only the demonstrated change class and assessed
boundary. Preserve an unassisted baseline and rerun relevant probes in a fresh
context after remediation.

## Product intent versus observed behaviour

| Journey/capability | Documented or confirmed intent | Observed behaviour | Evidence | Difference/unknown | Owner decision required |
| --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{INTENT_AND_LABEL}}` | `{{BEHAVIOUR_AND_LABEL}}` | `{{EVIDENCE}}` | `{{GAP}}` | `{{DECISION}}` |

Current behaviour is not automatically correct. Documented intent is not automatically implemented.

## Build and runtime baseline

| Stage | Expected command/process | Clean environment and versions | Result | Evidence | Hidden dependency/gap | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| Install/setup | `{{COMMAND_OR_PROCESS}}` | `{{ENVIRONMENT}}` | `{{PASS_PARTIAL_FAIL_UNSAFE_NOT_RUN}}` | `{{EVIDENCE}}` | `{{GAP}}` | `{{OWNER}}` |
| Build/package | `{{COMMAND_OR_PROCESS}}` | `{{ENVIRONMENT}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{GAP}}` | `{{OWNER}}` |
| Test/quality gate | `{{COMMAND_OR_PROCESS}}` | `{{ENVIRONMENT}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{GAP}}` | `{{OWNER}}` |
| Local or isolated runtime | `{{COMMAND_OR_PROCESS}}` | `{{ENVIRONMENT}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{GAP}}` | `{{OWNER}}` |
| Deployment/recovery preflight | `{{COMMAND_OR_PROCESS}}` | `{{ENVIRONMENT}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{GAP}}` | `{{OWNER}}` |

Do not repair the baseline while recording it. An assessment, score, finding,
or proposed remediation does not grant change authority. Track remediation as
separate authorised and reviewed changes.

## Verification baseline

| Quality area/critical journey | Existing checks | Last reliable result | Gaps/false confidence | Required characterisation or new verification | Owner |
| --- | --- | --- | --- | --- | --- |
| `{{AREA}}` | `{{CHECKS}}` | `{{RESULT_AND_CONTEXT}}` | `{{GAP}}` | `{{REQUIRED_WORK}}` | `{{OWNER}}` |

## Dependencies and supply chain

| Dependency/tool/service | Version/source | Purpose | Maintenance/support status | Integrity/vulnerability/licence evidence | Replacement or contingency | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ITEM}}` | `{{VERSION_AND_SOURCE}}` | `{{PURPOSE}}` | `{{STATUS}}` | `{{EVIDENCE}}` | `{{PLAN}}` | `{{OWNER}}` |

## Risks, unsafe assumptions, and unknowns

| ID | Finding | Evidence label | Impact | Immediate containment | Required decision/evidence | Owner | Blocks |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{FINDING}}` | `{{LABEL}}` | `{{IMPACT}}` | `{{CONTROL}}` | `{{NEEDED}}` | `{{OWNER}}` | `{{AI_USE_FEATURE_OR_RELEASE}}` |

## Prioritised remediation

| Priority | Bounded outcome | Acceptance criteria | Risk reduced | Owner | Verification | Rollback | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{P0_P1_P2}}` | `{{OUTCOME}}` | `{{CRITERIA}}` | `{{RISK}}` | `{{OWNER}}` | `{{METHOD}}` | `{{RECOVERY}}` | `{{STATUS}}` |

## Baseline decision

| Activity | Decision | Scope and controls | Approver | Review trigger |
| --- | --- | --- | --- | --- |
| Read-only AI discovery | `{{ALLOW_PROHIBIT}}` | `{{BOUNDARY}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| Human-applied AI remediation suggestions | `{{ALLOW_PROHIBIT}}` | `{{BOUNDARY}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| AI edits in isolated branch/worktree | `{{ALLOW_PROHIBIT}}` | `{{BOUNDARY}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| AI execution of project commands | `{{ALLOW_PROHIBIT}}` | `{{BOUNDARY}}` | `{{OWNER}}` | `{{TRIGGER}}` |
| External or production action | `PROHIBIT` or `{{EXPLICIT_BOUNDARY}}` | `{{CONTROL}}` | `{{OWNER}}` | `{{TRIGGER}}` |

Rationale and unresolved limitations: `{{EVIDENCE_BASED_DECISION}}`.
