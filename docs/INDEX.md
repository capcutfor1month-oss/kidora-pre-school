# Documentation Index

This is the canonical registry of Kidora project documents.

## Permanent documents

| File | Purpose | Status |
|---|---|---|
| `README.md` | Repository introduction and current setup boundary | Active |
| `AGENTS.md` | Rules shared by all agents, including skill governance | Active |
| `CLAUDE.md` | Claude-specific implementation rules | Active |
| `GEMINI.md` | Gemini CLI investigation rules | Active |
| `docs/PRODUCT.md` | Proposed product definition and target users | Initial direction recorded |
| `docs/ROADMAP.md` | Initial phased product roadmap | Proposed, not locked |
| `docs/ARCHITECTURE.md` | Approved current architecture | Not selected |
| `docs/CURRENT.md` | Concise current project state and next action | Active |
| `docs/DECISIONS.md` | Durable approved decisions | Active |
| `docs/PIPELINE.md` | Complete end-to-end development workflow | Active |
| `docs/TOOLING.md` | Full tool and skill-source registry | Active |
| `docs/SKILLS.md` | Kidora phase-based skill activation and safety rules | Active |
| `docs/TESTING.md` | Testing layers and evidence requirements | Draft |
| `docs/RELEASE.md` | Release-readiness checklist | Draft |

## Approved external skill sources

- `phuryn/pm-skills`
- `mattpocock/skills`
- `coreyhaines31/marketingskills`

The selected current-phase skills and deferred capabilities are recorded in `docs/SKILLS.md`.

## Common pipeline source

The canonical reusable pipeline lives in:

`capcutfor1month-oss/project-Pipline`

The local `universal-pipeline/README.md` is only a reference to that dedicated repository and must not become a competing source.

## Change documents

Every meaningful feature or repair will live under:

`openspec/changes/<change-name>/`

Use the templates in `templates/change/`.

## Documentation rules

- One canonical file per purpose.
- Update rather than duplicate.
- Git history stores prior versions.
- Temporary logs and recordings are not permanent documentation.
- Planned tools must be recorded in `docs/TOOLING.md` even when they cannot yet be activated.
- Skill activation and safety rules belong in `docs/SKILLS.md`.
- Project decisions belong in Kidora's repository; common workflow rules belong in `project-Pipline`.
