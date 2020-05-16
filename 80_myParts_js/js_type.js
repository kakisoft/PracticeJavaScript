'use strict';

// 型とか
//　typeof は、かなり微妙らしい。

let a1 = "aaa";         // => [object String]
let a2 = 123;           // => [object Number]
let a3 = [1,2,3]        // => [object Array]
let a4 = ["1","2","3"]  // => [object Array]
let a5 = true           // => [object Boolean]
let a6 = undefined      // => [object Undefined]
let a7 = null           // => [object Null]

let objectName_a1 = Object.prototype.toString.call(a1).slice(8, -1);  //=> String
let objectName_a2 = Object.prototype.toString.call(a2).slice(8, -1);  //=> Number
let objectName_a3 = Object.prototype.toString.call(a3).slice(8, -1);  //=> Array
let objectName_a4 = Object.prototype.toString.call(a4).slice(8, -1);  //=> Array
let objectName_a5 = Object.prototype.toString.call(a5).slice(8, -1);  //=> Boolean
let objectName_a6 = Object.prototype.toString.call(a6).slice(8, -1);  //=> Undefined
let objectName_a7 = Object.prototype.toString.call(a7).slice(8, -1);  //=> Null

//=======================================
//               typeof
//=======================================
let objectName_typeof_a1 = (typeof a1);  //=> string
let objectName_typeof_a2 = (typeof a2);  //=> number
let objectName_typeof_a3 = (typeof a3);  //=> object
let objectName_typeof_a4 = (typeof a4);  //=> object
let objectName_typeof_a5 = (typeof a5);  //=> boolean
let objectName_typeof_a6 = (typeof a6);  //=> undefined
let objectName_typeof_a7 = (typeof a7);  //=> object        !? null が object 扱いだと！？


