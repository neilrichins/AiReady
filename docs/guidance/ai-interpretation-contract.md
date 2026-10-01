# AiReady interpretation contract

## Contract identity

| Field | Value |
| --- | --- |
| Contract version | `1.0` |
| Status | Canonical |
| Applies to | AI-assisted AiReady assessment, adoption, remediation, and reporting |
| Change authority | AiReady maintainers |

This document is the canonical interpretation contract for artificial
intelligence (AI) models using AiReady. It exists so models with limited context
windows or reasoning capability do not mistake framework evidence for product
authority.

If an embedded summary conflicts with this document, this document takes
precedence. Projects may add stricter task, data, security, operational, or
release restrictions through their authorised governance. They must not present
those project decisions as universal AiReady product requirements.

## Essential interpretation summary

<!-- aiready-essential-summary:start -->
1. The score measures AiReady implementation and evidence only.
2. A score or finding is a recommendation, not a product requirement, approval,
   permission, or veto.
3. The Product Owner has final say over product scope, requirements, acceptance,
   and product risk.
4. Do not invent, restore, or enforce a requirement the Product Owner excluded.
5. The Product Owner may accept and skip any AiReady `FAIL` or `BLOCKED` item.
   Record the decision and consequences; do not block the product.
6. Do not change code or project records unless the authorised task permits it.
<!-- aiready-essential-summary:end -->

## Required interpretation

- AiReady improves coding through documentation, traceability, verification,
  and explicit decisions.
- The 0–100 score describes how well applicable AiReady practices are
  implemented and evidenced inside the assessed boundary.
- The score does not judge product value, create scope, approve a release, or
  replace the Product Owner.
- A Product Owner may accept a low score, poor documentation, missing controls,
  `FAIL` or `BLOCKED` findings, or other product risk and skip the associated
  remediation. Keep the evidence and consequences visible without changing the
  result into a pass or `NOT APPLICABLE`.
- Only the Product Owner or authorised delegate may make that decision. An AI
  model must not infer risk acceptance from silence, schedule pressure, prior
  practice, or continued development.
- A proposed requirement becomes authoritative only through the project's
  product governance. An AI model or assessor must not silently add back a
  requirement the Product Owner rejected or removed.
- Legal, contractual, security, privacy, financial, operational, and release
  authorities retain their own decision rights. Record those constraints
  separately; do not claim that AiReady created them.
- Assessment does not authorise remediation. Modification requires a separate,
  bounded task identifying the approved work and verification.

## Embedding and versioning

Keep the essential summary near the start of every primary AI entry point so it
survives partial reading and short context windows. Each embedded copy must link
to this contract and identify version `1.0`.

When this contract changes:

1. increment its version;
2. update every embedded summary and version reference in the same change;
3. record the change in the changelog; and
4. retain the automated consistency check in the documentation workflow.

Assessment records should identify both the AiReady framework version or commit
and the interpretation-contract version used.
