# Command-line interface

[`aiready.js`](aiready.js) provides three commands:

- `init` copies the adoption starter into an existing target directory without overwriting files;
- `audit` performs project structural checks and supports JSON output; and
- `framework-check` validates this framework repository.

The command-line interface delegates substantive work to `lib/` and returns a non-zero status for validation failures.
