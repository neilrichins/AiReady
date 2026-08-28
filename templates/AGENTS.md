# Repository instructions for artificial intelligence (AI) coding agents

## Objective

`{{STATE_THE_PROJECT_OBJECTIVE_AND_USER_OUTCOME}}`

## Scope and authority

- Approved AI use: `{{DESCRIBE_APPROVED_USE}}`
- Prohibited AI use: `{{DESCRIBE_PROHIBITED_USE}}`
- Accountable owner: `{{NAME_OR_TEAM}}`
- Required reviewers: `{{NAME_OR_TEAM}}`
- Data classification: `{{CLASSIFICATION}}`
- Actions requiring fresh approval: `{{DEPLOY_PUBLISH_DELETE_MIGRATE_MESSAGE_COST_OR_OTHER}}`
- Repository access: read `{{REPOSITORIES}}`; write `{{REPOSITORIES}}`; operate `{{REPOSITORIES_OR_NONE}}`.
- Stop and escalate when: `{{AMBIGUITY_SECURITY_PRIVACY_DATA_LOSS_COST_OR_OTHER_CONDITIONS}}`

## Non-negotiable invariants

- Preserve `{{ARCHITECTURAL_OR_PRODUCT_INVARIANT}}`.
- Never expose credentials, personal data, private prompts, restricted content, or sensitive logs.
- Treat generated code, commands, configuration, queries, markup, URLs, and infrastructure as untrusted until validated.
- Do not weaken authentication, authorisation, validation, escaping, audit, backup, or confirmation controls.
- Preserve unrelated user changes and generated-file boundaries.
- Do not claim deployment success, security, accessibility, performance, or conformance without the required evidence.
- For cross-repository changes, use one change-set identifier, verify interface compatibility, and follow the documented merge, release, and rollback sequence.

## Source ownership

- Authoritative source: `{{PATHS_OR_SYSTEMS}}`
- Generated/disposable output: `{{PATHS}}`
- Configuration: `{{PATHS}}`
- Production data/state: `{{SYSTEMS_AND_OWNERSHIP}}`
- Files that must never be edited directly: `{{PATHS}}`

## Repository map

- `{{PATH}}`: `{{PURPOSE_AND_BOUNDARY}}`
- `{{PATH}}`: `{{PURPOSE_AND_BOUNDARY}}`
- `{{PATH}}`: `{{PURPOSE_AND_BOUNDARY}}`

Read the scoped README before changing a specialised directory.

## Required workflow

1. Link work to an issue and confirm acceptance criteria.
2. Inspect the current implementation and applicable documentation before editing.
3. Make the smallest coherent change and preserve unrelated work.
4. Add or update tests for behaviour, failure paths, and safety boundaries.
5. Update documentation with behavioural, architectural, or operational changes.
6. Run `{{COMPLETE_QUALITY_COMMAND}}`.
7. Review the complete diff, unresolved limitations, and generated artefacts.
8. Do not perform external or production actions without explicit authority.
9. For interconnected repositories, confirm that every affected repository and supported version combination has been reviewed and tested.

## Commands

```text
Clean install: {{COMMAND}}
Complete quality gate: {{COMMAND}}
Local preview: {{COMMAND}}
Safe deployment preflight: {{COMMAND}}
```

## Manual verification

Automation does not replace: `{{BROWSER_ACCESSIBILITY_SECURITY_PERFORMANCE_PRODUCTION_OR_DOMAIN_CHECKS}}`.
