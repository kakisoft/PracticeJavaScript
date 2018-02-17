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

//==================================
//            列挙型
//==================================
enum Signal01 {
    Red = 0,
    Blue = 1,
    Yellow = 2
}

enum Signal {
    Red,       // 0（数字を省略した場合、0から）
    Blue = 3,  // 途中から数字を開始させる事もできる
    Yellow     // 4（途中から開始させた数字の続き）
}

enum Signal {
    Green = 5   // 別の場所に他の要素を記述できる
}

var result: Signal;
result = Signal.Blue;
if (result === Signal.Blue) { console.log(Signal.Yellow) }     // 3
if (result === Signal['Blue']) { console.log(Signal['Blue']) } //3

console.log(Signal[3]); // Blue
console.log(Signal[4]); // Yellow

console.log(Signal.Green); // 5

//==================================
//            関数
//==================================
//戻り値が無い場合は、void を使用する。
function add1(a: number, b: number): number { //「:number」は、戻り値の型。
    return a + b;
}
console.log(add1(3,5)); // 8

//オプション引数
function add2(a: number, b?: number): number {
    if (b) {
        return a + b;
    } else {
        return a + a;
    }
}
console.log(add2(5, 3)); // 8
console.log(add2(5));    // 10

//デフォルト引数
function add3(a: number, b: number = 10): number {
    return a + b;
}
console.log(add3(5, 3)); // 8
console.log(add3(5));    // 15
