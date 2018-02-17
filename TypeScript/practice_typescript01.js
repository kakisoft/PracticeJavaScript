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
var i = 10; // i: numberと推測してくれる
var x; // var x: anyと扱う
x = 10;
x = "hello"; //コンパイルが通る。※一見、動的型付けのように見えるが、「any型」
var results;
results = [10, 5, 3];
//==================================
//            列挙型
//==================================
var Signal01;
(function (Signal01) {
    Signal01[Signal01["Red"] = 0] = "Red";
    Signal01[Signal01["Blue"] = 1] = "Blue";
    Signal01[Signal01["Yellow"] = 2] = "Yellow";
})(Signal01 || (Signal01 = {}));
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 3] = "Blue";
    Signal[Signal["Yellow"] = 4] = "Yellow"; // 4（途中から開始させた数字の続き）
})(Signal || (Signal = {}));
(function (Signal) {
    Signal[Signal["Green"] = 5] = "Green"; // 別の場所に他の要素を記述できる
})(Signal || (Signal = {}));
var result;
result = Signal.Blue;
if (result === Signal.Blue) {
    console.log(Signal.Yellow);
} // 3
if (result === Signal['Blue']) {
    console.log(Signal['Blue']);
} //3
console.log(Signal[3]); // Blue
console.log(Signal[4]); // Yellow
console.log(Signal.Green); // 5
