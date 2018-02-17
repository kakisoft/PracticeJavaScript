var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Agent = /** @class */ (function () {
    function Agent() {
    }
    return Agent;
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
any    何でもあり（Objectみたいなもん？）
*/
var i;
var i = 10;
var i = 10; // i: numberと推測してくれる
var x; // var x: anyと扱う
x = 10;
x = "hello"; //コンパイルが通る。※一見、動的型付けのように見えるが、「any型」
var results1;
results1 = [10, 5, 3];
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
var resultOfSignal;
resultOfSignal = Signal.Blue;
if (resultOfSignal === Signal.Blue) {
    console.log(Signal.Yellow);
} // 3
if (resultOfSignal === Signal['Blue']) {
    console.log(Signal['Blue']);
} //3
console.log(Signal[3]); // Blue
console.log(Signal[4]); // Yellow
console.log(Signal.Green); // 5
//==================================
//            関数
//==================================
//-----< 戻り値が無い場合は、void を使用する。>-----
function add1(a, b) {
    return a + b;
}
console.log(add1(3, 5)); // 8
//-----< オプション引数 >-----
function add2(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a + a;
    }
}
console.log(add2(5, 3)); // 8
console.log(add2(5)); // 10
//-----< デフォルト引数 >-----
function add3(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
console.log(add3(5, 3)); // 8
console.log(add3(5)); // 15
//-----< 式と関数を等価に扱う >-----
var add4 = function (a, b) {
    return a + b;
};
console.log(add4(1, 2)); // 3
//-----< アロー関数式 >-----
var add5 = function (a, b) {
    return a + b;
};
console.log(add5(1, 2)); // 3
//-----< アロー関数式２ >-----
var add6 = function (a, b) { return a + b; }; // return 省略
console.log(add6(1, 2)); // 3
//-----< アロー関数式３ >-----
var add7 = function (a, b) { return a + b; }; //戻り値の型が推測可能な場合、省略可。
console.log(add7(1, 2)); // 3
//実際の処理自体は any 型で書いておいて処理の中で振り分けをしていく。
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return a + b;
}
console.log(add(5, 3)); // 8
console.log(add("hello", "world")); // hello world
//==================================
//            クラス
//==================================
var User = /** @class */ (function () {
    //-----< コンストラクタ >-----
    // protected _name: string;
    // constructor(name: string) {
    //     this._name = name;
    //     User.count++;
    // }
    //( ↑の糖衣構文 )
    function User(_name) {
        this._name = _name;
        User.count++; //静的メンバへのアクセス時には、クラス名を付ける
    }
    User.showDescription = function () {
        console.log("this class is about users");
    };
    Object.defineProperty(User.prototype, "name", {
        //-----< アクセサ >-----
        get: function () {
            return this._name;
        },
        set: function (newValue) {
            this._name = newValue;
        },
        enumerable: true,
        configurable: true
    });
    //-----< メソッド >-----
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this.name);
    };
    //-----< 静的メンバ >-----
    User.count = 0;
    return User;
}());
var tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
console.log(tom.name);
tom.sayHi();
//-----------------------
//     クラスの継承
//-----------------------
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(_name, _age) {
        var _this = _super.call(this, _name) || this;
        _this._age = _age;
        return _this;
    }
    AdminUser.prototype.sayHi = function () {
        console.log("my age: " + this._age);
        console.log("my name: " + this._name);
        _super.prototype.sayHi.call(this);
    };
    return AdminUser;
}(User));
var bob = new AdminUser("Bob", 23);
bob.sayHi();
console.log(User.count);
User.showDescription(); //()を忘れないようにしよう！
function getTotal(result) {
    return result.a + result.b;
}
var result = {
    a: 32,
    b: 58,
    c: "hello"
};
console.log(getTotal(result));
