const { fileContents, getFilePath } = require("./file");
const { astFrom } = require("./ast");
const graphFrom = require("./graph");

const args = process.argv;
const relativeBaseDir = args[2];
const entryFileName = args[3];

const { dirPath } = getFilePath(__dirname, relativeBaseDir, entryFileName);
const fileContent = fileContents(__dirname, relativeBaseDir, entryFileName);
const ast = astFrom(fileContent);

const graph = graphFrom(ast, dirPath);
console.log(graph);
