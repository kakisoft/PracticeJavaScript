//===================
//     初期
//===================
//読み込まれた時の処理
$(document).ready(function(){
    $("p").css("color","red");
});
//読み込まれた時の処理（省略記述）
$(function(){
    //メソッドを繋げて記述できる。（メソッドチェーン。↓ではhideがそれにあたる。）
    $("h1").css("font-size","20px").hide("slow");
});

//===================
//  イベントの追加
//===================
//$(function() {

//イベント処理（ボタンをクリックすると、p要素が追加される）
$('button#ctg05-button01').click(function() {
    var p = $('<p>').text('vanish!').addClass('vanish');
    $(this).before(p);
});

//イベントによって追加された要素へ、イベントを追加
$('body').on('click', '.vanish', function() {
    $(this).remove();
});

//※このやり方では、イベントが動作しない。
//clickイベントは、ドキュメントが読まれた時点で設定する。
//ドキュメントが読まれた時点では、vanishクラスを保持した p要素は存在しない。
//読み込まれた時に存在していない要素に対してイベントをつけるには on を使用する
//
// $('.vanish').click(function() {
//     $(this).remove();
// });

//}

//===================
//     イベント
//===================
$('#ctg07-box01 ').click(function() {
    alert("hi!");
});
$('#ctg07-box01')   
    .mouseover(function() {
        $(this).css('background', 'green');
    })            
    .mouseout(function() {
        $(this).css('background', 'red');
    })
    .mousemove(function(e) {
        $(this).text(e.pageX);
        //eはイベントオブジェクト。
        //取得できる値は、APIドキュメントを参照。
        //jQueryリファレンス→API Documentation→Event Object
        //http://api.jquery.com/category/events/event-object/
    });

//======================
// イベント(フォーム部品)
//======================

$('#ctg08-name')
    .focus(function() {
        $(this).css('background', 'red');
    })
    .blur(function() { //フォーカスが外れた時
        $(this).css('background', 'white');
    });
$('#ctg08-members').change(function() {
    alert('changed!');
});

//===================
//     要素指定
//===================
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

//===================
//    エフェクト
//===================
// hide
$('button#ctg06-button01').click(function() {
    $('#ctg06-box01').hide();
});
$('button#ctg06-button02').click(function() {
    $('#ctg06-box01').hide('slow');
});
$('button#ctg06-button03').click(function() {
    $('#ctg06-box01').hide(800); //ミリ秒指定（左記 は0.8秒）
});

// show
$('button#ctg06-button04').click(function() {
    $('#ctg06-box01').show(800); //ミリ秒指定（左記 は0.8秒）
});

// fadeOut（消える）
$('button#ctg06-button05').click(function() {
    $('#ctg06-box01').fadeOut(800); //ミリ秒指定（左記 は0.8秒）
});

// fadeIn（現れる）
$('button#ctg06-button06').click(function() {
    $('#ctg06-box01').fadeIn(800); //ミリ秒指定（左記 は0.8秒）
});

// toggle（表示/非表示）
$('button#ctg06-button07').click(function() {
    $('#ctg06-box01').toggle(800);
});

$('button#ctg06-button08').click(function() {
    $('#ctg06-box01').toggle(800,function() {
        $("#ctg06").append("<p>Occurred toggle event.</p>");        
    });
});

//===================
//    Ajax(Asynchronous JavaScript + XML)
//===================
//JavaScript を使ってサーバーと通信しつつページを書き換える手法
//  サーバの通信 + ページの書き換え
//
//jQueryリファレンス→API Documentation→Ajax
//http://api.jquery.com/category/events/event-object/

// load
$('#ctg09-button01').click(function() {
    $('#ctg09-result').load('assets/parts01.html');
    //Chromeの場合、ローカルのファイルを読み込ませると、エラーとなる。
    //（ただし、サーバ経由だと問題なし。）
    //オプション付けて起動したらうまく行くらしいが、上手く行かなかった。
});

// 非同期制御
$('#ctg10-button01').click(function() {
    $('#ctg10-result01').load('assets/parts01.html', function() {
        $('#ctg10-result01').css('color', 'red');
    });
    // ↑第二引数に関数を渡している。（コールバック関数という）
    // loadが完了した後に、functionを実行する、という意味になる。
});

// 「このやり方だとうまく行かない」とチュートリアルに書いてあったが、
// EdgeとFFでうまく行った。モダンブラウザではパーサが進化したおかげ？
$('#ctg10-button02').click(function() {
    $('#ctg10-result02').load('assets/parts01.html'); // loadは非同期。処理の終了を待たずに（結果が返ってくる前に）、次の処理に移行する。
    $('#ctg10-result02').css('color', 'red');         // ↑の理由により、外部ファイルが読み終わる前に、これが実行される。そのため、意図通りの動きにならない。
});

