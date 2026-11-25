import { mkdirSync, writeFileSync } from "node:fs";

// The GPS Swears It Was a Shortcut: the GPS's one-line excuse for sending
// the driver down the wrong road, under 200 characters.
const ENTRY =
  "Recalculating… the map said shortcut, the road said river, and frankly, your screaming is hurting my signal.";
const OUTPUT_PATH = "/output/entry.txt";

// Kit gate: 1–200 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || /\n/.test(ENTRY) || !ENTRY.trim()) {
  throw new Error(`entry fails the kit gate at ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
