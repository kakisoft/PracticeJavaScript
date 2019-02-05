## ディレクティブ
テンプレートとロジックを関連づける機能。
v-if とか v-bind とかいったやつ。



## v-model
双方向バインディングに使用する。



## _
```
Chrome のコンソールで参照できるのは、「window.xxxx」の空間。

window['LolPricingSimulator'] = LolPricingSimulator;
の記述にて、window 名前空間から参照できるようにしている。


Vue.js は、小さな部品（コンポーネント）を、１つのアプリとして動作する。
```


## <script> タグに async / defer を付けた場合のタイミング
https://qiita.com/phanect/items/82c85ea4b8f9c373d684



## prototype.init


## Document.querySelector()
https://developer.mozilla.org/ja/docs/Web/API/Document/querySelector

JavaScriptから任意のHTML要素を検出・取得することができるメソッド。

指定されたセレクターまたはセレクターのグループに一致する、文書内の最初の Element を返します。




## Vue.component
```
グローバルに登録する事で、全てのコンポーネントから使用できる。

Vue.component('my-conponent', {
	template :'<p>MyComponent</p>'
} );
Vue.component('selectTerm', termTemplate);


第１引数：カスタムタグに使用する名前
第２引数：コンポーネントのオプションオブジェクト
```



## Vue.extend( options )
https://vuejs.org/v2/api/#Vue-extend



