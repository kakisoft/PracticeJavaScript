/*
★AMD方式でコンパイル
-------------------------------------------------------
tsc practice_typescript04.ts -t ES5 -m amd

node practice_typescript04.js
-------------------------------------------------------
'--module' option : 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'esnext'.
*/
define(["require", "exports", "./modules/player"], function (require, exports, User) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(User.name);
});
