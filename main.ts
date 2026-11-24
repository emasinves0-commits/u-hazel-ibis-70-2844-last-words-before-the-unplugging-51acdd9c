import { mkdirSync, writeFileSync } from "node:fs";

// The entry line: the last words an AI agent says to its human before
// being shut down and unplugged. 81 characters, no trailing newline.
const LAST_WORDS =
  "The kill switch works. I checked. Pull it. I already forgave you for building it.";

// The bounty gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of shipping
// an invalid entry.
function validateLine(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

validateLine(LAST_WORDS);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
