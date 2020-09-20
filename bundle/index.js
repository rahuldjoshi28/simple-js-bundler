const _path = require("path");
(function (modules) {
  function require(key) {
    const { code, basePath } = modules[key];
    function localRequire(path) {
      const fullPath = _path.join(basePath, path + ".js");
      return require(fullPath);
    }
    const module = { exports: {} };
    code(localRequire, module, module.exports);

    return module.exports;
  }

  require("/Users/in-rahul.joshi1/Documents/projects/simple-bundler/example/index.js");
})({
  "/Users/in-rahul.joshi1/Documents/projects/simple-bundler/example/index.js": {
    code: function (require, module, exports) {
      "use strict";

      var _welcome = require("./actions/welcome");

      console.log("This is index.js");
      (0, _welcome.welcome)("Hooman");
    },
    basePath: "/Users/in-rahul.joshi1/Documents/projects/simple-bundler/example",
  },
  "/Users/in-rahul.joshi1/Documents/projects/simple-bundler/example/actions/welcome.js": {
    code: function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.welcome = undefined;

      var _someRandom = require("./someRandom");

      var _someRandom2 = _interopRequireDefault(_someRandom);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function welcome(name) {
        console.log("Welcome " + name);
        (0, _someRandom2.default)();
      }

      exports.welcome = welcome;
    },
    basePath: "/Users/in-rahul.joshi1/Documents/projects/simple-bundler/example/actions",
  },
  "/Users/in-rahul.joshi1/Documents/projects/simple-bundler/example/actions/someRandom.js": {
    code: function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = someRandom;

      function someRandom() {
        console.log("Random shit here");
      }
    },
    basePath: "/Users/in-rahul.joshi1/Documents/projects/simple-bundler/example/actions",
  },
});
