(function() {
  'use strict';

  //==================================
  // Components
  //    部品を再利用するための仕組み。
  //      独自のタグを作成して、部品として配置できる。
  //==================================
  var likeComponent1 = Vue.extend({
    //-----( テンプレートに書ける要素は１つのみ。)-----
    template: '<button>Like</button>'
    //-----( ↓の書き方だとNG。)-----
    // template: '<button>Like</button><button>Like</button>'

    //-----( 複数の要素を持たせる場合、何らかの親要素で囲む。)-----
    // template2: '<div><button>Like</button><button>Like</button></div>'
  });

  var likeComponent2 = Vue.extend({
    //-----( 複数の要素を持たせる場合、何らかの親要素で囲む。)-----
    template: '<div><button>tmplete2-1</button><button>tmplete2-1</button></div>'
  });

  var app = new Vue({
    el: '#app01',
    components: {
      'like-component1': likeComponent1,
      'like-component2': likeComponent2
    }
  });

})();