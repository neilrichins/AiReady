# Optional accessibility checklists

These Markdown records help a project plan and evidence accessibility
verification for websites and mobile applications. They are optional examples,
not a required directory structure. Adapt their controls into an existing
requirements, test-management, accessibility, procurement, legal, or release
system when that system is already authoritative.

## Choose the applicable records

| Product or decision | Suggested record |
| --- | --- |
| Website, web application, responsive web experience, or mobile website | [Website accessibility checklist](WEBSITE_ACCESSIBILITY_CHECKLIST.md) |
| Native mobile application or native parts of a hybrid application | [Mobile application accessibility checklist](MOBILE_APPLICATION_ACCESSIBILITY_CHECKLIST.md) |
| Web content embedded in a native application | Website checklist for the web content and mobile checklist for the complete application |
| Web Content Accessibility Guidelines (WCAG) 2.2 Level A and AA results | [WCAG 2.2 A and AA results matrix](WCAG_2_2_AA_SUCCESS_CRITERIA.md) |
| Country, region, sector, procurement, or contractual obligations | [Jurisdiction accessibility checklist](JURISDICTION_ACCESSIBILITY_CHECKLIST.md) |

The [accessibility and inclusive-design addendum](../product/ACCESSIBILITY_AND_INCLUSIVE_DESIGN_ADDENDUM_TEMPLATE.md) defines product requirements and inclusive-design evidence. These checklists add surface-specific verification and jurisdiction selection; they do not replace that product work.

## Standards basis

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) is the normative W3C Recommendation used by the web checklist. Level AA requires every applicable Level A and AA success criterion and every WCAG conformance requirement to be satisfied.
- [How to Meet WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/) and [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) are informative implementation and evaluation support; they do not add normative requirements.
- [Guidance on Applying WCAG 2 to Non-Web Information and Communications Technologies (WCAG2ICT)](https://www.w3.org/TR/wcag2ict-22/) provides informative guidance for applying WCAG 2.0, 2.1, and 2.2 to non-web documents and software. It does not itself set requirements.
- [W3C mobile accessibility guidance](https://www.w3.org/WAI/standards-guidelines/mobile/) explains that W3C does not publish a separate normative mobile accessibility standard and points to WCAG, WCAG2ICT, and current mobile guidance.
- [WCAG-EM](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/) provides a structured evaluation approach: define scope, explore the product, select a representative sample, evaluate it, and report findings. Confirm whether the project is using the completed WCAG-EM 1.0 Note or a later draft before treating a methodology version as authoritative.

## Claims boundary

These records do not certify compliance or conformance. A completed checklist
does not prove that:

- every applicable requirement was selected correctly;
- the sample represents the complete product;
- automated results are correct or complete;
- the product is usable by people with disabilities;
- a native application conforms to WCAG as though it were a website;
- a country-specific law, exception, deadline, or standard applies; or
- the exact released product matches the evaluated candidate.

[W3C evaluation guidance](https://www.w3.org/WAI/test-evaluate/) states that no
tool alone can determine whether a site meets accessibility standards and that
knowledgeable human evaluation is required. Artificial intelligence (AI) can
help inventory surfaces, inspect source and accessibility trees, run authorised
tools, propose mappings, identify suspected failures, and organise evidence.
It cannot approve its own findings, decide legal applicability, replace disabled
user research, or convert an unverified observation into a pass.

## Required use rules

1. Name the exact product, version, commit, build, platforms, environments, standard, conformance level, jurisdictions, evaluator, and evaluation date.
2. Define the complete product scope before selecting a representative sample. Include critical journeys, templates, states, breakpoints, languages, documents, media, authentication, errors, settings, and third-party content.
3. Record every applicable success criterion or adopted standard clause individually. `NOT APPLICABLE` requires a rationale and reviewer.
4. Combine automation with manual expert, keyboard or alternative-input, assistive-technology, responsive or device, content, and user-journey evaluation as applicable.
5. Preserve exact commands, tool and assistive-technology versions, test data, environment, result, failures, skipped checks, reruns, limitations, screenshots or recordings, and defect links without exposing sensitive data.
6. Treat accessibility overlays, generated alternative text, generated captions, automated code changes, and AI conclusions as untrusted until verified.
7. Re-evaluate affected scope after changes to code, content, design, dependencies, browser or operating-system support, assistive technology, legal requirements, or the released candidate.
8. Bind any conformance or legal claim to accountable specialist and legal review and to the exact evidence that supports it.

## Result states

Use explicit states rather than checked boxes alone:

- `NOT_TESTED`: no current result;
- `PASS`: the stated method and evidence support the requirement for the exact scope;
- `FAIL`: at least one applicable failure remains;
- `CANNOT_DETERMINE`: the evaluator, environment, method, or evidence is insufficient;
- `NOT_APPLICABLE`: the requirement does not apply, with recorded rationale and approval; and
- `STALE`: prior evidence no longer applies to the current candidate or environment.

For WCAG conformance, one applicable failed or undetermined Level A or AA
success criterion prevents a Level AA conformance claim for the affected page
or full scope. An average score or percentage does not change that rule.
