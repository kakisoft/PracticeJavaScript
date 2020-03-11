//＜参考＞
// ## Node.jsでhttps.getしてJSONパースする方法
// https://techacademy.jp/magazine/16447

const https = require('https');
const targetURL = "https://qiita.com/wakaba130/items/5f54aed913156dc4438f.json";
const req = https.request(targetURL, (res) => {
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('JSONデータは以上です。');
    });
})

req.on('error', (e) => {
  console.error(`エラーが出ました： ${e.message}`);
});

req.end();


/*

1行目の、const https = require(‘https’);では、npmモジュールのhttpsを呼び出しています。

2行目の、const req = https.request(‘https://qiita.com/wakaba130/items/5f54aed913156dc4438f.json’, (res) => {では、https://qiita.com/wakaba130/items/5f54aed913156dc4438f.jsonで指定したURLの結果取得できるJSONを処理しています。

最終的には定数reqに代入しています。

3行目の、res.on(‘data’, (chunk) => {では、res.onイベントをdataを指定して使用する事でパース処理を開始しています。

4行目の、console.log(`取得内容： ${chunk}`);では、3行目のchunkをconsole.logで表示しています。

console.logを利用すると、デベロッパーツールのConsoleにも表示する事が可能です。

5行目の、});では、3行目の処理を終了しています。

6行目の、res.on(‘end’, ( ) => {では、res.onイベント処理を終了する宣言をしています。

必ず、このres.on(‘end’処理を記載する必要があります。

7行目の、console.log(‘JSONデータは以上です。’);では、JSONデータは以上です。というテキストを表示する事でユーザーに処理の終了を明示しています。

8行目の、});では6行目の処理を終了しています。

9行目の、})では、2行目の処理を終了しています。

10行目の、req.on(‘error’, (e) => {では、リクエストがエラーだった場合の処理をしています。

11行目の、console.log(`エラーが出ました： ${e.message}`);では、 ${e.message}に代入されているエラーメッセージが出力されます。

12行目の、});3行目の処理を終了します

13行目の、req.end( );では、リクエスト処理を終了します。

*/