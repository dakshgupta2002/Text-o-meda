import copyPlugin from "copy-webpack-plugin";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const entry = {
  "js/script.js": "./src/js/main.js",
};

export const output = {
  path: __dirname + "/dist",
  filename: "[name]",
};

export const resolve = { extensions: [".js"] };

export const plugins = [
  new copyPlugin({
    patterns: [
      { from: "html", context: "src" },
      { from: "assets", context: "src", to: "assets" },
    ],
  }),
];
