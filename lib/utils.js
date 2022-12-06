import { readFile } from "fs/promises";
import { fileURLToPath } from "node:url";
import callsite from "callsite";
import { dirname, relative } from "path";
import pico from "picocolors";

export async function run(callback = () => true, file = "input.txt") {
  const stack = callsite();
  const [, tmp] = stack || [];

  if (!tmp) {
    throw new Error("Could not be called directly");
  }

  try {
    const root = dirname(fileURLToPath(tmp.getFileName()));

    const input = await readFile(root + `/${file}`, "utf-8");
    await callback(input);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

export function ask(str) {
  return console.log(pico.cyan(`\n${str}`));
}
export function answer(str) {
  return console.log(pico.green(pico.bold(str)));
}
