'use strict';

//==============================
//            if
//==============================
const score = 50;

if (score >= 80) {
  console.log('Great!');
} else if (score >= 60) {
  console.log('Good.');
} else {
  console.log('OK...');
}


//==========< 複合条件 >==========
const name = 'kaki';

// && なおかつ（AND）
// || もしくは（OR）
// ! 〜ではない（NOT）
if (score >= 50 && name === 'kaki') {
    console.log('Good job!');
}


//==============================
//         三項演算子
//==============================
score >= 80 ? console.log('Great!') : console.log('OK...!');


//==============================
//          switch
//==============================
const signal = 'pink';

switch (signal) {
  case 'red':
    console.log('Stop!');
    break;
  case 'yellow':
    console.log('Caution!');
    break;
  case 'blue':
  case 'green':
    console.log('Go!');
    break;
  default:
    console.log('Wrong signal!');
    break;
}




