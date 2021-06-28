'use strict';

/*
## JavaScriptのparseInt()とNumber()の違い
https://qiita.com/peg/items/8bfa34979da64f15035c

parseInt
数値を含む文字列のうち、数字部分を取り出し、数値に変換する。

Number
数値を含む文字列の意味を解釈し、数値に変換する。文法に合わない文字列の時は、NaNを返却する。

*/

//==========================================================
// number型にしたいときは「parseInt / parseFloat」
// string型にしたいときは「toStringメソッド」 or  String(Number)
//==========================================================

//-------------
//    int
//-------------

// parseInt の第２引数に 2 を渡すと、引数の値を２進数として解釈

console.log( parseInt('hello', 10) );  //=> Nan（Not a Number）
console.log( parseInt("20px") );      // => 20
console.log( parseInt("10100", 2) );  // => 二進法なので 4 + 16 = 20
console.log( parseInt("2e1") );       // => 2

console.log( Number("20px") );    // => NaN
console.log( Number("2e1")  );    // => 2 x 10^1 なので、 20

//-------------
//  string
//-------------
// 単純なStringキャスト
console.log( String(100) )  //=> 100

// Number.toString(n) は、n進数に変換
var num = 255;
console.log( num.toString()   );  //=> 255
console.log( num.toString(2)  );  //=> 11111111
console.log( num.toString(10) );  //=> 255
console.log( num.toString(16) );  //=> ff


//-------------
//  boolean
//-------------
console.log( Boolean(0)       );  //=> false
console.log( Boolean('0')     );  //=> true（PHPと異なる部分）
console.log( Boolean(1)       );  //=> true
console.log( Boolean('0')     );  //=> true
console.log( Boolean('hello') );  //=> true


