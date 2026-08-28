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

## Dependency and interface contracts

| Producer | Consumer | Interface/schema/package | Version policy | Compatibility window | Contract test |
| --- | --- | --- | --- | --- | --- |
| `{{REPOSITORY}}` | `{{REPOSITORY}}` | `{{CONTRACT}}` | `{{POLICY}}` | `{{SUPPORTED_COMBINATIONS}}` | `{{TEST}}` |

Identify the authoritative definition. Generated clients, copied schemas, vendored files, and duplicated documentation must name their source and regeneration procedure.

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
