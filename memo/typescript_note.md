# TypeScript

## * 概要
- マイクロソフト
- TypeScript -> JavaScript（トランスパイル）
- 静的な型付け
- クラスベースのオブジェクト指向


## 公式サイト
https://www.typescriptlang.org/  
「Playground」にて、どんなjsに変換されるか、確認できる。  
　  
　  
### インストール
```
sudo npm install -g typescript
```
　  
### バージョン確認
```
tsc --version
```
　  
### コンパイル
```
tsc main.ts
```
　  
### ES5でコンパイル
```
tsc main.ts -t ES5
```
「error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.」  
というエラーメッセージが出た場合、こっちを使う。

### 外部ファイルをまとめてコンパイル
```
tsc main.ts -t ES5 --out bundled-typescript-file.js
```
このオプションをつけないと、別ファイルとしてjsが作成される。
　  
### 実行
```
node main.js
```
　  
