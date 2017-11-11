//読み込まれた時の処理
$(document).ready(function(){
    $("p").css("color","red");
});
//読み込まれた時の処理（省略記述）
$(function(){
    //メソッドを繋げて記述できる。（メソッドチェーン。↓ではhideがそれにあたる。）
    $("h1").css("font-size","20px").hide("slow");
});

//id指定
$("#sub").css("color","blue");
//クラス指定
$(".item").css("color","brown");

//直下の要素を指定
$("div > #main > .item").css("font-size","25px");
//複数の要素を指定
$("h3,h4,#id0").css("color","violet");
$("div > h1,h2").css("color","red");
//隣接する要素
$("h5 + h5").css("color","red");

//===================
//     フィルタ
//===================
//eq(2)・・・indexが2の要素が選択される  equql
$("#sub > li:eq(2)").css("font-weight","bold");
//gt(1)・・・indexが1より大きい  greater than
$("#sub > li:gt(1)").css("font-size","30px");
//lt(3)・・・indexが3より小さい  less then
$("#sub > li:lt(3)").css("font-style","italic");
//even ・・・偶数。odd・・・奇数
$("#sub > li:even").css("font-style","oblique");  
//contains('x')・・・xが含まれているか
$("#sub > li:contains('4')").css("font-size","45px");
//他には、
//　first  last
//　even   odd
//なんてのも。

//===============================
//  メソッドを使ったDOM要素の指定
//===============================
//親要素を指定（子にも適用）
$("#sub2").parent().css("font-style","oblique");
//子要素を指定
$("#sub2").children().css("font-size","30px");
//次の要素
$("#sub2 > li:eq(2)").next().css("color","red"); //インデックス 3が対象
//前の要素
$("#sub2 > li:eq(1)").prev().css("color","blue"); //インデックス 0が対象
//兄弟要素（同列の要素）
$("#sub2 > li:eq(1)").siblings().css("text-decoration","overline");

//===============================
//      セレクタ・メソッド
//===============================
// =
$("a[href='http://google.co.jp']").css("background","red"); //属性セレクタは[]で指定する。
// !=
$("a[href!='http://google.co.jp']").css("background","pink");
// like
$("a[href*='oo']").css("font-size","25px");
//先頭
$("a[href^='http']").css("text-decoration","overline");
// 末尾
$("a[href$='e.co.jp']").css("font-style","oblique");

//===============================
//         style制御
//===============================
// .css 設定 取得
$('#ctg01  .sub01').css('color', 'red').css('background', 'blue');
console.log($('#ctg01  .sub01').css('color'));
// addClass
$('#ctg01  .sub02').addClass('myStyle');
// removeClass
$('#ctg01  .sub03').removeClass('myStyle');
// attr
console.log($('#ctg02 a').attr('href'));
$('#ctg02 a.sub1').attr('href', 'http://google.co.jp');
// data
console.log($('#ctg02 a.sub2').data('sitename'));
// text
console.log($('#ctg03 p.sub1').text());
$('#ctg03  p.sub2').text('just changed');
// html
$('#ctg03  p.sub3').html('<a href="">click me!</a>');
// val(値を取得)
console.log($('#ctg03 input.sub4').val());
$('#ctg03 input.sub4').val('hello, again!');
// remove
$('#ctg03 p.sub5').remove();
// empty
$('#ctg03 p.sub6').empty();

//===============================
//           要素の追加
//===============================
// inserBefore
var li1 = $('<li>').text('just added1');
li1.insertBefore($('#ctg04 ul > li:eq(1)'));
// insertAfter
var li2 = $('<li>').text('just added2');
li2.insertAfter($('#ctg04 ul > li:eq(1)'));
// Before
var li3 = $('<li>').text('just added3');
$('#ctg04 ul > li:eq(3)').before(li3);
//After
var li4 = $('<li>').text('just added4');
$('#ctg04 ul > li:eq(3)').after(li4);
// prepend（先頭に追加）
var li4 = $('<li>').text('prepend');
$('#ctg04 ul').prepend(li4);
// append（末尾に追加）
var li4 = $('<li>').text('append');
$('#ctg04 ul').append(li4);
// prependTo
var li5 = $('<li>').text('prependTo');
li5.prependTo($('#ctg04 ul'));
// appendTo
var li6 = $('<li>').text('appendTo');
li6.appendTo($('#ctg04 ul'));

