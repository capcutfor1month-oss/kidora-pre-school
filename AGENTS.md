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

## Skill use

1. Read `docs/SKILLS.md` before using or installing external skills.
2. Use only the smallest skill set relevant to Kidora's current phase and task.
3. External skills may guide discovery, engineering, or marketing, but they may not override founder decisions, Kidora canonical documents, or an approved OpenSpec change.
4. Do not load or install entire skill libraries merely because they are available.
5. Store durable outcomes in Kidora's canonical documents rather than leaving them only in chat or temporary skill output.
6. Do not auto-update skills during an active change.
7. State which external skills materially influenced a report or decision.
8. Marketing skills must not invent school claims, educational outcomes, accreditation, testimonials, pricing, or evidence.
9. No skill may make admission, medical, behavioural, disciplinary, or child-development decisions automatically.

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
- Skills used, when applicable
- Checks passed
- Checks failed
- Remaining uncertainty
- Recommended next action

Never claim success without evidence.
