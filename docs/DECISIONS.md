# Decision Log

## DEC-001 — Project name

**Decision:** Use the name `Kidora Pre School`.

**Reason:** Selected by the founder.

**Status:** Active

---

## DEC-002 — Setup boundary

**Decision:** Configure the development pipeline before product research, architecture selection, or implementation.

**Reason:** The founder wants to understand and validate the workflow before building.

**Status:** Active

---

## DEC-003 — Control model

**Decision:** ChatGPT remains the main strategy and orchestration hub; GitHub is the durable source of truth.

**Reason:** Long conversations can become bloated, while repository files remain versioned and accessible to all agents.

**Status:** Active

---

## DEC-004 — Coding ownership

**Decision:** Claude will be the primary production-code implementer. Gemini CLI/OpenCode will primarily investigate and verify. Codex will independently audit.

**Reason:** This preserves role separation and reserves Claude's context for high-value implementation.

**Status:** Active

---

## DEC-005 — Universal pipeline source

**Decision:** Use `capcutfor1month-oss/project-Pipline` as the canonical common pipeline for Kidora and future projects.

**Reason:** The shared operating method should live independently from any single product repository.

**Status:** Active

---

## DEC-006 — Initial product direction

**Decision:** Record the proposed Kidora direction as a preschool operating system, beginning with QR-based parent registration and admission enquiry management.

**Reason:** The founder wants the first registration app to fit into a clear long-term product rather than become an isolated form.

**Important:** This is an initial roadmap, not approval to build every module. Each phase requires discovery, founder approval, specification, implementation, testing, and audit.

**Status:** Proposed direction active
