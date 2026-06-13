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
