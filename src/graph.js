const { astFrom } = require("./ast");
const { transformFromAst } = require("@babel/core");

const { fileContents, getFilePath } = require("./file");
const traverse = require("@babel/traverse").default;

const graph = {};

function graphFrom(ast, basePath) {
  traverse(ast, {
    ImportDeclaration: (importNode) => {
      const sourcePath = importNode.node.source.value + ".js";
      const { fullPath, dirPath } = getFilePath(basePath, sourcePath);
      const contents = fileContents(basePath, sourcePath);
      const ast1 = astFrom(contents);

      const { code } = transformFromAst(ast1, null, {
        presets: ["env"],
      });
      graph[fullPath] = code;

      graphFrom(ast1, dirPath);
    },
  });

  return graph;
}

module.exports = graphFrom;
