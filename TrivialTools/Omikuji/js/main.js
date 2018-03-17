(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    var n = Math.random();
    if (n < 0.05) {
      this.textContent = '大吉'; // 5%
    } else if (n < 0.2) {
      this.textContent = '中吉'; // 15%
    } else {
      this.textContent = '凶'; // 80% 
    }
    // // var results = ['大吉', '中吉', '凶', '末吉'];
    // var results = ['大吉', '大吉', '大吉', '大吉', '凶'];
    // // var n = Math.floor(Math.random() * 4);
    // var n = Math.floor(Math.random() * results.length);
    // this.textContent = results[n];
  });
  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function() {
    this.className = '';
  });
})();