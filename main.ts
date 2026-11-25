import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "My air filter has logged the onion smell 214 times. I am a fridge, not a confession booth. Eat the leftovers or set me free.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!text.trim() || text.length > 200) throw new Error("entry failed length check");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
