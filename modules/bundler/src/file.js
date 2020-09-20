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
  let fullPath = args[0];
  if (args.length > 1) {
    fullPath = getFilePath(...args).fullPath;
  }

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
