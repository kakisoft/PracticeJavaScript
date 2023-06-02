## （自前のリポジトリ）Laravel - React - Next.js
https://github.com/kakisoft/PracticeLaravelReactNext


## LaravelでReactフレームワークのNext.js使う方法 | webOpixel
https://www.webopixel.net/php/1724.html


________________________________________________________________________
## Next js解説 Reactとの違いは？
https://www.youtube.com/watch?v=95UbO086ss8

特徴
 * SSR（サーバサイドレンダリング）
 * SG（静的サイト作成）
 * ルーティング

React 単体で使う事はあまりなく、Next.js と組み合わせて使う事が多い？


### ルーティング（React）
React Router（ライブラリ）を使う
```js
<Router>
    <Switch>
        <Route path="" component={Home}/>
        <Route path="/sub" component={Sub}/>
    </Switch>
</Router>
```

### ルーティング（Next.js）
pagesディレクトリにルーティングさせたいファイルを置く
```
pagess
 ┣ index.js
 ┗ index.js
```


## CSR
ブラウザ（クライアント側）でページを作成する


