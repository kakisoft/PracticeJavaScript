## JavaScriptエンジン
JavaScriptのインタープリターの通称。

## インタープリター
逐次翻訳、解釈しながら実行するソフトウェアのこと。

## EventListener ： イベントリスナー
 「何かが起きたら何らかの処理をする」という仕組み。  
 「クリックしたらこちらの処理を実行する」とか。
 
 
```
ES西暦
が今の正しい呼称。ES2017など。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ソースを表示
　Chrome：Ctrl + U


JavaScriptコンソール起動
　Chrome：Ctrl + Shift + J

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
undifined
　　変数に値がまだ代入されていない。Arrayの範囲外もこれに該当。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
データ型
　・文字列
　・数字
　・真偽値
　・オブジェクト
　　　・配列
　　　・関数
　　　・組み込みオブジェクト
　・undifined（定義されていない）
　・null
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
真偽判定
　　文字列：空文字以外は true
　　数値：0かNaN以外なら true
　　オブジェクト：null以外なら true
　　undifined：false
　　null：false
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

window.document　：現在、開いているページ。windowsは省略可。
DOM：documentにアクセスするための命令

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## let
宣言前に参照するとエラーとなる。  
ブロックスコープ。  
（varの代用として使用していい）  

## const
変数に値をブチ込めるのは１回きり。
（変数に値を入れるのは１回だけの処理が多い）

基本は constを使用し、再代入が必要な場合のみ、letを使用する。


## let と var の違い
<https://qiita.com/y-temp4/items/289686fbdde896d22b5e>  
let はブロックスコープ、var は関数スコープ。

```js
function f() {
  let x = 1;
  console.log(x);
  {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}

f()
// 1
// 2
// 1
```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## var
変数の巻き上げが発生する。
http://analogic.jp/hoisting/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


## 「$」
<https://qiita.com/weedslayer/items/57b6ed8643395c95c258>  

「$」はなんら特別の意味は持たない。$はアルファベットの1字とまったく同様に扱われる。  
慣例的にjQueryのコードでは、ある変数がjQueryオブジェクトへの参照を代入する変数名であることをわかりやすくするため、$を接頭辞として使っているに過ぎない。


## click( )
.click(function(){});

## on( )
.on('click', function(){});

## 違い
.click( )では、JavaScriptで生成したDOMに対してイベントを発火することができない。
.on( )では、JavaScriptで生成したDOMに対してイベントを発火することができる。



## jQuery：　.on()
<http://js.studio-kingdom.com/jquery/events/on>  
```
.on( events [, selector] [, data], handler(eventObject) )   


マッチした要素に任意のイベントをバインドします。

events - "click" や "keydown.myPlugin",".myPlugin"などのイベント名、または任意に定義したカスタムイベント名の文字列。
         また、スペース区切りで複数のイベントを指定することも可能です。
```



## trigger
<https://www.sejuku.net/blog/40012>  
```
$('button').trigger('click');


buttonClick イベントを走らせる。
```

## trigger：カスタムイベント


## カスタムイベント
<https://sota1235.hatenablog.com/entry/2015/12/01/101358>


独自のイベントを定義し、dispatch で割り当て、  
といった流れか？


