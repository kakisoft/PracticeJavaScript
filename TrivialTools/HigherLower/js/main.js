(function() {
  'use strict';

  var higher = document.getElementById('higher');
  var lower = document.getElementById('lower');
  var dealerCard = document.getElementById('dealer_card');
  var playerCard = document.getElementById('player_card');
  var wrapper = document.getElementById('wrapper');
  var result = document.getElementById('result');

  var dealerValue;
  var playerValue;

  function getRandom() {
    return Math.floor(Math.random() * 13 + 1);
  }

  function init() {
    dealerValue = getRandom();
    dealerCard.textContent = dealerValue;
    playerValue = getRandom();
    playerCard.textContent = playerValue;
    wrapper.removeEventListener('transitionend', init);
  }

  function check(guess) {
    var str;
    if (wrapper.classList.contains('open')) {
      return;
    }
    wrapper.classList.add('open');
    higher.classList.add('disabled');
    lower.classList.add('disabled');
    if (playerValue === dealerValue) {
      str = 'draw';
    } else {
      str = 'You ' + getResultStr(guess);
    }
    result.textContent = str;
    result.classList.remove('hidden');
  }

  function getResultStr(guess) {
    if (
      playerValue > dealerValue && guess === 'higher'
      || playerValue < dealerValue && guess === 'lower'
    ) {
      return 'win!';
    } else {
      return 'lose...';
    }
  }

  init();

  higher.addEventListener('click', function() {
    check('higher');
  });

  lower.addEventListener('click', function() {
    check('lower');
  });

  dealerCard.addEventListener('click', function() {
    if (result.classList.contains('hidden')) {
      return;
    }
    result.classList.add('hidden');
    wrapper.classList.remove('open');
    higher.classList.remove('disabled');
    lower.classList.remove('disabled');
    wrapper.addEventListener('transitionend', init);
  });
})();