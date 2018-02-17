var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
console.log("hello world");
//==================================
// 変数の静的型付け <> 動的型付け
//==================================
//-----< JavaScript >-----
//var jx1 = 10;
//jx1 = "hello"; //エラーとならない
//-----< TypeScript >-----
var tx1 = 10;
//tx1 = "hello"; //エラーとなる
//==================================
//              型
//==================================
/*
number
string
boolean
any    何でもあり（Objectみてーなもん？）
*/
var i;
var i = 10;
var i = 10; // i: number
var x; // var x: any
x = 10;
x = "hello";
var results;
results = [10, 5, 3];
