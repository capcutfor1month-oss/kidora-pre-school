# Documentation Index

This is the canonical registry of project documents.

## Permanent documents

| File | Purpose | Status |
|---|---|---|
| `README.md` | Repository introduction and current setup boundary | Active |
| `AGENTS.md` | Rules shared by all agents | Active |
| `CLAUDE.md` | Claude-specific implementation rules | Active |
| `GEMINI.md` | Gemini CLI investigation rules | Active |
| `docs/PRODUCT.md` | Product definition and target user | Not started |
| `docs/ARCHITECTURE.md` | Approved current architecture | Not selected |
| `docs/CURRENT.md` | Concise current project state and next action | Active |
| `docs/DECISIONS.md` | Durable approved decisions | Active |
| `docs/PIPELINE.md` | Complete end-to-end development workflow | Active |
| `docs/TOOLING.md` | Full tool registry, roles, and activation conditions | Active |
| `docs/TESTING.md` | Testing layers and evidence requirements | Draft |
| `docs/RELEASE.md` | Release-readiness checklist | Draft |

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
