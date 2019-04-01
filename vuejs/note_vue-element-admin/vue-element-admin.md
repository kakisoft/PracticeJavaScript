# vue-element-admin
https://github.com/PanJiaChen/vue-element-admin  
https://panjiachen.github.io/vue-element-admin-site/  

# vuex
https://vuex.vuejs.org/guide/


# Element （el-XX のタグは、多分これ。）
https://element.eleme.io/
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

## dashboard
src/views/dashboard/index.vue



## _
```
    <div style="position:relative;">{{ avatar }}
      <pan-thumb :image="avatar" class="panThumb"/>
      <mallki class-name="mallki-text" text="vue-element-admin"/>
      <div style="padding-top:35px;" class="progress-item">
        <span>Vue</span>
        <el-progress :percentage="70" :show-text="false" />
```