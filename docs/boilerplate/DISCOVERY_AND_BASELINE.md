# Discovery and baseline record

## Assessment boundary

| Field | Value |
| --- | --- |
| Project/system | `{{NAME}}` |
| Assessed repositories and commits | `{{REPOSITORIES_AND_FULL_COMMITS}}` |
| Accountable owner | `{{OWNER}}` |
| Assessors | `{{PEOPLE_AND_APPROVED_AI_TOOLS}}` |
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

## AI instruction and context currency

| Instruction source/scope | Material claim, command, path, or rule checked | Current authoritative evidence | Assessed commit/version/date | Result | Risk or work affected | Owner/action |
| --- | --- | --- | --- | --- | --- | --- |
| `{{SOURCE_AND_SCOPE}}` | `{{ITEM}}` | `{{EVIDENCE}}` | `{{IDENTIFIER_AND_DATE}}` | `{{CURRENT_STALE_CONFLICTING_UNKNOWN}}` | `{{EFFECT}}` | `{{OWNER_AND_ACTION}}` |

Check material instructions against current source, manifests, lockfiles,
configuration, repository structure, interfaces, CI, executable commands, and
effective behaviour as applicable. Do not upgrade `DOCUMENTED` instructions to
`OBSERVED` or `CONFIRMED` merely because an AI repeated or summarised them.

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
