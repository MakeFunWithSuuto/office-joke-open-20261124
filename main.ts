// Office Joke Open entry: writes one office joke, the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "I CC'd my manager to cover myself. She BCC'd HR to cover herself. Legal is now a recurring invite.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE);
