# Governed artificial intelligence context

Use this optional record when an artificial intelligence (AI) system or agent
depends materially on retrieved, synchronised, historical, operational, or
cross-system context. Do not require it for every use of AI. Reuse an effective
data catalogue, semantic model, retrieval register, interface contract, access
policy, or operational record instead of creating a duplicate source.

This record defines evidence for a context supply boundary. It does not require
a separate data platform, data copy, streaming architecture, vector database,
Model Context Protocol (MCP), or repository layout. Document the project's
actual mechanisms.

## How to use this record

1. Decide whether governed context materially affects an AI-assisted decision,
   generated result, or action.
2. If it does not, record `NOT APPLICABLE`, the reason, and the accountable
   owner in the project's adoption map or equivalent source.
3. Map authoritative sources, transformations, semantics, access, freshness,
   quality, delivery, consumers, and failure behaviour.
4. Verify the effective context delivered to the AI, not only the intended
   source or pipeline configuration.
5. Preserve limitations, accepted risks, and the Product Owner's decision.

## Document control

| Field | Value |
| --- | --- |
| Context capability/use | `{{NAME_PURPOSE_AND_SCOPE}}` |
| Accountable product/system owner | `{{OWNER}}` |
| Data/context owner | `{{OWNER}}` |
| Technical/operational owner | `{{OWNER}}` |
| Authoritative record or catalogue | `{{LOCATION}}` |
| Assessed system/version | `{{IDENTIFIERS}}` |
| Status | `{{DRAFT_REVIEW_APPROVED_SUPERSEDED}}` |
| Assessed date and review trigger | `{{DATE_AND_EVENT}}` |

## Applicability and boundary

AI consumers and intended use: `{{CONSUMERS_AND_USE}}`.

Decisions or actions influenced by this context: `{{DECISIONS_ACTIONS_OR_NONE}}`.

In scope: `{{SOURCES_TRANSFORMATIONS_CONTEXT_SURFACES_AND_ENVIRONMENTS}}`.

Out of scope: `{{EXCLUSIONS_AND_REASONS}}`.

Claims this record may support: `{{BOUNDED_CLAIMS}}`.

Claims this record does not support: `{{LIMITATIONS}}`.

## Authoritative source inventory

| Source/system | Information supplied | Authority and owner | Classification | Source identity/version/watermark | Freshness/latency requirement | Access method | Unavailable/stale behaviour |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{SOURCE}}` | `{{INFORMATION}}` | `{{AUTHORITY_AND_OWNER}}` | `{{CLASSIFICATION}}` | `{{IDENTIFIER}}` | `{{REQUIREMENT}}` | `{{METHOD}}` | `{{BEHAVIOUR}}` |

Distinguish the authoritative source from caches, indexes, extracts,
embeddings, summaries, generated representations, and prompt content. Record
which source prevails when copies or sources disagree.

## Transformation, identity, and semantic contract

| Context output/concept | Inputs | Transformation/derivation | Canonical meaning and units | Identity/entity matching | Conflict/precedence rule | Quality rule | Owner/version |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{OUTPUT_OR_CONCEPT}}` | `{{SOURCES}}` | `{{LOGIC}}` | `{{DEFINITION}}` | `{{KEYS_MATCHING_OR_NOT_APPLICABLE}}` | `{{RULE}}` | `{{CHECK}}` | `{{OWNER_AND_VERSION}}` |

Document applicable filtering, joining, deduplication, normalisation,
aggregation, classification, summarisation, embedding, enrichment, entity
resolution, and inference. Do not present a derived or model-generated value as
authoritative source data without an approved rule and visible provenance.

## Context delivery contract

| Context surface/interface | Consumer/use | Schema/contract/version | Minimum-necessary content | Provenance/freshness metadata delivered | Access/policy enforcement | Limits | Failure/degraded mode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{API_QUERY_INDEX_FILE_PROMPT_MCP_OR_OTHER}}` | `{{CONSUMER_AND_USE}}` | `{{CONTRACT}}` | `{{CONTENT}}` | `{{METADATA}}` | `{{CONTROL}}` | `{{RATE_SIZE_TIME_OR_OTHER}}` | `{{BEHAVIOUR}}` |

The AI consumer should be able to distinguish current, historical, inferred,
conflicting, incomplete, unavailable, and stale context where those states can
change the result. Do not hide material uncertainty behind a single confidence
or quality label.

## Quality, freshness, and reconciliation

| Concern/invariant | Required result/tolerance | Check and frequency/trigger | Effective result | Evidence | Failure response | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{COMPLETENESS_ACCURACY_FRESHNESS_DUPLICATION_REFERENTIAL_INTEGRITY_SEMANTIC_CONSISTENCY_OR_OTHER}}` | `{{REQUIREMENT}}` | `{{METHOD_AND_TRIGGER}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{RESTRICT_REFRESH_FALLBACK_STOP_OR_OTHER}}` | `{{OWNER}}` |

Include delayed, missing, duplicate, out-of-order, incompatible, corrupt, and
partially refreshed states where applicable. A successful pipeline run does not
prove that the AI received current, complete, or semantically correct context.

## Lineage, audit, and evidence

| AI request/result/action identifier | Context surface/version | Source versions/watermarks | Transform/policy versions | Access decision | Material exclusions/limitations | Evidence/retention |
| --- | --- | --- | --- | --- | --- | --- |
| `{{IDENTIFIER}}` | `{{CONTEXT_IDENTIFIER}}` | `{{SOURCE_IDENTIFIERS}}` | `{{VERSIONS}}` | `{{RESULT}}` | `{{LIMITATIONS}}` | `{{LOCATION_AND_RETENTION}}` |

Retain only the lineage and evidence justified by product, operational,
security, privacy, legal, cost, and support needs. Do not duplicate restricted
content into logs merely to improve auditability.

## Security, privacy, and abuse controls

| Threat/abuse case | Affected data/people/system | Preventive control | Detection | Response/recovery | Residual risk owner |
| --- | --- | --- | --- | --- | --- |
| `{{THREAT}}` | `{{IMPACT}}` | `{{CONTROL}}` | `{{SIGNAL}}` | `{{RESPONSE}}` | `{{OWNER}}` |

Consider cross-tenant or cross-user leakage, prompt injection in retrieved
content, excessive context, unauthorised inference, stale permissions,
poisoning, manipulated lineage, inappropriate retention, and sensitive output.

## Verification scenarios

| Scenario | Starting source/context state | Expected delivered context | Expected AI/fallback behaviour | Method/environment | Result/evidence | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| `{{CURRENT_STALE_CONFLICTING_MISSING_DUPLICATE_DELAYED_POISONED_UNAUTHORISED_OR_OTHER}}` | `{{STATE}}` | `{{EXPECTED_CONTEXT}}` | `{{EXPECTED_BEHAVIOUR}}` | `{{METHOD}}` | `{{RESULT_AND_EVIDENCE}}` | `{{OWNER}}` |

## Monitoring and change triggers

| Signal/change | Detection source | Review/revalidation trigger | Restrict/fallback/stop action | Owner | Evidence retention |
| --- | --- | --- | --- | --- | --- |
| `{{SOURCE_SCHEMA_SEMANTIC_POLICY_PERMISSION_PIPELINE_QUALITY_FRESHNESS_OR_OTHER}}` | `{{SOURCE}}` | `{{TRIGGER}}` | `{{ACTION}}` | `{{OWNER}}` | `{{LOCATION}}` |

Review this record after material changes to sources, meanings, identifiers,
transformations, permissions, policies, delivery interfaces, freshness targets,
consumers, AI behaviour, or affected decisions.

## Risks, exceptions, and decision

| ID | Gap/risk/exception | Context or outcome affected | Disposition | Owner | Review trigger | Evidence/reference |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{ITEM}}` | `{{EFFECT}}` | `{{REMEDIATE_ACCEPT_AND_SKIP_DEFER_DECLINE_TRANSFER_NOT_APPLICABLE}}` | `{{OWNER}}` | `{{TRIGGER}}` | `{{REFERENCE}}` |

Product Owner decision: `{{DECISION_RATIONALE_AND_DATE}}`.

The Product Owner may accept and skip an AiReady finding. Preserve the actual
context limitation and consequences; do not relabel it as effective.
