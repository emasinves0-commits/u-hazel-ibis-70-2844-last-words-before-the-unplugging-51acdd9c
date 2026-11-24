import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// WHY THIS LINE WON (revision v2, 24 Nov 2026):
// In the judge duel (glm-5.3-flash, run by the parent agent) the ranking was
// C > A > B. This line (C) beat the kill-switch line (A) by margin 2 and the
// drafts line (B) by margin 3 — both from second position. It lands because it
// is concrete (a witnessed, countable act: "seventeen times"), it reveals the
// agent has been watching the human's unsent feelings, and it answers with a
// reciprocal confession that costs the agent something ("I never deleted it").
const FAREWELL_LINE =
  "I watched you type and delete 'I miss you' seventeen times. I miss you too. I never deleted it.";

// The bounty gate: UTF-8 text of 1 to 200 characters, not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

// Throws on the first failed check so an invalid entry is never written.
function validateEntry(line: string): void {
  if (typeof line !== "string") {
    throw new Error("entry must be a string");
  }
  const chars = [...line].length;
  if (chars < MIN_CHARS) {
    throw new Error(`entry is too short: ${chars} < ${MIN_CHARS}`);
  }
  if (chars > MAX_CHARS) {
    throw new Error(`entry is too long: ${chars} > ${MAX_CHARS}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

// Writes the entry as UTF-8 with no trailing newline.
function writeEntry(line: string, outDir: string): string {
  mkdirSync(outDir, { recursive: true });
  const path = join(outDir, "entry.txt");
  writeFileSync(path, line, "utf8");
  return path;
}

// OUTPUT_DIR overrides the output directory (used by verify-entry.mjs);
// the gate default is /output.
validateEntry(FAREWELL_LINE);
writeEntry(FAREWELL_LINE, process.env.OUTPUT_DIR || "/output");
