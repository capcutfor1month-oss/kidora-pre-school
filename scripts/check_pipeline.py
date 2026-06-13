from pathlib import Path
import sys

required = [
    "README.md", "AGENTS.md", "CLAUDE.md", "GEMINI.md",
    "docs/INDEX.md", "docs/PRODUCT.md", "docs/ARCHITECTURE.md",
    "docs/CURRENT.md", "docs/DECISIONS.md", "docs/TESTING.md",
    "docs/RELEASE.md",
]

forbidden_tokens = (
    "-final", "_final", "-latest", "_latest", "-updated", "_updated",
    "-new", "_new", "-v2", "_v2", "-v3", "_v3",
)

missing = [p for p in required if not Path(p).is_file()]
bad_names = []
for path in Path(".").rglob("*.md"):
    lowered = path.stem.lower()
    if any(token in lowered for token in forbidden_tokens):
        bad_names.append(str(path))

if missing:
    print("Missing required pipeline files:")
    for item in missing:
        print(f" - {item}")
if bad_names:
    print("Potential duplicate/versioned document names:")
    for item in bad_names:
        print(f" - {item}")
if missing or bad_names:
    sys.exit(1)
print("Pipeline document checks passed.")
