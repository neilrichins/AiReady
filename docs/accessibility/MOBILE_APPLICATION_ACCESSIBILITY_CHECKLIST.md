# Mobile application accessibility verification checklist

Use this optional record for native mobile applications and the native parts of
hybrid applications. Evaluate web views and hosted web content with the
[website checklist](WEBSITE_ACCESSIBILITY_CHECKLIST.md) as well as evaluating
the complete application experience here.

The World Wide Web Consortium (W3C) states that it has no separate normative
mobile accessibility standard. Use the applicable legal, procurement,
contractual, and platform requirements together with:

- the normative [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) where adopted or applicable;
- informative [Guidance on Applying WCAG 2 to Non-Web Information and Communications Technologies (WCAG2ICT)](https://www.w3.org/TR/wcag2ict-22/) interpretations for non-web software; and
- current [W3C mobile accessibility guidance](https://www.w3.org/WAI/standards-guidelines/mobile/), noting the maturity stated by each linked document.

This checklist does not create a native-software WCAG conformance claim or
replace platform-specific testing, disabled-user evaluation, or legal review.

## Evaluation identity and authority

| Field | Value |
| --- | --- |
| Application | `{{NAME_AND_STORE_OR_IDENTIFIER}}` |
| Exact candidate | `{{COMMITS_BUILD_VERSION_PACKAGE_AND_DIGEST}}` |
| Platforms/builds | `{{OPERATING_SYSTEMS_VERSIONS_AND_BUILD_IDS}}` |
| Distribution channel | `{{DEVELOPMENT_BETA_ENTERPRISE_STORE_OR_OTHER}}` |
| Adopted standards and target | `{{LEGAL_CONTRACTUAL_PLATFORM_AND_WCAG_TARGETS}}` |
| Applicable jurisdictions/contracts | `{{LINK_TO_APPROVED_REGISTER}}` |
| Accessibility evaluator | `{{QUALIFIED_PERSON_OR_TEAM}}` |
| Legal/compliance reviewer | `{{OWNER_OR_NOT_APPLICABLE_WITH_REASON}}` |
| Evaluation dates | `{{DATES}}` |
| Evidence archive | `{{LOCATION}}` |
| Re-evaluation trigger | `{{CHANGE_RELEASE_PLATFORM_OR_DATE}}` |

AI and device authority, including account creation, authentication, test data,
notifications, camera, microphone, contacts, location, biometrics, payments,
external communication, and production services: `{{AUTHORITY_AND_STOP_CONDITIONS}}`.

## 1. Select requirements and define scope

- [ ] Identify whether the application is native, hybrid, cross-platform, a progressive web application, or a wrapper, and map each surface to the correct checklist and standard.
- [ ] Record the authoritative legal, policy, procurement, contractual, and platform requirements; do not infer that WCAG2ICT is law or a normative standard.
- [ ] Define supported devices, operating-system versions, screen sizes, orientations, form factors, display densities, input devices, assistive technologies, languages, themes, text settings, and distribution channels.
- [ ] Inventory native screens, web views, custom-rendered controls, documents, media, notifications, widgets, extensions, share sheets, authentication providers, payment providers, maps, charts, augmented reality, and third-party software development kits.
- [ ] Identify complete processes including onboarding, permissions, sign-in, recovery, core tasks, search, purchase/payment, consent, settings, help, account deletion, and cancellation.
- [ ] Record exclusions or claimed exceptions with authoritative basis, accessible alternative, affected users, approver, expiry, and review trigger.
- [ ] Define required accessibility information for app stores, product documentation, support, procurement, accessibility statements, or conformance reports.

## 2. Device and state sample

| Platform/device class | Operating system/build | Application build | Assistive technology/input | Display/text settings | Journeys/states | Sample rationale |
| --- | --- | --- | --- | --- | --- | --- |
| `{{PLATFORM_DEVICE}}` | `{{VERSION}}` | `{{BUILD}}` | `{{TECHNOLOGY_VERSION}}` | `{{SETTINGS}}` | `{{SCOPE}}` | `{{RATIONALE}}` |

Include low and high supported versions, small and large displays, portrait and
landscape, light and dark themes, increased contrast, reduced motion, bold text,
large text, display zoom, colour filters where relevant, external keyboards,
switch access, voice control, screen readers, magnification, and representative
device performance.

Sample limitations and unsupported combinations: `{{LIMITATIONS_RISK_AND_OWNER}}`.

## 3. Platform accessibility semantics

- [ ] Every meaningful element exposes the correct accessible name, role/control type, value, state, description, grouping, position, and available action through the platform accessibility application programming interface.
- [ ] Decorative, duplicate, hidden, off-screen, inactive, and background content is excluded from accessibility navigation without hiding meaningful content.
- [ ] Reading and navigation order follows meaning and updates correctly when screens, dialogs, sheets, menus, tabs, lists, carousels, or dynamic regions change.
- [ ] Native controls and platform conventions are preferred; custom controls reproduce all required semantics, states, actions, keyboard behaviour, focus behaviour, and visual states.
- [ ] Component labels match visible labels sufficiently for speech input and expose useful hints without duplicating or overwhelming the accessible name.
- [ ] Headings, regions/groups, lists, tables, form relationships, errors, status changes, progress, selection, expanded/collapsed state, and modal boundaries are programmatically determinable.
- [ ] Changes are announced with appropriate timing and priority without repeated, missing, stale, or disruptive announcements.
- [ ] Accessibility identifiers used by automated tests do not replace user-facing accessible names or expose internal/private information.

## 4. Screen reader journeys

- [ ] Complete every critical journey using each required platform screen reader without sighted tapping.
- [ ] Confirm logical swipe, explore-by-touch, rotor or equivalent navigation, headings, controls, links, lists, landmarks/groups, and adjustable/custom actions.
- [ ] Confirm initial focus, focus after navigation, focus after updates, dialog focus containment, dismissal, and restoration.
- [ ] Confirm typed, selected, validated, saved, loading, successful, warning, failed, offline, expired, and retry states are announced accurately.
- [ ] Confirm gestures required by the application do not conflict with screen-reader gestures and have accessible alternatives.
- [ ] Confirm virtual keyboard, hardware keyboard, dictation, autofill, password managers, one-time codes, and secure-entry fields remain understandable and operable.
- [ ] Confirm charts, maps, canvases, images, icons, badges, custom drawing, and spatial interfaces provide equivalent information and actions.
- [ ] Confirm notifications, widgets, deep links, share flows, external browser/payment/authentication returns, and operating-system permission dialogs preserve context.

## 5. Alternative input, keyboard, switch, and voice control

- [ ] Every function is operable through required external keyboard or equivalent input without touch-only actions.
- [ ] Focus order, visible focus, shortcut conflicts, escape/back behaviour, tab groups, directional navigation, and focus traps are verified.
- [ ] Switch scanning reaches controls in a meaningful order, exposes useful groups and actions, and does not require impractical repeated navigation.
- [ ] Voice-control users can identify and activate controls using visible labels or stable platform commands; duplicate labels are disambiguated.
- [ ] Multi-point, path-based, drag, swipe, long-press, motion, device-manipulation, or timed gestures have simple alternatives where required.
- [ ] Touch activation supports cancellation and does not trigger destructive action on initial contact where cancellation is required.
- [ ] Target size and spacing meet the adopted standard and platform requirement for every interactive state and screen density.

## 6. Visual, text, orientation, motion, and sensory checks

- [ ] Text and essential controls remain available at every required system text-size and display-zoom setting without clipping, overlap, truncation, loss of content, or blocked action.
- [ ] Layout supports required orientations unless a specific orientation is essential and documented.
- [ ] Text contrast, non-text contrast, focus/selection indicators, disabled states, charts, maps, icons, and custom controls meet the adopted requirements in every supported theme and state.
- [ ] Colour, shape, position, vibration, sound, or motion is not the only means of communicating information or an action.
- [ ] Reduced-motion and animation settings are respected; non-essential motion, parallax, auto-advancing content, and animated transitions can be avoided or controlled as required.
- [ ] Flashing content remains below the applicable threshold.
- [ ] Magnification, screen zoom, panning, and reading controls do not hide essential context or create inaccessible overlays.
- [ ] Content remains usable under bright-light, low-light, one-handed, interrupted, noisy, and silent contexts where relevant to the product risk.

## 7. Content, forms, authentication, media, and errors

- [ ] Screen titles, headings, labels, instructions, help, and language are descriptive, consistent, localised, and understandable.
- [ ] Inputs expose purpose, format, required state, current value, and errors; errors are linked to fields and include useful correction guidance.
- [ ] Repeated information can be selected or populated without unnecessary re-entry where required.
- [ ] Legal, financial, data-changing, or destructive submissions can be reviewed, corrected, confirmed, or reversed as required.
- [ ] Authentication supports password managers, paste, one-time codes, biometric alternatives, recovery, and accessible challenge methods; no user is forced to solve an inaccessible cognitive test.
- [ ] Time limits, session expiry, background/foreground transitions, interruptions, calls, permission changes, and network loss preserve data and support accessible recovery.
- [ ] Captions, transcripts, audio description, playback controls, volume, routing, and media alternatives work with platform accessibility features.
- [ ] Help, accessibility feedback, privacy, consent, support, account deletion, and emergency or safety information are accessible.

## 8. Hybrid, web, document, and external boundaries

- [ ] Test each web view with the [website checklist](WEBSITE_ACCESSIBILITY_CHECKLIST.md), including zoom/reflow, semantics, keyboard, focus, and browser-engine behaviour.
- [ ] Verify focus and announcements when moving between native and web content.
- [ ] Test downloaded, generated, previewed, shared, printed, or opened documents in the actual supported viewers.
- [ ] Test identity, payment, maps, media, chat, support, and other third-party flows across the complete journey; supplier claims alone are insufficient.
- [ ] Verify deep links, universal/app links, external-browser transitions, in-app browser transitions, and returns from other applications.
- [ ] Record inaccessible third-party dependencies, contractual remediation, accessible alternatives, monitoring, and release effect.

## 9. Automated, source, and accessibility-tree checks

| Check | Scope | Tool/version or method | Command/configuration | Result | Evidence | Manual follow-up |
| --- | --- | --- | --- | --- | --- | --- |
| Platform accessibility scanner/linter | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Source and component-rule inspection | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Runtime accessibility-tree inspection | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Contrast, target-size, text-scale, and clipping candidates | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |
| Automated critical-journey regression | `{{SCOPE}}` | `{{METHOD}}` | `{{DETAILS}}` | `{{RESULT}}` | `{{EVIDENCE}}` | `{{FOLLOW_UP}}` |

Do not mark runtime semantics, reading order, usable labels, gesture
alternatives, screen-reader output, switch access, voice control, usability, or
legal compliance as passed from source inspection or automation alone.

## 10. WCAG and adopted-standard results

- [ ] Complete the [WCAG 2.2 A and AA results matrix](WCAG_2_2_AA_SUCCESS_CRITERIA.md) when WCAG is an adopted requirement or benchmark.
- [ ] For each WCAG criterion, record the exact WCAG2ICT or mobile interpretation used, the adopted normative source, applicability, method, result, and evidence.
- [ ] Complete every additional clause required by the adopted software, hardware, telecommunications, documentation, support, procurement, or national standard.
- [ ] Do not describe the native application as WCAG conformant unless the governing requirement and qualified reviewer permit that exact claim.

## 11. Disabled-user evaluation

| Participant coverage | Critical journey/context | Method | Finding/outcome | Evidence | Owner/follow-up |
| --- | --- | --- | --- | --- | --- |
| `{{DISABILITY_ACCESS_NEED_OR_CONTEXT}}` | `{{JOURNEY}}` | `{{METHOD}}` | `{{OUTCOME}}` | `{{EVIDENCE}}` | `{{OWNER_ACTION}}` |

- [ ] Include people with disabilities and access needs relevant to the product, risk, and supported platforms.
- [ ] Provide accessible recruitment, consent, test materials, environment, communication, compensation, privacy, and withdrawal processes.
- [ ] Keep observed usability outcomes distinct from standards conformance while treating barriers as product evidence requiring ownership.

## 12. Defects and regression

| ID | Requirement/clause | Barrier and affected users | Platforms/scope | Severity | Remediation | Owner/due | Retest evidence | Release effect |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `{{ID}}` | `{{REQUIREMENT}}` | `{{BARRIER}}` | `{{SCOPE}}` | `{{SEVERITY}}` | `{{ACTION}}` | `{{OWNER_DATE}}` | `{{EVIDENCE}}` | `{{BLOCK_CONDITION_ALLOW}}` |

- [ ] Fix shared component, design-system, cross-platform framework, content-process, or software development kit causes rather than sampled screens only.
- [ ] Retest affected devices, orientations, text sizes, themes, assistive technologies, inputs, states, journeys, web views, and integrations.
- [ ] Re-run store/pre-release checks against the exact signed package proposed for distribution.

## 13. Candidate and release decision

| Decision input | Result/evidence |
| --- | --- |
| Exact signed candidate matches evaluated build | `{{RESULT}}` |
| Device, platform, state, and journey sample approved | `{{RESULT}}` |
| WCAG/adopted-standard clause results | `{{RESULT_AND_LINK}}` |
| Screen-reader and alternative-input verification | `{{RESULT_AND_LINK}}` |
| Text, visual, orientation, motion, and sensory verification | `{{RESULT_AND_LINK}}` |
| Disabled-user evaluation | `{{RESULT_AND_LINK_OR_LIMITATION}}` |
| Jurisdiction, store, statement, support, and reporting obligations | `{{RESULT_AND_LINK}}` |
| Open defects, exceptions, and accepted risks | `{{RESULT_AND_LINK}}` |
| Post-release monitoring and platform-update plan | `{{PLAN_AND_OWNER}}` |

Accessibility decision: `{{PASS_FAIL_PARTIAL_DEFERRED_WITH_CLAIMS_BOUNDARY}}`.

Approved public, store, procurement, or contractual wording: `{{EXACT_WORDING_OR_NONE}}`.

| Role | Name | Decision | Date | Scope/conditions |
| --- | --- | --- | --- | --- |
| Accessibility specialist | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{SCOPE}}` |
| Product/content owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{SCOPE}}` |
| Mobile engineering/quality owner | `{{NAME}}` | `{{APPROVE_REJECT_DEFER}}` | `{{DATE}}` | `{{SCOPE}}` |
| Legal/compliance owner | `{{NAME_OR_NOT_APPLICABLE}}` | `{{APPROVE_REJECT_NOT_APPLICABLE}}` | `{{DATE}}` | `{{SCOPE}}` |
| Release authority | `{{NAME}}` | `{{APPROVE_REJECT}}` | `{{DATE}}` | `{{SCOPE}}` |
