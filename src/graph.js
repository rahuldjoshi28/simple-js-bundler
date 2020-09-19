const { astFrom } = require("./ast");
const { transformFromAst } = require("@babel/core");

const { fileContents, getFilePath } = require("./file");
const traverse = require("@babel/traverse").default;

const graph = {};

function transform(ast) {
  const { code } = transformFromAst(ast, null, {
    presets: ["env"],
  });
  return code;
}

function graphFrom(basePath, fullPath) {
  const contents = fileContents(fullPath);
  const ast = astFrom(contents);
  graph[fullPath] = transform(ast);

  traverse(ast, {
    ImportDeclaration: (importNode) => {
      const sourcePath = importNode.node.source.value + ".js";
      const { fullPath, dirPath } = getFilePath(basePath, sourcePath);
      graphFrom(dirPath, fullPath);
    },
  });

  return graph;
}

module.exports = graphFrom;
