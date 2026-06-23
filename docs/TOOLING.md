# Tooling and Skills Registry

This registry records every planned tool and approved skill source. A tool or skill library may be documented before it can be activated.

## Status meanings

- **Active:** Usable now
- **Ready to configure:** Can be installed without product architecture
- **Approved source:** Available for selective use when its stage is active
- **Blocked by architecture:** Requires an approved application stack
- **Blocked by working app:** Requires actual screens or runtime behaviour
- **Blocked by real users:** Requires production usage
- **Optional:** Add only when a real need appears

| Tool or system | Role | Current status | Activation condition | Primary owner |
|---|---|---|---|---|
| GitHub repository | Durable source of truth | Active | Already active | Founder + ChatGPT |
| Canonical Markdown documents | Product and project memory | Active | Already active | ChatGPT + Founder |
| OpenSpec | Change specification and scope | Ready to configure | Local repository cloned | ChatGPT + Founder |
| Gemini CLI | Repository investigation and verification | Ready to configure | Local repository cloned | Gemini CLI |
| OpenCode | Low-cost alternative investigation worker | Ready to configure | Local repository cloned and model selected | OpenCode |
| Claude Code | Primary production-code implementation | Ready to configure | Local repository cloned | Claude |
| Codex | Independent implementation audit | Ready to configure | A change and diff exist | Codex |
| GitHub Actions | Automated repository checks | Active for pipeline documents | Application checks added after stack selection | CI |
| Playwright | Repeatable browser testing | Blocked by architecture | Web application stack and runnable app exist | CI / QA |
| Antigravity | Exploratory browser and UX verification | Blocked by working app | Preview or local app exists | Antigravity |
| `phuryn/pm-skills` | Product discovery, strategy, execution, research, metrics, and launch frameworks | Approved source | Selective use during discovery, strategy, specification, metrics, or launch | Founder + ChatGPT |
| `mattpocock/skills` | Clarification, shared language, TDD, debugging, codebase design, Git guardrails, and handoffs | Approved source | Selective use during discovery, planning, implementation, or debugging | ChatGPT + engineering agents |
| `coreyhaines31/marketingskills` | Product marketing, customer research, copy, CRO, SEO, analytics, launch, retention, and growth | Approved source | Product context and relevant marketing task exist | Founder + ChatGPT |
| Design OS | Optional UX and product-design workflow | Optional | A complex user journey needs design support | Founder + ChatGPT |
| Agent OS | Permanent standards workflow | Partially represented | Existing rules prove insufficient | Founder + ChatGPT |
| Task Master | Large task dependency management | Optional | OpenSpec tasks become too large to manage | Orchestrator |
| BMAD Method | Full-team methodology reference | Optional | Project complexity genuinely justifies it | Founder + ChatGPT |
| PR-Agent or another AI PR reviewer | Additional automated review | Optional | Codex review becomes insufficient or unavailable | QA |
| Preview hosting | Safe live test environment | Blocked by architecture | Hosting stack selected and app exists | Release engineering |
| Production hosting | Public application runtime | Blocked by architecture | Release candidate approved | Release engineering |
| Sentry | Technical production monitoring | Blocked by working app | Runtime and framework selected | Engineering |
| PostHog | Product analytics and behaviour evidence | Blocked by real users | Privacy-safe events are defined | Product |
| GitHub Agentic Workflows | Low-risk recurring repository automation | Optional | Manual pipeline is understood and stable | Repository operations |

## Current Kidora skill activation

The canonical project-specific selection is in `docs/SKILLS.md`.

### Active for Phase 1 discovery

- PM discovery, assumption, interview, vision, value-proposition, roadmap, PRD, user-story, test-scenario, pre-mortem, and strategy-red-team skills
- `grill-with-docs`, `grill-me`, `domain-modeling`, `to-prd`, `to-issues`, and `handoff`

### Waiting for implementation approval

- `tdd`
- `diagnosing-bugs`
- `codebase-design`
- Git guardrails
- Pre-commit feedback loops

### Waiting for validated product context or launch work

- Product marketing
- Customer research
- Copywriting and CRO
- Signup and onboarding
- Analytics and experimentation
- SEO, email, SMS, social, launch, referrals, pricing, sales, and retention

## Important distinction

**Captured now** does not always mean **installed or loaded now**.

Some tools cannot be configured before the application stack exists. Some skills are intentionally deferred until Kidora reaches their stage.

Their intended role and activation conditions are recorded now so they are not forgotten.

## Local setup target

The initial local setup may include:

1. Clone the repository.
2. Configure OpenSpec.
3. Configure Gemini CLI.
4. Configure Claude Code.
5. Optionally configure OpenCode.
6. Review `docs/SKILLS.md` and install only the selected current-phase skills.
7. Verify each agent reads the canonical repository rules.
8. Run the pipeline-document check.
9. Stop before application implementation until the Phase 1 change is approved.

## Tool-selection rule

Do not use every agent or skill for every task.

- Product decision: Founder + ChatGPT
- Discovery support: Selected PM and clarification skills
- Specification: ChatGPT + Founder
- Investigation: Gemini CLI or OpenCode
- Production coding: Claude with selected engineering skills
- Repeatable technical checks: GitHub Actions
- Browser automation: Playwright
- Exploratory UX checks: Antigravity
- Independent audit: Codex
- Final approval: Founder
- Marketing and growth: Selected marketing skills after product context exists

## Token-efficiency rule

Reserve Claude for high-value implementation. Use deterministic scripts, GitHub Actions, Gemini CLI, or OpenCode for repository exploration, repetitive checks, and log summarization.

Load skills lazily. Do not copy or inject entire upstream libraries into Kidora's working context.
