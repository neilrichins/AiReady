# Compliance audit evidence index

Use this optional index to locate evidence supplied for internal review,
certification, assurance, customer due diligence, procurement, regulatory work,
or release decisions. Store sensitive evidence in an authorised protected system;
this index may contain references rather than the evidence itself.

## Evidence-set identity

| Field | Value |
| --- | --- |
| Review/examination/certification/request | `{{NAME_AND_PURPOSE}}` |
| Scope and period | `{{ENTITY_SYSTEM_AND_DATES}}` |
| Exact candidate where applicable | `{{COMMITS_ARTEFACTS_AND_ENVIRONMENTS}}` |
| Requesting and receiving parties | `{{PARTIES}}` |
| Evidence coordinator | `{{NAME_AND_ROLE}}` |
| Protected repository | `{{LOCATION_AND_ACCESS_CONTROL}}` |
| Retention and disposal rule | `{{RULE}}` |

## Evidence index

| Evidence ID | Request/control/obligation | Description | Subject and period | Origin and collection method | Owner | Integrity/version | Classification | Location/access | Reviewer/result | Limitation/expiry |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `EVD-001` | `{{REFERENCE}}` | `{{DESCRIPTION}}` | `{{SCOPE_PERIOD}}` | `{{ORIGIN_METHOD}}` | `{{OWNER}}` | `{{IDENTIFIER}}` | `{{CLASSIFICATION}}` | `{{LOCATION}}` | `{{REVIEW}}` | `{{LIMITATION}}` |

## Evidence request log

| Request ID | Requester | Exact request | Due | Owner | Response/evidence IDs | Status | Qualification or refusal |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `REQ-001` | `{{REQUESTER}}` | `{{REQUEST}}` | `{{DATE}}` | `{{OWNER}}` | `{{RESPONSE}}` | `{{STATE}}` | `{{DETAILS}}` |

## Evidence quality checks

- [ ] Evidence comes from the system or accountable person able to establish the fact.
- [ ] The subject, population, sample, period, timezone, environment, version,
  configuration, and collection method are explicit.
- [ ] Evidence is complete enough to show failures, exceptions, changes, and gaps,
  not only selected successful results.
- [ ] Machine-generated evidence preserves command/configuration, exit status,
  tool version, raw result, skipped work, and human interpretation.
- [ ] Interview or observation evidence identifies participants, date, method,
  corroboration, and limitations without fabricating a transcript.
- [ ] Approval evidence identifies the authorised approver, exact decision,
  scope, conditions, date, and authentic source.
- [ ] Evidence integrity is protected with immutable identifiers, hashes,
  signatures, source history, access logs, or equivalent controls as required.
- [ ] Secrets, credentials, security-sensitive details, personal data, privileged
  material, suspicious-activity information, and confidential audit material are
  redacted or stored under appropriate access controls.
- [ ] Redaction does not remove information required to evaluate the control;
  an authorised reviewer can access the complete evidence when necessary.
- [ ] Retention, legal hold, deletion, data minimisation, transfer, and disclosure
  rules are recorded and reconciled.

## Contradictions and missing evidence

| ID | Affected request/control | Contradiction or absence | Claim affected | Action | Owner | Due | Resolution evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `GAP-001` | `{{REFERENCE}}` | `{{DETAILS}}` | `{{CLAIM}}` | `{{ACTION}}` | `{{OWNER}}` | `{{DATE}}` | `{{EVIDENCE}}` |

Missing evidence is not a pass. A plausible explanation is not operating evidence.

## Disclosure record

| Date | Evidence disclosed | Recipient and authority | Purpose | Redactions | Transfer method | Approved by | Return/deletion requirement |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `{{DATE}}` | `{{EVIDENCE_IDS}}` | `{{RECIPIENT_AUTHORITY}}` | `{{PURPOSE}}` | `{{DETAILS}}` | `{{METHOD}}` | `{{OWNER}}` | `{{RULE}}` |
