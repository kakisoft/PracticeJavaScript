## プロトタイプ
```js
a = new LolPricingSimulator()
a.__proto__.x = () => console.log("x")
a.x()     //-> "x"    // 　メソッドが追加される。

b = new LolPricingSimulator()
b.x()     //-> "x"    // 新しく作成したインスタンスにも影響する。

a.x = () => console.log("y")    // メソッドを書き換える事ができる。
a.x()     //-> "y" 
b.x()     //-> "x"    // 後で作成したインスタンスには影響しない。
```


