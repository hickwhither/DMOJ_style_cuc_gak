import { build } from "esbuild";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const CSS_DIR = join("src", "css");

const cssFolderPlugin = {
    name: "css-folder",
    setup(build) {
        build.onResolve({ filter: /^virtual:css$/ }, () => ({
            path: "virtual:css",
            namespace: "css-folder"
        }));
        build.onLoad({ filter: /.*/, namespace: "css-folder" }, async () => {
            const files = (await readdir(CSS_DIR)).filter(f => f.endsWith(".css"));
            let combined = "";
            for (const file of files) {
                combined += await readFile(join(CSS_DIR, file), "utf8") + "\n";
            }
            return { contents: `export default ${JSON.stringify(combined)};`, loader: "js" };
        });
    }
};

await build({
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "dist/bundle.js",
    minify: true,
    target: "es2020",
    plugins: [cssFolderPlugin]
});
