### install dependencies
$ npm install # Or yarn install

### serve with hot reload at localhost:3000
$ npm run dev

### build for production and launch server
$ npm run build
$ npm start

### generate static project
$ npm run generate

_____________________________________________________________________

## npm install option
--save は package.json の dependencies に追記される。    
--save-dev は package.json の devDependencies に追記される。    
--save-optional は package.json の optionalDependencies に追記される。    
    
それぞれの違いだが、package.jsonがモジュールとして外部に公開し、他の人がnpm installした時に影響する。    
他の人が npm install した時に、dependencies に指定したパッケージが全てインストールされる。

https://qiita.com/msakamoto_sf/items/a1ae46979a42d6948ebd

_____________________________________________________________________

## npmの--save, --save-dev, --save-optionalの違いAdd Star
```
1. --save は package.json の dependencies に追記される。
アプリケーションの実行に必要なパッケージ	

2. --save-dev は package.json の devDependencies に追記される。
開発時に利用するパッケージ


http://d.hatena.ne.jp/seinzumtode/20160226/1456450867
https://the2g.com/2280
```

_____________________________________________________________________
## npm start
package.json の scripts.start に指定された文字列を実行。  
( “node server.js” とか)

## npm --help start



_____________________________________________________________________
## 新人にドヤ顔で説明できるか、今風フロントエンド開発ハンズオン(Git/Node.js/ES6/webpack4/Babel7)
https://qiita.com/riversun/items/29d5264480dd06c7b9fb



## プロジェクトを実行！npm startの使い方【初心者向け】
https://techacademy.jp/magazine/16393
