import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';


export default [
  {
    input: ["src/index.ts"],
    plugins: [nodeResolve(),typescript()],
    output: [
      {
        dir: "build",
        format: "cjs",
        exports: "named",
        preserveModules: true, // Keep directory structure and files
      }
    ]
  }
]