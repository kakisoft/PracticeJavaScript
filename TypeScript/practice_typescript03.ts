/*
★CommonJS方式でコンパイル
-------------------------------------------------------
tsc practice_typescript03.ts -t ES5 -m commonjs

node practice_typescript03.js
-------------------------------------------------------
'--module' option : 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'esnext'.
*/
//==================================
//         外部モジュール
//==================================
//外部モジュールは内部モジュールと違い、1 ファイルに 1 モジュール入れることになる。
//（module の外枠は不要）

//=====< 宣言方法 >=====
// Node - CommonJS
// RequireJS - AMD方式

import User = require("./modules/agent");  //※拡張子は不要。呼び出し元のファイル名の拡張子は「.ts」

console.log(User.name);

