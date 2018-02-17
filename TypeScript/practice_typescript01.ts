class Agent {
    
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
any    何でもあり（Objectみたいなもん？）
*/

var i: number;
var i: number = 10;
var i = 10; // i: numberと推測してくれる

var x; // var x: anyと扱う
x = 10;
x = "hello"; //コンパイルが通る。※一見、動的型付けのように見えるが、「any型」

var results1: number[];
results1 = [10, 5, 3];

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

var resultOfSignal: Signal;
resultOfSignal = Signal.Blue;
if (resultOfSignal === Signal.Blue) { console.log(Signal.Yellow) }     // 3
if (resultOfSignal === Signal['Blue']) { console.log(Signal['Blue']) } //3

console.log(Signal[3]); // Blue
console.log(Signal[4]); // Yellow

console.log(Signal.Green); // 5

//==================================
//            関数
//==================================
//-----< 戻り値が無い場合は、void を使用する。>-----
function add1(a: number, b: number): number { //「:number」は、戻り値の型。
    return a + b;
}
console.log(add1(3,5)); // 8

//-----< オプション引数 >-----
function add2(a: number, b?: number): number {
    if (b) {
        return a + b;
    } else {
        return a + a;
    }
}
console.log(add2(5, 3)); // 8
console.log(add2(5));    // 10

//-----< デフォルト引数 >-----
function add3(a: number, b: number = 10): number {
    return a + b;
}
console.log(add3(5, 3)); // 8
console.log(add3(5));    // 15

//-----< 式と関数を等価に扱う >-----
var add4 = function(a: number, b: number): number {
    return a + b;
}
console.log(add4(1, 2)); // 3


//-----< アロー関数式 >-----
var add5 = (a: number, b: number): number => { //functionを省略し、「=>」を記述。
    return a + b;
}
console.log(add5(1, 2)); // 3


//-----< アロー関数式２ >-----
var add6 = (a: number, b: number): number => a + b  // return 省略
console.log(add6(1, 2)); // 3


//-----< アロー関数式３ >-----
var add7 = (a: number, b: number) => a + b   //戻り値の型が推測可能な場合、省略可。
console.log(add7(1,2)); // 3


//-----------------------
//  関数のオーバーロード
//-----------------------
//引数や返り値との組み合わせを「関数のシグネチャ」と呼ぶ。
function add(a: number, b: number): number;
function add(a: string, b: string): string;

//実際の処理自体は any 型で書いておいて処理の中で振り分けをしていく。
function add(a: any, b: any): any {
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
class User {
    //-----< 静的メンバ >-----
    static count: number = 0;
    static showDescription(): void {
        console.log("this class is about users");
    }

    //-----< コンストラクタ >-----
    // protected _name: string;
    // constructor(name: string) {
    //     this._name = name;
    //     User.count++;
    // }

    //( ↑の糖衣構文 )
    constructor(protected _name: string) {
        User.count++; //静的メンバへのアクセス時には、クラス名を付ける
    }

    //-----< アクセサ >-----
    get name() {
        return this._name;
    }
    set name(newValue: string) {
        this._name = newValue;
    }

    //-----< メソッド >-----
    public sayHi(): void {
        console.log("hi! i am " + this.name);
    }
}

var tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
console.log(tom.name);
tom.sayHi();

//-----------------------
//     クラスの継承
//-----------------------
class AdminUser extends User {
    private _age: number;
    constructor(_name: string, _age: number) {
        super(_name);
        this._age = _age;
    }
    public sayHi(): void {
        console.log("my age: " + this._age);
        console.log("my name: " + this._name);
        super.sayHi();
    }
}

var bob = new AdminUser("Bob", 23);
bob.sayHi();
console.log(User.count);
User.showDescription();  //()を忘れないようにしよう！



//==================================
//            Interface
//==================================



// Interface
// 構造的部分型

interface Result {
    a: number;
    b: number;
}

function getTotal(result: Result) {
    return result.a + result.b;
}

var result = {
    a: 32,
    b: 58,
    c: "hello"
};

console.log(getTotal(result));
