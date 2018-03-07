(function() {
  'use strict';

  // two way data binding (to UI)
  //双方向データバインディング
  //UIを更新したらデータが更新され、データが更新されたらUIが更新される

  //vm：View Model
  var vm01 = new Vue({
    el: '#app01',
    data: {
      name: 'kaki'
    }
  });

  var vm02 = new Vue({
    el: '.app02',
    data: {
      todos: [
        'app02-1',
        'app02-2',
        'app02-3'
      ]
    }
  });

  var vm03 = new Vue({
    el: '#app03',
    data: {
      newItem: '',
      todos: [
        'task 1',
        'task 2',
        'task 3'
      ]
    },
    methods: {
      //この記述が無いと、formがsubmitされて画面が遷移し、上手く行かない。（html側のディレクティブにて対処する方法もある）
      // addItem: function(e) {
      //   e.preventDefault();
      //   this.todos.push(this.newItem);
      // }
      addItem: function() {
        this.todos.push(this.newItem); //data内のデータは、thisでアクセスできる。
        this.newItem = '';
      }
    }
  });
})();