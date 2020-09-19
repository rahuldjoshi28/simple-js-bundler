const fs = require("fs");
const path = require("path");

function getFilePath(...paths) {
  const fullPath = path.join(...paths);

  const atomicPaths = fullPath.split("/");
  atomicPaths.pop();
  const dirPath = atomicPaths.join("/");

  return {
    fullPath,
    dirPath,
  };
}

function fileContents(...args) {
  const { fullPath } = getFilePath(...args);
  return fs.readFileSync(fullPath).toString();
}

function fileContentsFromRelativePath(relativePath) {
  return fileContents(relativePath);
}

module.exports = {
  fileContentsFromRelativePath,
  fileContents,
  getFilePath,
};
