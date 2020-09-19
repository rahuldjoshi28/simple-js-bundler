const { astFrom } = require("./ast");

const { fileContents, getFilePath } = require("./file");
const path = require("path");
const traverse = require("@babel/traverse").default;

const graph = {};

function graphFrom(ast, basePath) {
  console.log({ basePath });
  traverse(ast, {
    ImportDeclaration: (importNode) => {
      const sourcePath = importNode.node.source.value + ".js";
      const { fullPath, dirPath } = getFilePath(basePath, sourcePath);
      console.log(fullPath, basePath, sourcePath);
      const contents = fileContents(basePath, sourcePath);
      graph[fullPath] = contents;

      graphFrom(astFrom(contents), dirPath);
    },
  });

  return graph;
}

module.exports = graphFrom;
