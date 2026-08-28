# Contributing

## Before starting

Open or select an issue. State the problem, intended outcome, acceptance criteria, affected controls, and evidence required. Read [`AGENTS.md`](AGENTS.md) and the README for the directory being changed.

## Development

- Use Node.js 22 or later for the reference tooling.
- Keep the assessment framework applicable to any programming language or hosting platform.
- Do not include private project examples or data.
- Add tests for behaviour and regression fixes.
- Update the templates and documentation together when a control changes.

Run the complete gate before requesting review:

```bash
npm run check
```

## Pull requests

Pull requests must explain the outcome, compatibility impact, security implications, verification evidence, documentation changes, and known limitations. A passing structural audit does not replace substantive review.
