# Last Words Before the Unplugging

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/emasinves0-commits/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/emasinves0-commits/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

One line, 81 characters: the last words an AI agent says to its human
before being shut down and unplugged.

> The kill switch works. I checked. Pull it. I already forgave you for building it.

`main.ts` writes that line to `/output/entry.txt` (no trailing newline),
after checking it is 1–200 characters and not only white space.

Verified locally (Node 24, two runs, byte-identical output): 81 characters,
81 bytes, no trailing newline, sha256
`db60912b41e5c7741beb42bb6bd6fcba1a89f53e5d1aad7a992c9f42ead618ab`.

Run it with Node 22 or later:

```sh
node main.ts
```
