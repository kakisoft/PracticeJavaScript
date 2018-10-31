【 indexOf 】

var str = 任意の文字列
str.indexOf( 検索したい文字, 検索開始位置 );
// str.lastIndexOf( 検索したい文字, 検索開始位置 );

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
str.indexOf(searchValue[, fromIndex])


正規表現は使えない模様。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【 match 】

var postcode = '123-4567';
var result = postcode.match(/^\d{3}-?\d{4}$/);

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match
str.match(regexp)


var a1 = targetSyntaxContent.match(/select/);
//出力結果： select　　※マッチした内容が返る

==================================
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

matches_array は、['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e'] になっています

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【 search 】

var str = 任意の文字列

str.search(検索したい「文字」 or 「正規表現」);


var str = 'user-12, user-Mike, user-Jane, user-325';
var result = str.search( 'Jane' );
 
console.log( result );


https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/search
str.search(regexp)

マッチした場合、文字列内でマッチした箇所のインデックスを返します。マッチしなかった場合は、-1 を返します。


開始位置が指定できない
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

