```
【 jQuery 】

セレクタ：処理対象となるDOM要素を指定するための記法
メソッド：処理
---------------------
セレクタ指定方法
　$("セレクタ")　
　　html要素：p h1 ul　など、タグ名を指定
　　id：#main など
　　class：.item など
---------------------
> 直下の要素
  それ以下の要素
, 複数の要素
+ 隣接する要素
---------------------
　

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
＜jQueryの使用方法＞
１．ホスティングされているものを使う
・他のサイトでも同じホスティング先の jQuery が読み込まれている場合に、ブラウザが自動的にキャッシュを利用してくれる。
・自分のサーバーに対して jQuery ファイルへのリクエストが来なくなるため、リクエスト数が減る。

キャッシュが利用されればブラウザでの表示が速くなり、リクエスト数が減れば大規模サイトではサーバー負荷の軽減にもなる。

常にネットワークに接続している必要があるため、開発時にオフラインでの開発ができなくなる。

利用するネットワークによってはホスティング先のネットワークへの接続が遅くなる場合もあり、そういったケースが多く発生する場合にはダウンロードしたものを利用するといいでしょう。

２．jQuery をダウンロードする

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
＜CDNからの利用＞
「jquery google api」で検索。

https://developers.google.com/speed/libraries/
「jQuery」を選択
```

## _
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
3.x snippet:
```
といったURLをコピー。
```
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</body>
```

## jQueryの基本まとめ - HTMLを操作しよう -
https://qiita.com/_upto_me_/items/003112b762646ede3e56


## はじめてajaxを使うときに知りたかったこと
jQuery で Ajax を行うのにあたり、同一ドメインにアクセスする際には問題ないけど、違うドメインにアクセスしようとする場合、何らかの対応が必要になります。  
https://qiita.com/nekoneko-wanwan/items/bedc0e826c0842ca0b11


## jQueryの$.getを使うと javascriptの部分がすっきりします。
https://www.muratayusuke.com/2011/05/28/access-control-allow-origin/
```js
query = "./getmurata.php?url=http://www.muratayusuke.com/";
$.get(query,function(data){
	console.log(data);
});
```
https://www.webprofessional.jp/jsonp-examples/
```js
$.getJSON(
  "http://run.plnkr.co/plunks/v8xyYN64V4nqCshgjKms/data-1.json",
  function(json) { console.log(json); }
);
```