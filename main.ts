// Office Joke Open entry: writes one office joke, the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "Our \"five-minute stand-up\" ran so long the standing desk lowered itself in protest.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE);
