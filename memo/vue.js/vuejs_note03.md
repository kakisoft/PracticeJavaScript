https://jp.vuejs.org/


## 仮想DOM
 * DOMは、仮想DOMを基に生成される。
 * データの更新とリアルなDOMの更新は、非同期に行われる。
 * DOMと紐付いたデータを更新しても、すぐにDOMを更新しない。（このため、データを更新した直後にDOMにアクセスしても、反映前の状態の事がある。）
 * 反映されたDOMにアクセスするためには、nextTick を使用する。（DOM更新を待ち受けるための仕組みを提供している。）
 * 差分のみが更新される
 * jQuery 等の DOM操作系ライブラリを使用すると、マウントした要素内のDOMを操作してもデータは変わらず、仮想DOMも更新されない。
 * DOMの更新はデータバインディングが基本となり、DOMにアクセスする場合、「$el」「$refs」、カスタムディレクティブと言う機能が提供されている。


## render
仮想DOMを return させる。  
https://aloerina01.github.io/blog/2017-03-08-1#browserify%E3%81%AE%E5%A0%B4%E5%90%88%E3%81%AFpackagejson%E3%81%AB%E8%BF%BD%E8%A8%98
```js
Vue.component(‘hello-world’, {
  render: function (createElement) {
    return createElement('p', this.name);
  }
})

```

## render: h => h(App)
https://qiita.com/teinen_qiita/items/ed1bb1909a17f9ca9daa
### 第１形態
```js
render: function (createElement) {
  return createElement(App)
}
```
### 第２形態
```js
render (createElement) {
  return createElement(App)
}
```
### 第３形態
```js
render (h) {
  return h(App)
}
```
### 第４形態
```js
render: h => h(App)
```
hというエイリアスは hyperscript から来ており、仮想DOMの実装でよく使われるらしい。



## $watch
http://phiary.me/vue-js-tips-watch/#post-h2-id-1
```js
demo.$watch('message', function(now, prev) {  
  console.log('changed:', prev, '->', now);
});
```







