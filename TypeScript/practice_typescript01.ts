class User {
    
}

console.log("hello world");

//==================================
// 変数の静的型付け <> 動的型付け
//==================================

//-----< JavaScript >-----
//var jx1 = 10;
//jx1 = "hello"; //エラーとならない

//-----< TypeScript >-----
var tx1: number = 10;
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

var i: number;
var i: number = 10;
var i = 10; // i: numberと推測してくれる

var x; // var x: anyと扱う
x = 10;
x = "hello"; //コンパイルが通る。※一見、動的型付けのように見えるが、「any型」

var results: number[];
results = [10, 5, 3];