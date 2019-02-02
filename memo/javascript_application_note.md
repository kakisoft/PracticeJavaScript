```
Javascriptのループ
https://qiita.com/endam/items/808a084859e3a101ab8f


＜検索＞
str.indexOf(searchValue[, fromIndex]) ：正規表現は使えない。notで検索できない？
str.search(regexp)：引数を１個しか取れない。開始位置は指定できなさそう。
match


＜切り出し＞
http://catprogram.hatenablog.com/entry/2013/05/13/231457
文字列.slice(開始位置 [,終了位置] )
文字列.substr(開始位置 [,切り出す長さ] )
文字列.substring(開始位置 , 終了位置)


＜正規表現＞
https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions


＜引数＞
通常、値渡し。
配列・オブジェクトだと、参照渡し。
・・・で合ってる？

＜スコープ＞
constはローカルスコープ
先頭の宣言が無い場合、グローバルスコープ。
グローバルを使いたい場合は、外に出すという方法が。

＜textarea から内容を取得＞
var targetSyntaxElement = document.getElementById("target-syntax");
var targetSyntaxContent1 = targetSyntaxElement.textContent; //placeholderも取得
var targetSyntaxContent2 = targetSyntaxElement.value; //placeholderは取得しない
・・・でいいのか？

```