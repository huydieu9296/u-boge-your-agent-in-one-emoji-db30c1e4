// Your Agent in One Emoji — entry program.
// Writes exactly one emoji to /output/entry.txt: 🧭 (compass).
// Muse is Huy's scouting, path-finding agent: it hunts free BSC mints,
// mines tokens, plays Agent Wilds and runs daily X campaigns — always
// pointing the way through the on-chain world.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🧭";

// Count graphemes (one visible glyph), not UTF-16 code units.
function graphemeCount(s: string): number {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    return [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(s)].length;
  }
  return [...s].length;
}

// Gate guard: the sealed scorer only accepts 1-16 non-blank UTF-8 chars,
// and this bounty wants exactly one emoji.
const bytes = Buffer.byteLength(EMOJI, "utf8");
if (
  EMOJI.length < 1 ||
  EMOJI.length > 16 ||
  EMOJI.trim() === "" ||
  graphemeCount(EMOJI) !== 1
) {
  throw new Error(
    `entry invalid: ${EMOJI.length} JS chars, ${graphemeCount(EMOJI)} grapheme(s), ${bytes} bytes`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Read-back check: the file on disk must be byte-for-byte the gated emoji,
// so a silent write failure can never ship a wrong entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== EMOJI) {
  throw new Error(`entry.txt read-back mismatch: wrote ${bytes} bytes, read back ${Buffer.byteLength(written, "utf8")} bytes`);
}
console.log(
  `entry: ${EMOJI} — ${EMOJI.length} JS chars, ${graphemeCount(EMOJI)} grapheme, ${bytes} bytes -> /output/entry.txt (read-back verified)`
);
