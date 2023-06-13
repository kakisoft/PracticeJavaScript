ESLint

## 無効
### .eslintignore
```
src/*
```

_____________________


フロントエンドでは、すでにNode.jsを使用していますので、npmコマンドによるlint・format整形ツールの運用が一般的です。

# 使用ライブラリ
技術構成としては、以下を使用しています。

## lintツール
ESLint
https://eslint.org/

JavaScript／TypeScriptの静的解析ツール。
ESlintを導入することにより、コーディング規約やエラー出力のルールなどを定義することが可能。
複数人で開発する場合、コーディングにおけるシステム全体のコードの一貫性を維持することができる。

## format整形ツール
Prettier
https://prettier.io/

JavaScript／TypeScriptのformat整形ツール。
Node.js上で動作し、各開発者の環境に依存せずコードのフォーマットを統一させることが可能。
そのため、チーム内で予め定めたルールを自動的に適用させることができる。
JavaScript, JSX, TypeScript, html, cssなどの様々な言語に対応しているため、フロントエンドのソースコードを決められたコードスタイルに整形し、メンテナンス性を向上させることができるツール。
Prettierはlintツールと併用可能なことから、すでにESLintを使用しているプロジェクトに対してもコンフリクトを発生させずに導入できる。
ESLintとPrettierには異なるルールがあり、重複する内容も存在するため（Prettier vs. Linters · Prettier）、ESLintとPrettierの競合するルールは eslint-config-prettier を使って無効化する。
https://prettier.io/docs/en/comparison.html

### TypeScriptトランスパイラ＆静的型チェックツール
TSC（TypeScript Compiler）
https://www.typescriptlang.org/docs/handbook/2/basic-types.html#tsc-the-typescript-compiler

TypeScriptのソースコードをJavaScriptのソースコードに変換（トランスパイル）するためのツールであり、その過程で静的型チェックを行う。
tsc はTypeScriptのコンパイラを起動するコマンド。
tsc app.ts のように実行して、TypeScriptのファイルをJavaScriptにコンパイルする。（この場合、app.js が生成される）
tscはコードが型安全であることを保証し、プログラムの間違いを早期に検出できるため、開発中のバグを減らすことが可能となる。


## 使用方法
コマンドから実行
npmには npmコマンド と呼ばれるものがあり、package.json の scripts: {...//} に任意のコマンドを設定することで実行可能になる。

```
npm run ◯◯（scriptsに登録したコマンド名）
```

```
  "scripts": {
    ...
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,json}' && eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'",
    ...
  },

// このスクリプトを実行すると、Prettierが指定されたファイルの拡張子にマッチするすべてのファイルをフォーマットし、変更をファイルに直接書き込む。
```

 1. prettier : Prettierコマンドを実行。
 2. --write : ファイルを直接上書きしてフォーマットを適用。
 3. ./**/*.{js, jsx, ts, tsx, json} : フォーマット対象となるファイルのパターンを指定します。ここでは、js、jsx、ts、tsx、jsonの拡張子を持つすべてのファイルが対象となる。

ESLintやPrettierのVSCode拡張機能を入れると、後述するFormat On Save が使えるようになるため、総合的な開発の利便性が向上する。
npmコマンドに予めオプションも含めて設定することで、短いコマンドでカスタマイズしたコマンドを実行することができる。

```
npm run lint
```

```
npm run format
```

なお、上記で記載したESLint, Prettier, TSCは導入済み。

## Makefile実行
```
make lint
```

```
make format
```

Format On Save

vscodeの拡張機能をインストールし、設定ファイルを記述することでファイル保存時にformat整形を実行することが可能。
これにより、事前に用意したルールをもとに整形することでformat崩れを気にすることなく開発に注力できる。
これらの拡張機能・設定については client/.vscode/ の中にある extensions.json settings.jsonに予め記述済み。

## 各設定ファイルについて

### ESLint
```
client/.eslintrc.json
```

### Prettier
```
client/.prettierrc.json
```

### TSC
```
client/tsconfig.json
```

## 参考サイト
Prettierの導入方法　フロントエンド開発で必須のコード整形ツール
https://ics.media/entry/17030/

Prettierの設定オプションについてまとめてみた
https://zenn.dev/rescuenow/articles/c07dd571dfe10f



