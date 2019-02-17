console.log("Hello From Script");

//====================
//      変数
//====================
var msg;
msg = "hi"
console.log(msg);

var x=10, y=20;
console.log(x);

//====================
//      class
//====================
var user = {
    name : "kaki",  //プロパティ
    score: 80,
    greet: function(name){ //メソッド
        console.log("Hello " + name + " from " + this.name );
    }
};

console.log(user["name"]);
console.log(user.name);
user.score = 100;
console.log(user.score);
user.greet("Tom")

//====================
//      関数
//====================
//無名関数。ファンクション名を省略する。
var hello = function(name){ 
    var msg = "hello " + name;
    return msg;
}
var greet = hello("Tom");
console.log(greet);

//即時関数。定義と同時にコール。ファンクション名は省略可。書いてもいい。
//影響を与えない/受けない ようにする時に使う。
(function(){
    console.log("hi!")
})();  //末尾に ()を付ける。


//====================
//    イベント
//====================
document.getElementById("score_judgment").addEventListener("click", comparison); 
document.getElementById("show_dialog").addEventListener("click", show_dialog); 

//無名
document.getElementById("add").addEventListener("click",function(){
    var greet = document.createElement("p"),
    text = document.createTextNode("Hello World");
    document.body.appendChild(greet).appendChild(text)    //bodyに子要素として追加
});

document.getElementById("screen_transition").addEventListener("click", function(){
     window.location.href = "http://www.google.co.jp"
});


//====================
//    比較・分岐
//====================
function comparison(){

    var score = Number(document.getElementById("score").value);
    var message = document.getElementById("score_eval_message");

    if (score === 65535){
        message.textContent = "Unbelievableeeeee!!!!"
        console.log("Unbelievableeeeee!!!!")
        return true;
    }
    message.textContent = "Unbelievableeeeee!!!!"
    if (score === 100){
        message.textContent = "Perfect!";
    } else if (score >= 80){
        message.textContent = "good!";
    } else if (score >= 60){
        message.textContent = "so so";
    } else {
        message.textContent = "Oh...";
    }

    // AND
    if (score >= 0 && score <=60 )
        console.log("Need additional test")
    else
        console.log("....")

    // OR
    if (score < 0 || score > 100 ){
        console.log("Out of range")            
    }

    // switch
    var signal = "red";
    switch(signal){
        case "red":
            console.log("stop!");
            break;
        case "yello":
            console.log("coution");
            break;
        case "blue":
        case "green":
            console.log("go");
            break;
        default:
            console.log("ERROE");
            break;
    }

    //----- 三項演算子 -----
    var max, x=10, y=20;
    max = (x > y) ? x : y  // (条件式) ? true : false

    return true;
}

//====================
//      ループ
//====================
function roop(){
    
    //--- while ---
    //前判定。実行前に条件を満たすか判断する。
    var i = 0;
    while(i < 10){
        console.log(i);
        i++;
    }

    //--- do while ---
    //後判定。最低１回実行される。（実行した後に、繰り返しの条件を満たすかチェックする。）
    do {
        console.log(i);
        i++;
    } while(i < 10)

    //--- for ---
    for(var j=0; j < 10; j++){
        if (j === 8){
            break;
        }
        if (j % 2 !== 0){
            continue;
        }
        console.log(j)
    }
}
roop();

//====================
//      配列
//====================
function array_sample() {
    var array1 = [100,200,300]
    var array2 = [100,200,300,"kaki"]
    var array3 = [100,200,300,"kaki",[100,200,"xyz"]]

    console.log(array1[0])
    console.log(array3[4][2])

    //-----( 配列のクリア )-----
    array1.length = 0;
    array1 = [];
}
array_sample();

//====================
//     連想配列
//====================
function associative_array_sample() {
    var user = { name:'shin', age:2, tel:'080-1234-5678' };
    user.country = 'Japan';     // ①チェーンで追加する方法
    user['hobby'] = 'Dance';    // ②添字で追加する方法

    console.table({user});
    console.log( user['name'] );
    console.log( user.name );    


    var fruit = { apple: "400", banana: "300", grape: "600", peach: "700"};
    delete fruit['peach'];

    for(var key in fruit) {
        console.log(key + ":" + fruit[key]);
    }


    // ECMAScript 2017
    //https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript
    const object = {'a': 111, 'b': 222, 'c' : 333};
    for (const [key, value] of Object.entries(object)) {
      console.log(key, value);
    }    
}
associative_array_sample();


//====================
//     ダイアログ
//====================
function show_dialog(){

    //--- alert
    alert("alert");
    
    //--- confirm
    var answer = confirm("Are you sure?");
    if(answer)
        console.log("Yes");
    else
        console.log("No");

    if(confirm("本当に削除しますか？")){

    }

    //--- prompt
    var name = prompt("What's Your Name?");
    console.log(name) //入力が無ければNull

    var address = prompt("What's Your Address?","Fukuoka"); //デフォルト入力設定
    console.log(address)
}

//====================
// 組み込みオブジェクト
//====================
function Built_in_function(){
    //--- String ---
    var s = new String("kakisoft"); //文字列オブジェクト
    //var s = "kakisoft";           //文字列リテラル（メソッドを使うと、jsが自動的に文字列オブジェクトと認識してくれる。）
    console.log(s.length);
    console.log(s.replace("k","K"));    // 痴漢
    console.log(s.substring(0,4));      // 切り出し

    //--- Array ---
    var a = new Array(100,200,300,400);
    //var a = [100,200,300]
    console.log(a)
    console.log(a.length); //要素数を取得
    a.unshift(5); //先頭に要素を追加
    a.push(500);  //末尾に要素を追加
    a.shift();    //先頭の要素を除去
    a.pop();      //末尾の要素を除去
    a.splice(1,2) //インデックス1～2を削除
    a.splice(1,2, 500, 600) //インデックス1～2を削除した後、その位置から 500と600を追加。
    console.log(a)

    //--- Math ---
    console.log(Math.PI);
    console.log(Math.ceil(5.5));  //切り上げ
    console.log(Math.floor(5.5)); //切り捨て
    console.log(Math.round(5.5));
    console.log(Math.random());

    //--- Date ---
    var d1 = new Date();
    var d2 = new Date(2017, 9, 10); //jsは月は0から開始する。2月を指定する時は 1をセットする。
    var d3 = new Date(2017, 9, 10, 10, 20, 30);
    console.log(d1.getFullYear());
    console.log(d2.getMonth());
    console.log(d3.getTime());  //1970/1/1からの、経過ミリ秒
    
}

//====================
//     タイマー
//====================
/*
var i = 0;
function show(){
    console.log(i++);
}

//1000ミリ秒ごとに第一引数で渡したファンクションを実行する。
//前の処理が終わったかどうかを考慮せずに実行するため、注意が必要。
setInterval(function(){ 
    show();
},1000);

//1000ミリ秒後に、第一引数で渡したファンクションを１回だけ実行する。
//前の処理が終わってから実行する。タイマーごとに繰り返し実行するならこっち。
setTimeout(function(){ 
    show();
},1000);

//--- 前の処理が終わったことを確認しながらタイマー実行 ---
var j = 0;
function show2(){
    console.log(j++);    
    var tid = setTimeout(function(){ 
        show2();
    },1000);
    if (tid > 5){
        clearTimeout(tid); //タイマーストップ
    }
}
show2();
*/

//====================
//      DOM
//====================
console.dir(window); //オブジェクトのプロパティを表示
console.log(window.outerHeight) //ウィンドウの高さ
console.log(window.document)

var msg = document.getElementById("msg")
msg.textContent = "Hello";
msg.style = "color:red";
msg.className = "mystyle";

var greet = document.createElement("p"),
    text = document.createTextNode("Hello World");
document.body.appendChild(greet).appendChild(text)    //bodyに子要素として追加

