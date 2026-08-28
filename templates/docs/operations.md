# Operations and recovery

## Authority

| Operation | Command or procedure | Environment | Required approver | Confirmation | External effect |
| --- | --- | --- | --- | --- | --- |
| Build | `{{COMMAND}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{CONTROL}}` | `{{EFFECT}}` |
| Deploy | `{{COMMAND}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{CONTROL}}` | `{{EFFECT}}` |
| Migrate | `{{COMMAND}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{CONTROL}}` | `{{EFFECT}}` |
| Roll back | `{{COMMAND}}` | `{{ENVIRONMENT}}` | `{{OWNER}}` | `{{CONTROL}}` | `{{EFFECT}}` |

## Preflight

1. Confirm identity, environment, version, authority, maintenance window, and expected cost.
2. Run `{{READ_ONLY_PREFLIGHT_COMMAND}}`.
3. Record backups and recovery identifiers without exposing secrets.
4. Review the proposed change and affected resources.

## Deployment and verification

`{{ORDERED_PROCEDURE_WITH_STOP_CONDITIONS}}`

Verify effective behaviour, logs, metrics, data counts, external delivery, and security boundaries. Source and CI evidence alone do not prove deployment success.

## Migration

Document dry run, complete-snapshot validation, compatibility, write confirmation, idempotency, and post-migration comparison.

## Rollback and restore

`{{ROLLBACK_TRIGGER_PROCEDURE_RECOVERY_POINT_OBJECTIVES_AND_VERIFICATION}}`

Last successful restore test: `{{DATE_AND_EVIDENCE}}`.

## Multi-repository sequence

Link `repository-ecosystem.md` and record compatible intermediate states, deployment order, migration order, verification gates, stop conditions, partial-failure ownership, and reverse rollback order. If the project is standalone, record `NOT APPLICABLE` and the evidence supporting that classification.
