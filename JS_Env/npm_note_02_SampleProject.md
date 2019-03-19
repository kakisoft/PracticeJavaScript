## 新人にドヤ顔で説明できるか、今風フロントエンド開発ハンズオン(Git/Node.js/ES6/webpack4/Babel7)  
https://qiita.com/riversun/items/29d5264480dd06c7b9fb

## _
```
（作業フォルダにて実行）
npm init
　→Enter 9回ぐらい

npm install --save-dev webpack webpack-cli webpack-dev-server

vi index.html

mkdir src
cd src/

vi index.js

cd ..
vi package.json
------------------------------------
  "scripts": {
    "start": "webpack-dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
------------------------------------

npm run start

```



## index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example</title>
</head>
<body>
<script src="main.js"></script>
</body>
</html>
```

## src/index.js
```js
alert("hello");
```

## package.json
```json
{
  "name": "es6hello",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Tom Misawa <riversun.org@gmail.com> (https://github.com/riversun)",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.19.1",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.8"
  }
}
```