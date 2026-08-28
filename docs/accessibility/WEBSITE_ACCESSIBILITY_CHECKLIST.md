# Website accessibility verification checklist

Use this optional record for websites, responsive sites, web applications, and
web content embedded in another product. It supports evaluation against the
[Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
and the project-specific obligations selected in the
[jurisdiction checklist](JURISDICTION_ACCESSIBILITY_CHECKLIST.md).

This checklist is a planning and evidence record. It does not itself establish
WCAG conformance, legal compliance, usability, or release readiness.

## Evaluation identity and authority

| Field | Value |
| --- | --- |
| Product/site | `{{NAME_AND_URL_OR_IDENTIFIER}}` |
| Exact candidate | `{{COMMITS_BUILD_ARTEFACTS_AND_DIGESTS}}` |
| Evaluation goal | `{{DEVELOPMENT_CHECK_RELEASE_AUDIT_PROCUREMENT_MONITORING_OR_OTHER}}` |
| Standard and target | `{{WCAG_VERSION_AND_LEVEL}}` |
| Applicable jurisdictions/contracts | `{{LINK_TO_APPROVED_REGISTER}}` |
| Scope owner | `{{OWNER}}` |
| Accessibility evaluator | `{{QUALIFIED_PERSON_OR_TEAM}}` |
| Legal/compliance reviewer | `{{OWNER_OR_NOT_APPLICABLE_WITH_REASON}}` |
| Evaluation dates | `{{DATES}}` |
| Evidence archive | `{{LOCATION}}` |
| Re-evaluation trigger | `{{CHANGE_RELEASE_OR_DATE}}` |

AI authority for browsing, authentication, form submission, account creation,
external communication, data entry, purchases, destructive actions, and
production access: `{{AUTHORITY_AND_STOP_CONDITIONS}}`.

## 1. Define the conformance scope

- [ ] Record the exact domains, subdomains, web applications, embedded services, documents, media, languages, and authenticated areas included.
- [ ] Identify content and functionality supplied by vendors, users, advertisements, plugins, embedded frames, payment providers, identity providers, and other third parties.
- [ ] Record exclusions and exemptions with their authoritative basis, decision owner, affected users, accessible alternative, expiry, and review trigger.
- [ ] Select WCAG version and level from the actual legal, policy, procurement, or product requirement; do not silently substitute a newer or older version.
- [ ] Define the accessibility-support baseline: browsers, operating systems, assistive technologies, input modes, viewport sizes, zoom and text settings, languages, and versions.
- [ ] Identify complete processes such as registration, authentication, search, application, purchase, payment, consent, account management, support, and cancellation.
- [ ] Confirm whether an accessibility statement, feedback mechanism, enforcement route, monitoring report, or remediation plan is required.

Scope decision and evidence: `{{DECISION_LINK_OR_LOCATION}}`.

## 2. Explore the website and select the sample

Follow the applicable version of the [Website Accessibility Conformance
Evaluation Methodology (WCAG-EM)](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/)
or record the alternative methodology and why it is appropriate.

### Surface inventory

| Surface type | Instances | Variations/states | Technology/template | Criticality | Sampled | Evidence |
| --- | ---: | --- | --- | --- | --- | --- |
| Page/layout template | `{{COUNT}}` | `{{STATES}}` | `{{TECHNOLOGY}}` | `{{LEVEL}}` | `{{YES_NO}}` | `{{EVIDENCE}}` |
| Component/widget | `{{COUNT}}` | `{{STATES}}` | `{{TECHNOLOGY}}` | `{{LEVEL}}` | `{{YES_NO}}` | `{{EVIDENCE}}` |
| Complete process/journey | `{{COUNT}}` | `{{STATES}}` | `{{TECHNOLOGY}}` | `{{LEVEL}}` | `{{YES_NO}}` | `{{EVIDENCE}}` |
| Document/media format | `{{COUNT}}` | `{{STATES}}` | `{{FORMAT}}` | `{{LEVEL}}` | `{{YES_NO}}` | `{{EVIDENCE}}` |
| Third-party/embedded content | `{{COUNT}}` | `{{STATES}}` | `{{PROVIDER}}` | `{{LEVEL}}` | `{{YES_NO}}` | `{{EVIDENCE}}` |

### Required sample coverage

- [ ] Home, landing, navigation, search, sitemap, help, contact, accessibility, privacy, and error pages as applicable.
- [ ] Every distinct template, component family, content type, document format, media type, and authoring source.
- [ ] Every critical and legally material process from entry through confirmation and recovery.
- [ ] Default, loading, empty, success, warning, validation, error, expired-session, unavailable, permission-denied, offline, and recovery states.
- [ ] Responsive layouts, orientation changes, browser zoom, text-only enlargement, high contrast or forced colours, reduced motion, and relevant colour schemes.
- [ ] Anonymous, authenticated, privileged, new, returning, suspended, and other materially different user states.
- [ ] Supported languages, bidirectional text, localisation, long text, user-generated content, and content with missing or malformed data.
- [ ] Structured representative sample and random sample, or a documented reason why complete evaluation is used.

Sample limitation and unsampled risk: `{{LIMITATIONS_RISK_AND_OWNER}}`.

## 3. Automated and source-assisted checks

Automation may identify candidates and deterministic failures. It cannot mark a
success criterion `PASS` unless the defined method actually establishes the
criterion for the recorded scope.

| Check | Scope | Tool/version or method | Command/configuration | Result | Evidence | Manual follow-up |
| --- | --- | --- | --- | --- | --- | --- |
| Markup, document structure, and programmatic semantics | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Accessible names, roles, values, states, relationships, and status messages | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Colour and non-text contrast | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Images and non-text alternatives | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Forms, labels, instructions, errors, and autocomplete purpose | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Page titles, language, headings, landmarks, links, and tables | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Media alternatives and metadata | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Focusable elements, target sizes, animation, timing, and flashing candidates | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Accessibility-tree and browser-console inspection | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |

## 4. Manual interaction and visual checks

- [ ] Operate every sampled function using keyboard alone, including reverse navigation, menus, dialogs, popovers, grids, drag alternatives, media controls, and escape routes.
- [ ] Confirm focus is visible, ordered, not trapped, not unexpectedly moved, not obscured by sticky content, and restored appropriately after transient interfaces close.
- [ ] Confirm skip mechanisms, landmarks, headings, titles, link purposes, labels, instructions, and repeated navigation support efficient orientation.
- [ ] Verify information, state, errors, selection, required fields, and actions do not rely on colour, shape, position, sound, hover, or gesture alone.
- [ ] Verify text contrast, non-text contrast, text resizing, text spacing, reflow, responsive breakpoints, orientation, content on hover/focus, and no loss or overlap.
- [ ] Verify timing can be adjusted where required and moving, blinking, scrolling, auto-updating, flashing, animation, and motion can be paused or avoided as required.
- [ ] Verify pointer gestures, cancellation, dragging alternatives, motion alternatives, visible-label matching, and minimum target size.
- [ ] Verify errors are identified in text, suggestions are useful, destructive or legally significant submissions are reviewable/reversible, redundant entry is avoided, and authentication does not depend on prohibited cognitive tests.
- [ ] Verify captions, transcripts, audio description, player controls, and alternative media match the content and remain usable.
- [ ] Verify printable, downloadable, generated, and uploaded documents in their actual user agents rather than assuming the containing page makes them accessible.
- [ ] Verify help, accessibility feedback, support, consent, privacy, security, and timeout recovery are reachable and accessible.

## 5. Assistive-technology and alternative-input journeys

| Journey | Platform/browser | Assistive technology/input and version | Expected outcome | Result | Evidence/defect | Evaluator |
| --- | --- | --- | --- | --- | --- | --- |
| `{{CRITICAL_JOURNEY}}` | `{{ENVIRONMENT}}` | Screen reader `{{VERSION}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| `{{CRITICAL_JOURNEY}}` | `{{ENVIRONMENT}}` | Screen magnification/zoom `{{VERSION}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| `{{CRITICAL_JOURNEY}}` | `{{ENVIRONMENT}}` | Keyboard/switch input `{{VERSION}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| `{{CRITICAL_JOURNEY}}` | `{{ENVIRONMENT}}` | Voice control/speech input `{{VERSION}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER}}` |
| `{{CRITICAL_JOURNEY}}` | `{{ENVIRONMENT}}` | High contrast/forced colours `{{VERSION}}` | `{{EXPECTED}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{OWNER}}` |

Select combinations from actual users, product analytics, support commitments,
procurement requirements, and accessibility-support research. A pass in one
browser and assistive-technology combination does not establish support in all
combinations.

## 6. WCAG success-criterion and conformance results

- [ ] Complete a candidate-specific copy of the [WCAG 2.2 A and AA results matrix](WCAG_2_2_AA_SUCCESS_CRITERIA.md).
- [ ] Record a method, result, evidence, evaluator, date, and defect or `NOT APPLICABLE` rationale for every criterion.
- [ ] Verify all five WCAG conformance requirements, including full pages, complete processes, accessibility-supported technologies, and non-interference.
- [ ] Treat every `FAIL`, `CANNOT_DETERMINE`, `NOT_TESTED`, or `STALE` applicable Level A or AA result as blocking a Level AA conformance claim for the affected scope.
- [ ] Do not use a percentage, average, issue count, severity total, automated score, or AI confidence score as a conformance result.

## 7. Disabled-user and content evaluation

- [ ] Involve people with relevant disabilities in formative or summative evaluation, or record why it was not performed and what evidence remains missing.
- [ ] Evaluate whether critical journeys are understandable, efficient, recoverable, and usable—not merely technically exposed to assistive technology.
- [ ] Review plain language, instructions, labels, errors, help, cognitive load, consistency, localisation, and alternative formats with qualified owners.
- [ ] Keep user findings distinct from WCAG criterion results while linking both to affected requirements and defects.

## 8. Defects, remediation, and regression

| ID | Requirement/criterion | Barrier and affected users | Scope/prevalence | Severity | Remediation | Owner/due | Retest evidence | Release effect |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{REQUIREMENT}}` | `{{BARRIER}}` | `{{SCOPE}}` | `{{SEVERITY}}` | `{{ACTION}}` | `{{OWNER_DATE}}` | `{{EVIDENCE}}` | `{{BLOCK_CONDITION_ALLOW}}` |

- [ ] Fix shared-source, component, template, design-system, content-process, or authoring-tool causes rather than patching sampled instances only.
- [ ] Add deterministic regression checks where they can reliably detect recurrence.
- [ ] Re-evaluate every affected criterion, state, template, journey, technology combination, and legal disclosure after remediation.
- [ ] Preserve unresolved barriers, workarounds, limitations, risk decisions, expiry, and accessible alternatives without presenting them as passes.

## 9. Candidate and release decision

| Decision input | Result/evidence |
| --- | --- |
| Exact evaluated candidate matches proposed release | `{{RESULT}}` |
| Complete scope and sampling approved | `{{RESULT}}` |
| WCAG A and AA matrix | `{{RESULT_AND_LINK}}` |
| Manual and assistive-technology verification | `{{RESULT_AND_LINK}}` |
| Disabled-user evaluation | `{{RESULT_AND_LINK_OR_LIMITATION}}` |
| Jurisdiction, statement, feedback, and reporting obligations | `{{RESULT_AND_LINK}}` |
| Open defects, exceptions, and accepted risks | `{{RESULT_AND_LINK}}` |
| Post-release accessibility verification and monitoring | `{{PLAN_AND_OWNER}}` |

Accessibility decision: `{{PASS_FAIL_PARTIAL_DEFERRED_WITH_CLAIMS_BOUNDARY}}`.

Approved public or contractual wording: `{{EXACT_WORDING_OR_NONE}}`.

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| Accessibility specialist | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{SCOPE}}` |
| Product/content owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{SCOPE}}` |
| Engineering/quality owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{SCOPE}}` |
| Legal/compliance owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` | `{{SCOPE}}` |
| Release authority | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{SCOPE}}` |
