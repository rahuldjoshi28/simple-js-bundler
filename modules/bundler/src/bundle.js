function bundle(graph, entryPath) {
  let mappings = "";
  Object.keys(graph).map((key) => {
    mappings += `'${key}': {
      code: function(require, module, exports) {
        ${graph[key].code}
      },
      basePath: '${graph[key].basePath}',
    },`;
  });

  return `
   const path = require("path");
   (function(modules){
     function require(key) {
        const { code, basePath } = modules[key];
        
        function localRequire(moduleName) {
          const fullPath = path.join(basePath, moduleName + ".js");
          return require(fullPath);
        }
        
        const module = {exports: {}}
        code(localRequire, module, module.exports);
        
        return module.exports
     }
     
     require("${entryPath}");
   })({${mappings}})
  `;
}

module.exports = { bundle };
