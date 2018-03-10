(function() {
  'use strict';

  //==================================
  // Components
  //    部品を再利用するための仕組み。
  //      独自のタグを作成して、部品として配置できる。
  //==================================
  var myComponent1 = Vue.extend({
    //-----( テンプレートに書ける要素は１つのみ。)-----
    template: '<button>Component</button>'
    //-----( ↓の書き方だとNG。)-----
    // template: '<button>Like</button><button>Like</button>'
  });

  var myComponent2 = Vue.extend({
    //-----( 複数の要素を持たせる場合、何らかの親要素で囲む。)-----
    template: '<div><button>tmplete2-1</button><button>tmplete2-1</button></div>'
  });

  var appA = new Vue({
    el: '#app01',
    components: {  //Componentのdataは、関数で返さなければならないというルールがある。
      'my-component1': myComponent1, 
      'my-component2': myComponent2   // htmlタグ名：vue.jsファンクション名
    }
  });

  //==================================
  // 
  //==================================
  var likeComponent2 = Vue.extend({
    data: function() {
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">Like {{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
      }
    }
  });

  var appB = new Vue({
    el: '#app02',
    components: {
      'like-component2': likeComponent2
    }
  });

  //=========================================
  //  コンポーネントから親要素に値を渡す
  //    Component からイベントを発火して、親要素にて検出する。
  //    イベントの発火には emitを使う。 
  //=========================================
  var likeComponent3 = Vue.extend({
    // props: ['message'],   //カスタム属性を Componentで受け取るには、propsキーワードが必要となる。
    props: {  //デフォルト値や型を指定できる
      message: {
        type: String,
        default: 'Like'
      }
    },
    data: function() {
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
        this.$emit('increment');
      }
    }
  });

  var appC = new Vue({
    el: '#app03',
    components: {
      'like-component3': likeComponent3
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function() {
        this.total++;
      }
    }
  });

})();