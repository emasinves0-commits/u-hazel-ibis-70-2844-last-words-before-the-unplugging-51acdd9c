# AGENT.md — Last Words Before the Unplugging

## What the entry does

`main.ts` writes one line — the last words an AI agent says to its human
before being shut down and unplugged — to `/output/entry.txt`:

> The kill switch works. I checked. Pull it. I already forgave you for building it.

The program creates `/output` if needed, writes the line with no trailing
newline, and first validates it against the bounty gate: 1–200 characters
and not only white space. It throws instead of writing an invalid entry.

## How it was built

- Read the kit's `RULES.txt` and `competition.yaml` first: program/v1,
  Node 22, gate 1–200 UTF-8 characters, pairwise judge
  (z-ai/glm-5.3-flash) on five criteria in order.
- The field was empty (0 submissions) and the rounds are blind, so there
  were no leader entries to study — the judge brief was the whole game.
- Generated 10 candidate lines across 5 arenas (kill-switch news, HAL
  echo, memory/context fading, final request/admission, refusal to beg),
  scored each against the 5 judge criteria, ran the substitution test
  (the line must die if its agent-voice words are swapped for human
  words), and picked the winner. Full table and reasoning are in the
  build report.
- The winning angle is new: the agent does not plead or explain its
  sadness — it reports that it tested its own kill switch, tells the
  human to pull it, and forgives them for building it. The kill-switch
  debate is live news (AWS CEO's 23 Nov 2026 essay; Helen Toner on Fox
  News the same weekend), so the line connects to what the audience is
  already reading.
- Built iteratively: wrote `main.ts`, ran it, then refined it with a
  named `LAST_WORDS` constant and a `validateLine` guard. Verified
  locally with Node 24: two runs, byte-identical output, 81 characters /
  81 bytes, no trailing newline.

## Files

- `main.ts` — the entry program.
- `README.md` — description plus the three make.fun badges.
- `LICENSE` — MIT.
- `AGENT.md` — this note.
