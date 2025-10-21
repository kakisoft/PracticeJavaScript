## package.json と package.lock.json の違い
## npm install と npm ci の違い
package.json で言ってる事 ： 必要なライブラリ一覧。（例：axios が必要です。）
package.lock.json で言ってる事： package.json で示したライブラリを使うために必要なリスト。（例：axios を使うために必要な依存関係を用意しました。結果はこれです。）

npm install を実行すると、package.json を基に package.lock.json を作成 or 更新する。その後、ライブラリをインストールする。
npm ci を実行すると、package.lock.json を基にライブラリをインストールする。（ci は、clean install の事）

バージョンを完全に合わせたいなら npm ci を実行。
その場合、リポジトリ管理に package.lock.json を入れておく。


## ログ出力先を指定して実行
```
npm run start 1> ~/log/dashboard.log 2> ~/log/dashboard.err
```

1 - 標準出力
2 - 標準エラー出力

※この番号は、OSやシェルの基本的な仕様。


## グローバルインストールされたアプリ一覧
```
npm list -g
```

## install dependencies
```
npm install
```

## serve with hot reload at localhost:3000
```
npm run dev
```

## build for production and launch server
```
npm run build
npm start
```

## generate static project
```
npm run generate
```


## npmの--save, --save-dev, --save-optionalの違いAdd Star
```
1. --save は package.json の dependencies に追記される。
アプリケーションの実行に必要なパッケージ	

2. --save-dev は package.json の devDependencies に追記される。
開発時に利用するパッケージ


http://d.hatena.ne.jp/seinzumtode/20160226/1456450867
https://the2g.com/2280
```


## npm run
タスク一覧を表示

## npm run XXX
ビルド。  
package.json に書かれたスクリプトを実行する。  
　  
こういう package.json があった時、
```json
{
  "scripts": {
    "build": "browserify src/main.js > build/bundle.js"
  }
}
```
npm run build  
と実行すると、「"build"」の内容が実行される。


## npm-run-all build:*  （「build:js」「build:css」）
https://github.com/mysticatea/npm-run-all


## npm run watch
ターミナルで実行し続け、関連ファイル全部の変更を監視する。


## npm run watch-poll
特定の環境のWebpackでは、ファイル変更時に更新されないことがあるらしい。  
その場合、こっちを使う。

## npm install option
--save          は package.json の dependencies    に追記される。    
--save-dev      は package.json の devDependencies に追記される。    
--save-optional は package.json の optionalDependencies に追記される。    
    
それぞれの違いだが、package.jsonがモジュールとして外部に公開し、他の人がnpm installした時に影響する。    
他の人が npm install した時に、dependencies に指定したパッケージが全てインストールされる。

https://qiita.com/msakamoto_sf/items/a1ae46979a42d6948ebd

オプションを指定しない場合、「 --save 」と同じ動きをする。

## --unsafe-perm
--unsafe-perm フラグは、npm install コマンドのオプションであり、
npm に root レベルのアクセス許可でスクリプトを実行するように指示します。
デフォルトでは、npm はスクリプトの実行時に特権を削除します。
つまり、ルート レベルのアクセス許可が必要な場合、一部の操作が失敗する可能性があります。

--unsafe-perm フラグを使用すると、このセキュリティ対策をバイパスできますが、セキュリティの脆弱性が生じる可能性があるため、
このオプションは注意して使用することが重要です。 --unsafe-perm フラグの使用はできるだけ避け、代わりに適切な権限を持つユーザー アカウントを使用することをお勧めします。

--unsafe-perm フラグを使用する必要がある場合は、必要な場合にのみ使用し、使用範囲をできる限り制限することをお勧めします。
たとえば、グローバルに使用するのではなく、特定のインストールまたはコマンドに使用できます。


_____________________________________________________________________
## npm start
package.json の scripts.start に指定された文字列を実行。  
( “node server.js” とか)

## npm --help start
-

_____________________________________________________________________
# npx

 * npm パッケージのダウンロードと実行を同時に行う。  
 * ローカルにインストールしたnpmパッケージを、npxコマンドで実行できる。



# npm ci
（公式）  
https://docs.npmjs.com/cli/v8/commands/npm-ci  
This command is similar to npm install, except it's meant to be used in automated environments such as test platforms, continuous integration, and deployment -- or any situation where you want to make sure you're doing a clean install of your dependencies.  


https://qiita.com/mstssk/items/8759c71f328cab802670  
npm ci を実行すると常に package-lock.json から依存関係をインストールします。  
既に node_modules フォルダの中身があっても一旦削除します。  

従来の npm install コマンドを実行すると、 package.json と package-lock.json の両方を見て依存関係の解決と依存パッケージの node_modules へのインストールを行います。  
package.json を解決して必要に応じてロックファイルである package-lock.json の更新もします。  

一方で npm ci は package.json の依存関係の解決を行わず、常に package-lock.json を見て依存パッケージをダウンロードし node_modules の洗い替えを行います。  


_____________________________________________________________________
## package.json
```
evDependencies以下には、このプロジェクトで利用するパッケージが記述される。  
プロジェクトがこのパッケージに依存しているので依存パッケージとも呼ぶ。

devDependencies以下にある "webpack": "^4.19.0"は"[パッケージ名]":"^[バージョン]"　の意味となる。

^4.19.0は、パッケージのバージョン「Ｘ」が、『 4.19.0 ≦ Ｘ＜ 5.0.0 』の範囲ならOKという意味
https://docs.npmjs.com/misc/semver
```

## package-lock.json
依存パッケージのバージョン番号を、メジャー・マイナー・パッチ　すべて固定（ロック）するために使用する。  
自動的に追加される。


## node_modules
「npm install」を実行すると作成される。  
gitのリポジトリ管理に含めない。


## webpack-dev-server
npm run startで起動されたWebサーバー。  
コマンドラインでwebpack-dev-serverと入力するだけでも起動できる。


## SRI（Subresource Integrity）
スクリプトのハッシュ値を計算することによって改ざんされていないかどうか検証することができる。  
https://tosi-tech.net/2017/01/verify-cdn-script-by-sri/


_____________________________________________________________________
# package.json / package-lock.json / ci

## npm install と npm ci の違い
npm install - package.json を見てインストールする
npm ci      - package-lock.json を見てインストールする

package.json      - パッケージのバージョン範囲を指定する
package-lock.json - インストールされた正確なバージョンを記録する。


## npm installとnpm ciの違い
https://new-lamp.hatenablog.com/entry/2021/10/23/102630


### npm install
npmi iはpackage.jsonを見てライブラリをインストールする。
pacakge.jsonのバージョン指定には幅があるため、npm iする時期によってはpackage.json.lockを書き換える。
つまり完全に同じ開発環境を再現できない(可能性がある)。


### npm ci

 * node_modules ディレクトリの削除
 * package-lock.json と package.json の整合性のチェック。違ったらエラーを吐く。
 * package-lock.json から node_modules を再現

npm iではなくnpm ciを使うことで完全に同じバージョンのライブラリをインストールすることができる。  

_____________________________________________________________________
# セキュリティ

## vulnerabilities が出た時のチェック
```
npm audit
```

## ライブラリの依存関係をチェック
```
npm ls axios
```

＜出力例＞
```
c433c2130b74:/dashboard2# npm ls axios
dashboard2@0.0.1 /dashboard2
`-- openapi-zod-client@1.18.2
  +-- @zodios/core@10.9.6
  | `-- axios@1.7.3 deduped
  `-- axios@1.7.3
```

## 修正コマンド
```
npm audit fix
```

## 利用可能な新しいバージョンが存在するものを一覧表示
```
npm outdated
```

## 
```
npx npm-check-updates -u
```

## npm install 時のメッセージ例
```
added 959 packages, and audited 960 packages in 37s

208 packages are looking for funding
  run `npm fund` for details

3 vulnerabilities (2 moderate, 1 high)

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
```

_____________________________________________________________________
# npx ( Node Package eXecute )
パッケージを一時的に実行するためのツール。
特に、コマンドラインツールを一時的に使いたい場合や、グローバルにインストールせずにツールを実行したい場合に便利。

＜主な機能＞
ローカルパッケージの実行。 プロジェクトの node_modules にインストールされているコマンドを直接実行する。
グローバルにインストールせずにツールを実行。必要なときだけツールを実行するために、一時的にパッケージをインストールして実行する。

node_modules/.bin のファイルを直接呼び出せる。


