import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "./src/utils.ts",
    "./src/actions.ts",
  ],
  outDir: "dist",
  declaration: true,
});