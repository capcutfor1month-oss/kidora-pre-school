# Agent Operating Rules

These rules apply to every AI agent working in this repository.

## Product authority

1. The founder owns all product decisions.
2. Do not choose product scope, target users, workflows, pricing, architecture, or quality trade-offs without explicit approval.
3. Do not begin application implementation until an approved change specification exists.

## Source of truth

1. GitHub repository files are the durable source of truth.
2. Read `docs/INDEX.md` before creating any Markdown document.
3. Update an existing canonical document instead of creating a duplicate.
4. Git history is the version history. Never create filenames containing `final`, `latest`, `updated`, `new`, `v2`, `v3`, or numbered copies to represent versions.
5. Register every genuinely new project document in `docs/INDEX.md`.

## Change workflow

1. Work from one named change folder at a time.
2. Read its proposal, specification, design, tasks, and available reports.
3. Stay within approved scope.
4. Stop and report when a product decision is missing.
5. One agent writes to a branch at a time.
6. Never modify production directly.
7. Never access or expose secrets.

## Evidence

Every report must state:

- Files inspected
- Files changed
- Commands executed
- Checks passed
- Checks failed
- Remaining uncertainty
- Recommended next action

Never claim success without evidence.
