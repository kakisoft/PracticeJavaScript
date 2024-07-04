## 標準関数で対応
```js
// 現在の日付を取得
currentDate = new Date();
selectedDate = currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + ('0' + currentDate.getDate()).slice(-2);

```


## toISOString
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

JavaScript 時刻処理。
以下、タイムゾーンは Asia/Tokyo にて実行した時の内容。

```js
let d0 = new Date();
let d1 = new Date().toISOString();
```

出力結果
```
Thu Jul 04 2024 15:59:45 GMT+0900 (GMT+09:00)
2024-07-04T06:59:45.746Z
```
toISOString は、UTC で返るらしい。
なんじゃそりゃ。

使い物にならん。



## toLocaleString
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

正確には時間を扱うものではない？
```js
let d4 = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
```

引数が面倒。OSの環境変数から取得するのが結構億劫。


## date-fns
https://www.npmjs.com/package/date-fns
https://date-fns.org/docs/format

```js
let a1 = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
let a2 = format(new Date(), 'yyyy-MM-dd')
```
