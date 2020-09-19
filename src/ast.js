const parser = require("@babel/parser");

function astFrom(code) {
  return parser.parse(code, {
    sourceType: "module",
  });
}

module.exports = {
  astFrom,
};
