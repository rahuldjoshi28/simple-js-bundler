const { getFilePath } = require("./file");
const graphFrom = require("./graph");
const { bundle } = require("./bundle");
const fs = require("fs");

const args = process.argv;
const relativeBaseDir = args[2];
const entryFileName = args[3];

const { fullPath: entryFilePath, dirPath } = getFilePath(__dirname, relativeBaseDir, entryFileName);

const graph = graphFrom(dirPath, entryFilePath);

const bundledCode = bundle(graph, entryFilePath);
console.log(bundledCode);

fs.writeFileSync(getFilePath(__dirname, "../bundle/index.js").fullPath, bundledCode);
