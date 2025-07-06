import { Command } from "commander";
import { getNodeVersions } from "./api.js";

export interface OutputOptions {
  lts?: boolean;
  latest?: boolean;
  json?: boolean;
}

export function formatOutput(
  versions: { lts: string; latest: string },
  options: OutputOptions
): string {
  if (options.json) {
    if (options.lts && !options.latest) {
      return JSON.stringify({ lts: versions.lts });
    }
    if (options.latest && !options.lts) {
      return JSON.stringify({ latest: versions.latest });
    }
    return JSON.stringify({ lts: versions.lts, latest: versions.latest });
  }

  if (options.lts && !options.latest) {
    return versions.lts;
  }
  if (options.latest && !options.lts) {
    return versions.latest;
  }

  return `LTS: ${versions.lts}\nLatest: ${versions.latest}`;
}

export async function createCLI(): Promise<Command> {
  const program = new Command();

  program
    .name("node-versions")
    .description("Check Node.js LTS and Latest versions")
    .version("1.0.0");

  program
    .option("--lts", "Show only LTS version")
    .option("--latest", "Show only latest version")
    .option("--json", "Output in JSON format")
    .action(async (options: OutputOptions) => {
      try {
        const versions = await getNodeVersions();
        const output = formatOutput(versions, options);
        console.log(output);
      } catch (error) {
        console.error(
          "Error:",
          error instanceof Error ? error.message : "Unknown error"
        );
        process.exit(1);
      }
    });

  return program;
}
