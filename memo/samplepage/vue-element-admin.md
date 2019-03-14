# vue-element-admin
https://github.com/PanJiaChen/vue-element-admin  
https://panjiachen.github.io/vue-element-admin-site/  

# vuex
https://vuex.vuejs.org/guide/

____________________________________________________________________
____________________________________________________________________
## デバッグメモ
```
わかんなかったら、とりあえず {{value}} でトレース。
```

## 構文メモ
```
<router-view/>    ->     
```

____________________________________________________________________
____________________________________________________________________
## src/lang/en.js
メニューの文字列がある。  
ナビゲータを追加/編集したりするのもここ。


## src/router/index.js
これから消したらメニューから消える


## src/views/layout/components/Navbar.vue
上段メニュー


## src/views/layout/Layout.vue
全体的な構成（サイドバーとかナビゲーションメニューとか）


## Topから辿る
```
index.html
　  ↓
src/App.vue
　  ↓
src/router/index.js（多分）
```
