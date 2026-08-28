# Testing and quality contract

## Complete gate

```text
{{COMPLETE_QUALITY_COMMAND}}
```

The same gate runs in CI from a clean checkout using `{{LOCKED_RUNTIME_AND_DEPENDENCY_COMMAND}}`.

## Automated coverage

| Capability or risk | Test/evidence | Failure prevented |
| --- | --- | --- |
| `{{CAPABILITY}}` | `{{TEST_OR_CHECK}}` | `{{FAILURE}}` |

Include normal behaviour, negative paths, permission boundaries, injection, malformed data, concurrency, migration, idempotency, rollback, compatibility, and regression cases where applicable.

## Cross-repository verification

For interconnected repositories, record contract tests, supported version combinations, generated-artefact freshness checks, integration environments, end-to-end coverage, and the exact commits or immutable artefact versions tested together.

System-level quality command: `{{COMMAND_OR_NOT_APPLICABLE}}`.

## Manual and effective-environment checks

| Check | Environment/tool | Frequency | Evidence location | Owner |
| --- | --- | --- | --- | --- |
| `{{CHECK}}` | `{{ENVIRONMENT}}` | `{{FREQUENCY}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

## Evidence boundary

Automated tests do not prove `{{SECURITY_ACCESSIBILITY_PERFORMANCE_PRODUCTION_THIRD_PARTY_OR_DOMAIN_LIMITS}}`.
