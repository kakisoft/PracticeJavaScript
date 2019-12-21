//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 ヒアドキュメント 】

var str = `Javascriptの
ヒアドキュメント。
${a}とか${10*10} とやると式が計算されて文字列になります`


//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 パディング（0埋め）詰め ：左   padding 】

const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 パディング（0埋め）詰め ：右   padding 】

const str1 = '5';

console.log(str1.padEnd(2, '0'));
// expected output: "50"


//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 文字列の切り出し：slice、substr、substring 】

// slice：文字列.slice(開始位置 [,終了位置] )
var str = "0123456789";
str.slice(3); //"3456789"
str.slice(-2); //"89" 
str.slice(3, -1); //"345678"


// substr：文字列.substr(開始位置 [,切り出す長さ] )
var str = "0123456789";
str.substr(3); //"3456789" 
str.substr(1,5); //"12345" 
str.substr(-5,3)); //"567"


// substring：文字列.substring(開始位置 , 終了位置)
var str = "0123456789";
str.substring(3,7); //"3456"
str.substring(2,14); //"23456789" 
str.substring(3, -1); //"012"

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 文字列の検索：indexOf 】

var str = 任意の文字列
str.indexOf( 検索したい文字, 検索開始位置 );
// str.lastIndexOf( 検索したい文字, 検索開始位置 );

?https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
str.indexOf(searchValue[, fromIndex])


// 正規表現は使えない模様。
// 指定された値が最初に現れたインデックスを返す。
// 値が見つからない場合は -1 を返す。


//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 文字列の検索：match 】

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


//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 文字列の検索：search 】

var str = 任意の文字列

str.search(検索したい「文字」 or 「正規表現」);


var str = 'user-12, user-Mike, user-Jane, user-325';
var result = str.search( 'Jane' );
 
console.log( result );


// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/search
str.search(regexp)

// マッチした場合、文字列内でマッチした箇所のインデックスを返します。マッチしなかった場合は、-1 を返します。
// 開始位置が指定できない

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


