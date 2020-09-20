# Simple JS Bundler

Simple version of JS module bundler.

## How to use
- Clone project
- Install dependencies: ```npm i```
- `npm run build <root of project> <entry filename>` 
    
    Eg: 
    > npm run build example index.js
- This will create bundle folder in root and index.js file inside it. This would be bundled output which you can run

PS: As of now it requires `path` module for path resolution so bundle file can be used only in `node environment`

## Dependencies
- @babel/parser: To create AST from code
- @babel/traverse: To traverse AST
- @babel/core: To convert ES6 into commonJs

## Additional Links
- https://github.com/ronami/minipack
- https://www.youtube.com/watch?v=Gc9-7PBqOC8
