# Repository ecosystem

This record defines the repositories and shared controls that bound artificial intelligence (AI)-assisted work across the effective system.

## Repository model

- Model: `{{STANDALONE_OR_MULTI_REPOSITORY}}`
- Ecosystem/system name: `{{NAME_OR_NOT_APPLICABLE}}`
- Accountable system owner: `{{OWNER}}`
- Authoritative change-set tracker: `{{ISSUE_PROJECT_OR_OTHER_SYSTEM}}`

For a standalone repository, explain how that was verified and identify any external generated artefacts, packages, infrastructure, schemas, or deployment repositories that were considered.

## Repository inventory and authority

| Repository | Responsibility | Owner | Authoritative artefacts | Depends on | AI read/write/operate authority |
| --- | --- | --- | --- | --- | --- |
| `{{REPOSITORY}}` | `{{RESPONSIBILITY}}` | `{{OWNER}}` | `{{ARTEFACTS}}` | `{{DEPENDENCIES}}` | `{{AUTHORITY}}` |

## Dependency baseline and currency

Use this as the consolidated, reusable index of dependencies across the
effective system. Link to authoritative manifests, lockfiles, Software Bills of
Materials (SBOMs), service catalogues, contracts, architecture records, and
supplier records instead of copying volatile detail into this document.
Use the optional [software supply-chain checklist](../compliance/SOFTWARE_SUPPLY_CHAIN_CHECKLIST.md)
when detailed provenance, licence, supplier, SBOM, vulnerability, lifecycle, or
exit assurance applies.

### Baseline control

| Field | Value |
| --- | --- |
| Baseline identifier/version | `{{IDENTIFIER_AND_VERSION}}` |
| System, repositories, environments, and release channels covered | `{{SCOPE}}` |
| Accountable dependency owner | `{{OWNER}}` |
| Status | `{{DRAFT_REVIEW_APPROVED_STALE_SUPERSEDED}}` |
| Approved or last reviewed | `{{DATE_AND_REVIEWERS}}` |
| Evidence index | `{{LOCATION}}` |
| Scheduled review | `{{DATE_OR_FREQUENCY}}` |
| Event-based review triggers | `{{DEPENDENCY_CONTRACT_PROVIDER_SUPPORT_SECURITY_DATA_ARCHITECTURE_OR_RELEASE_CHANGE}}` |

### Dependency register

Include repositories, components, packages, schemas, generated artefacts,
build toolchains, infrastructure, platforms, runtime or hosted services,
datasets, models, devices, suppliers, and manual operational dependencies where
they can affect the system or its release.

| ID | Dependency and type | Provider/authoritative source | Consumer/scope | Required identity, version, configuration, or state | Criticality and failure effect | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `DEP-001` | `{{DEPENDENCY_AND_TYPE}}` | `{{SOURCE}}` | `{{CONSUMERS}}` | `{{REQUIRED_STATE}}` | `{{CRITICALITY_AND_EFFECT}}` | `{{OWNER}}` |

| Dependency ID | Status | Verification method and evidence | Last verified | Stale or review trigger | Replacement, degradation, or exit path | Release effect |
| --- | --- | --- | --- | --- | --- | --- |
| `DEP-001` | `{{NOT_ASSESSED_VERIFIED_CHANGE_PENDING_DEGRADED_UNSUPPORTED_STALE_REMOVAL_PENDING}}` | `{{METHOD_AND_EVIDENCE}}` | `{{DATE_AND_SCOPE}}` | `{{DATE_OR_EVENT}}` | `{{PATH}}` | `{{BLOCK_CONDITION_ALLOW}}` |

`VERIFIED` means only that the recorded requirement was checked using the
linked method for the stated scope and date. It does not establish security,
licence compliance, availability, behavioural compatibility, or release
readiness beyond that evidence. Unknown, unowned, unsupported, or stale
dependencies remain visible and receive an explicit release effect.

## Component and package inventory

Use this section for independently versioned or discoverable components within
one repository as well as components spread across repositories.

| Component/package | Repository/source | Owns | Must not own | Version source | Discovery/loading mechanism | Release unit |
| --- | --- | --- | --- | --- | --- | --- |
| `{{COMPONENT}}` | `{{SOURCE}}` | `{{RESPONSIBILITIES}}` | `{{EXCLUSIONS}}` | `{{SOURCE}}` | `{{MECHANISM}}` | `{{INDEPENDENT_COORDINATED_EMBEDDED}}` |

## Dependency and interface contracts

| Producer | Consumer | Interface/schema/package | Authoritative definition | Version policy | Compatibility window | Discovery/negotiation | Failure behaviour | Contract test |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{REPOSITORY}}` | `{{REPOSITORY}}` | `{{CONTRACT}}` | `{{SOURCE}}` | `{{POLICY}}` | `{{SUPPORTED_COMBINATIONS}}` | `{{MECHANISM}}` | `{{BEHAVIOUR}}` | `{{TEST}}` |

Identify the authoritative definition. Generated clients, copied schemas, vendored files, and duplicated documentation must name their source and regeneration procedure.

## Change-only dependency review

Use this short review for a proposed change or release after confirming that the
approved dependency baseline still covers the effective system. Review only the
delta, then update the baseline and affected authoritative records before
approval. Do not use an unchanged baseline as candidate-specific compatibility,
security, licence, availability, or effective-environment evidence.

| Field | Value |
| --- | --- |
| Change set/release candidate | `{{IDENTIFIER}}` |
| Baseline reviewed | `{{BASELINE_IDENTIFIER_AND_VERSION}}` |
| Repositories/components assessed | `{{SCOPE}}` |
| Reviewer and date | `{{OWNER_AND_DATE}}` |

| Change question | Result | Affected dependency IDs | Required update, verification, or evidence | Owner |
| --- | --- | --- | --- | --- |
| Dependency added, removed, replaced, duplicated, or newly discovered? | `{{YES_NO_UNKNOWN}}` | `{{IDS_OR_NONE}}` | `{{ACTION_OR_NONE}}` | `{{OWNER}}` |
| Version, digest, configuration, provider, location, availability, capacity, or support state changed? | `{{YES_NO_UNKNOWN}}` | `{{IDS_OR_NONE}}` | `{{ACTION_OR_NONE}}` | `{{OWNER}}` |
| Interface, schema, generated artefact, discovery mechanism, or supported combination changed? | `{{YES_NO_UNKNOWN}}` | `{{IDS_OR_NONE}}` | `{{ACTION_OR_NONE}}` | `{{OWNER}}` |
| Consumer, repository ownership, responsibility boundary, release unit, or AI authority changed? | `{{YES_NO_UNKNOWN}}` | `{{IDS_OR_NONE}}` | `{{ACTION_OR_NONE}}` | `{{OWNER}}` |
| Data access, permissions, network path, trust boundary, supplier, licence, cost, or legal obligation changed? | `{{YES_NO_UNKNOWN}}` | `{{IDS_OR_NONE}}` | `{{ACTION_OR_NONE}}` | `{{OWNER}}` |
| Failure behaviour, observability, degraded operation, recovery, deployment order, or rollback changed? | `{{YES_NO_UNKNOWN}}` | `{{IDS_OR_NONE}}` | `{{ACTION_OR_NONE}}` | `{{OWNER}}` |
| Existing evidence, approval, exception, or end-of-support information became stale? | `{{YES_NO_UNKNOWN}}` | `{{IDS_OR_NONE}}` | `{{ACTION_OR_NONE}}` | `{{OWNER}}` |

An `UNKNOWN` result is unresolved, not equivalent to `NO`. If every result is
`NO`, retain this review as evidence of the assessed delta and link the reused
baseline. A `YES` result reopens only the affected records and gates, but all
required candidate-specific verification still applies.

## Cross-repository change protocol

1. Allocate one change-set identifier and link every issue, branch, commit, and pull request.
2. Record affected repositories, owners, contract versions, data migrations, feature flags, and compatibility requirements.
3. Define implementation and merge order.
4. Test old/new and new/old combinations required during rollout.
5. Define packaging, deployment, migration, verification, and rollback order.
6. Stop when a required repository, owner, version, test environment, or recovery path is unavailable.

## Release and recovery sequence

| Order | Repository/component | Required state before action | Action | Verification | Partial-failure response | Rollback order |
| ---: | --- | --- | --- | --- | --- | --- |
| `{{NUMBER}}` | `{{TARGET}}` | `{{PRECONDITION}}` | `{{ACTION}}` | `{{EVIDENCE}}` | `{{RESPONSE}}` | `{{ORDER}}` |

## System-level quality gate

```text
{{COMMAND_OR_PIPELINE_THAT_TESTS_SUPPORTED_REPOSITORY_COMBINATIONS}}
```

Repository-local success is not system-level success. Record the environment, exact commits or artefact versions, supported combinations, results, and unresolved gaps.

Test unavailable, incompatible, duplicate, partially upgraded, and unknown
component states where they are credible. A successful discovery or load does
not by itself prove behavioural compatibility.
