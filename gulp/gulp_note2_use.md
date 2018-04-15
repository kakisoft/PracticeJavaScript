## package.json作成（プロジェクトのメタ情報）
npm init

## プロジェクトディレクトリにインストール
```
npm install --save-dev gulp
（gulpをインストールしつつ、package.jsonに「gulpを使うよ」という情報を追加。）
（以下はエイリアス）
npm i -D gulp

package.json が更新される。
```

## 環境構築
```
上記の設定が終了した後、以下のコマンドで package.jsonを基に環境が出来上がる。

npm install
```