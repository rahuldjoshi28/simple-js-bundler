const fs = require("fs");
const path = require("path");

function getFilePath(...paths) {
  const fullPath = path.join(__dirname, ...paths);

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
  console.log({ fullPath1: fullPath });
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
