(function() {
  'use strict';

  // two way data binding (to UI)
  //双方向データバインディング
  //UIを更新したらデータが更新され、データが更新されたらUIが更新される

  //==========================
  //         app01
  //==========================
  //vm：View Model
  var vm01 = new Vue({
    el: '#app01',
    data: {
      name: 'kaki'
    }
  });

  //==========================
  //         app02
  //==========================
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

  //==========================
  //         app03
  //==========================
  var vm03 = new Vue({
    el: '#app03',
    data: {
      newItem: '',
      todos: []
      // todos: [{
      //   title: 'task 1',
      //   isDone: false
      // }, {
      //   title: 'task 2',
      //   isDone: false
      // }, {
      //   title: 'task 3',
      //   isDone: true
      // }]
    },
    methods: {
      //この記述が無いと、formがsubmitされて画面が遷移し、上手く行かない。（html側のディレクティブにて対処する方法もある）
      // addItem: function(e) {
      //   e.preventDefault();
      //   this.todos.push(this.newItem);
      // }
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      }
    }
  });

  //==========================
  //         app04
  //==========================
  var vm04 = new Vue({
    el: '#app04',
    data: {
      newItem: '',
      todos: [{
        title: 'task 1',
        isDone: false
      }, {
        title: 'task 2',
        isDone: false
      }, {
        title: 'task 3',
        isDone: true
      }]
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      }
    }
  });

  //==========================
  //         app05
  //==========================
  var vm05 = new Vue({
    el: '#app05',
    data: {
      newItem: '',
      todos: [{
        title: 'task 1',
        isDone: false
      }, {
        title: 'task 2',
        isDone: false
      }, {
        title: 'task 3',
        isDone: true
      }]
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      },
      purge: function() {
        if (!confirm('delete finished?')) {
          return;
        }
        // this.todos = this.todos.filter(function(todo) {
        //   return !todo.isDone;
        // });
        this.todos = this.remaining;
      }
    },
    //データから動的にプロパティを計算する
    computed: {
      remaining: function() {
        // var items = this.todos.filter(function(todo) {
        //   return !todo.isDone;
        // });
        // return items.length;
        return this.todos.filter(function(todo) { //フィルタリングした配列を返している
          return !todo.isDone;
        }); 
      }
    }
  });

  //==========================
  //         app06
  //==========================
  var vm06 = new Vue({
    el: '#app06',
    data: {
      newItem: '',
      todos: [{
        title: 'task 1',
        isDone: false
      }, {
        title: 'task 2',
        isDone: false
      }, {
        title: 'task 3',
        isDone: true
      }]
    },
    //watchで指定したデータの監視ができる
    watch: {
      //----------------------------
      // todosに何か変更があった時には次の処理をする
      // この書き方では、チェックした時はイベントが走らない。（配列そのものに変更は検知するが、配列の要素が変わったイベントは検知しない）
      //----------------------------
      // todos: function() {
      //   localStorage.setItem('todos', JSON.stringify(this.todos)); //Edge未対応？
      //   alert('Data saved!');
      // }
      //----------------------------
      // 要素の変更までを検知する場合、deep watchという仕組みを使う。
      //----------------------------
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
          console.log('Data saved!');
        },
        deep: true
      }
    },    
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      },
      purge: function() {
        if (!confirm('delete finished?')) {
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        }); 
      }
    }
  });

})();