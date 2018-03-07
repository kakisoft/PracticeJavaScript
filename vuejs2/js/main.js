(function() {
  'use strict';

  // two way data binding (to UI)
  //双方向データバインディング
  //UIを更新したらデータが更新され、データが更新されたらUIが更新される

  //vm：View Model
  var vm = new Vue({
    el: '#app01',
    data: {
      name: 'kaki'
    }
  });
})();