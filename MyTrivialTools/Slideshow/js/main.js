(function() {
  'use strict';

  var files = [
    'img/food0.jpg',
    'img/food1.jpg',
    'img/food2.jpg',
    'img/food3.jpg'
  ];

  var currentNum = 0;
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var target = document.getElementById('target');
  var thumbnails = document.getElementById('thumbnails');

  var play = document.getElementById('play');
  var pause = document.getElementById('pause');
  var timer;

  var SLIDESHOW_DURATION = 1500;

  var CLASS_CURRENT = 'current';
  var CLASS_HIDDEN = 'hidden';
  var CLASS_NONE = '';

  function createThumbnails() {
    var i;
    var li;
    var img;
    for (i = 0; i < files.length; i++) {
      li = document.createElement('li');
      // li.setAttribute('data-index', i);
      li.dataset.index = i;
      li.addEventListener('click', function() {
        target.src = this.children[0].src;
        thumbnails.children[currentNum].className = CLASS_NONE;
        currentNum = this.dataset.index;
        this.className = CLASS_CURRENT;
      });
      img = document.createElement('img');
      img.src = files[i];
      li.appendChild(img);
      thumbnails.appendChild(li);
    }
  }

  function playSlideshow() {
    timer = setTimeout(function() {
      next.click();
      playSlideshow();
    }, SLIDESHOW_DURATION);
  }

  createThumbnails();

  thumbnails.children[currentNum].className = CLASS_CURRENT;

  prev.addEventListener('click', function() {
    thumbnails.children[currentNum].className = CLASS_NONE;
    currentNum--;
    if (currentNum < 0) {
      currentNum = files.length - 1;
    }
    target.src = files[currentNum];
    thumbnails.children[currentNum].className = CLASS_CURRENT;
  });

  next.addEventListener('click', function() {
    thumbnails.children[currentNum].className = CLASS_NONE;
    currentNum++;
    if (currentNum > files.length - 1) {
      currentNum = 0;
    }
    target.src = files[currentNum];
    thumbnails.children[currentNum].className = CLASS_CURRENT;
  });

  play.addEventListener('click', function() {
    playSlideshow();
    this.className = CLASS_HIDDEN;
    pause.className = CLASS_NONE;
  });

  pause.addEventListener('click', function() {
    clearTimeout(timer);
    this.className = CLASS_HIDDEN;
    play.className = CLASS_NONE;
  });

})();