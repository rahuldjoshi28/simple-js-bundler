const { getFilePath } = require("./src/file");
const graphFrom = require("./src/graph");
const { bundle } = require("./src/bundle");
const fs = require("fs");

const BASE_PATH = process.cwd();

const args = process.argv;
const relativeBaseDir = args[2];
const entryFileName = args[3];

const { fullPath: entryFilePath, dirPath } = getFilePath(BASE_PATH, relativeBaseDir, entryFileName);

const graph = graphFrom(dirPath, entryFilePath);

const bundledCode = bundle(graph, entryFilePath);
console.log(bundledCode);

fs.writeFileSync(getFilePath(BASE_PATH, "bundle/index.js").fullPath, bundledCode);
