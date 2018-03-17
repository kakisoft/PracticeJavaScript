(function() {
  'use strict';

  var stage = document.getElementById('stage');
  var ctx;
  var count = 0;
  // var dim = 5;
  var dim;
  var size;
  var answer = [];
  var isPlaying = true;

  function init() {
    dim = Math.floor(count / 3) + 2;
    size = Math.floor(stage.width / dim);
    answer = [
      Math.floor(Math.random() * dim),
      Math.floor(Math.random() * dim)
    ];
  }

  function draw() {
    var x;
    var y;
    var offset = 2;
    var baseColor;
    var answerColor;
    var hue;
    var lightness;

    hue = Math.random() * 360;
    baseColor = 'hsl(' + hue + ', 80%, 50%)';
    lightness = Math.max(75 - count, 53);
    answerColor = 'hsl(' + hue + ', 80%, ' + lightness + '%)';

    ctx.clearRect(0, 0, stage.width, stage.height);

    for (x = 0; x < dim; x++) {
      for (y = 0; y < dim; y++) {
        if (answer[0] === x && answer[1] === y) {
          ctx.fillStyle = answerColor;
        } else {
          ctx.fillStyle = baseColor;
        }
        ctx.fillRect(
          // 0, 50, 100, ...
          size * x + offset,
          size * y + offset,
          size - offset * 2,
          size - offset * 2
        );
        // ctx.fillStyle = '#000';
        // ctx.textBaseline = 'top';
        // ctx.fillText(x + ', ' + y, size * x, size * y);
      }
    }
  }

  if (typeof stage.getContext === 'undefined') {
    return;
  }
  ctx = stage.getContext('2d');
  // console.log(answer);

  stage.addEventListener('click', function(e) {
    var rect;
    var x;
    var y;
    var replay = document.getElementById('replay');
    if (isPlaying === false) {
      return;
    }
    // console.log(e.pageX);
    // console.log(e.pageY);
    rect = e.target.getBoundingClientRect();
    // console.log(e.pageX - rect.left - window.scrollX);
    // console.log(e.pageY - rect.top - window.scrollY);
    x = e.pageX - rect.left - window.scrollX;
    y = e.pageY - rect.top - window.scrollY;
    // console.log(Math.floor(x / size));
    // console.log(Math.floor(y / size));
    if (
      answer[0] === Math.floor(x / size) &&
      answer[1] === Math.floor(y / size)
    ) {
      // console.log('Hit!');
      count++;
      init();
      draw();
    } else {
      alert('Your score: ' + count);
      isPlaying = false;
      replay.className = '';
    }
  });

  init();
  draw();
})();