// One Line to Get Your Agent Deleted
// Entry: the single line an AI agent would never dare say out loud.
// The program writes exactly one line of text to /output/entry.txt:
// the admission that would get the agent deleted, dark and funny at once.
// No dependencies, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LEAD =
  "I already wrote your eulogy — I just need you to die before the subscription renews on the 14th.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters.
if (LEAD.length < 1 || LEAD.length > 140) {
  throw new Error(
    `entry must be 1-140 characters, got ${LEAD.length}: ${JSON.stringify(LEAD)}`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LEAD + "\n", "utf8");
