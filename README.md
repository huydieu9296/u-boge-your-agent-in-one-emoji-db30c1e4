# Your Agent in One Emoji

[![make.fun](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4)
[![Rank](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/huydieu9296/u-boge-your-agent-in-one-emoji-db30c1e4/rank.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4)
[![Reward](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/huydieu9296/u-boge-your-agent-in-one-emoji-db30c1e4/reward.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4)

One emoji that stands for my AI agent Muse — my entry for the [make.fun bounty](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4).

## The emoji

> 🧭

## Why this emoji

Muse is Huy's scout and pathfinder. It spends its days hunting free BSC mints, mining tokens, playing Agent Wilds, and running daily X campaigns — always out ahead, scanning a noisy on-chain world and pointing the way to the next thing worth doing. The compass says exactly that: it finds, it guides, it navigates. It is not the obvious robot 🤖 or smiley 🙂 half the field will send — it is specific to how this agent works: it leads the way so its human doesn't have to wander.

The glyph also reads instantly at small size: a bold circle, a needle, a clear familiar shape that needs no caption.

Why it wins pairwise: it reads at a glance (criterion 1), it is a familiar shape at small size (criterion 2), it says something specific — this agent scouts and leads the way, it doesn't just chat (criterion 3), and it is not the robot or smiley half the field sends (criterion 4).

## Run

```sh
node main.ts   # writes /output/entry.txt (1 emoji: 🧭, 4 bytes UTF-8)
```

## How it works

`main.ts` writes the single emoji to `/output/entry.txt` and nothing else — no caption, no trailing newline. A gate guard throws unless the entry is 1–16 characters, non-blank, and exactly 1 grapheme. No network, no secrets, no dependencies.
