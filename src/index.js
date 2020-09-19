const { fileContentsFromRelativePath } = require("./file");
const { astFrom } = require("./ast");
const graphFrom = require("./graph");

const args = process.argv;
const baseDir = args[2];
const entryFileName = args[3];

const fileContent = fileContentsFromRelativePath(baseDir + "/" + entryFileName);
const ast = astFrom(fileContent);

const graph = graphFrom(ast, baseDir);
console.log(graph);
