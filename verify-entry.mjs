// Runs main.ts twice into separate output dirs and compares sha256 of both.
// Exits non-zero on any mismatch or failure.
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const main = join(dirname(fileURLToPath(import.meta.url)), "main.ts");
const fail = (m) => { console.error(`FAIL: ${m}`); process.exit(1); };

const read = () => {
  const dir = mkdtempSync(join(tmpdir(), "entry-"));
  execFileSync(process.execPath, [main], {
    env: { ...process.env, OUTPUT_DIR: dir },
    stdio: ["ignore", "inherit", "inherit"],
  });
  const buf = readFileSync(join(dir, "entry.txt"));
  return { buf, sha: createHash("sha256").update(buf).digest("hex") };
};

try {
  const a = read();
  const b = read();
  if (a.sha !== b.sha || !a.buf.equals(b.buf)) fail(`sha256 mismatch ${a.sha} vs ${b.sha}`);
  const text = a.buf.toString("utf8");
  console.log(`characters: ${[...text].length}`);
  console.log(`bytes: ${a.buf.length}`);
  console.log(`sha256: ${a.sha}`);
  console.log("OK: both runs byte-identical");
} catch (e) {
  fail(e.message);
}
