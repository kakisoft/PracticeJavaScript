///////////////////////////////////////////////////////////
// google-translate-api 
// https://www.npmjs.com/package/google-translate-api
// 
// npm install --save google-translate-api
///////////////////////////////////////////////////////////


const translate = require('google-translate-api');
 
//=====================================
//
//=====================================

// translate('Ik spreek Engels', {to: 'en'}).then(res => {
//     console.log(res.text);
//     //=> I speak English
//     console.log(res.from.language.iso);
//     //=> nl
// }).catch(err => {
//     console.error(err);
// });



//=====================================
//
//=====================================

// translate('I spea Dutch!', {from: 'en', to: 'nl'}).then(res => {
//     console.log(res.text);
//     //=> Ik spreek Nederlands!
//     console.log(res.from.text.autoCorrected);
//     //=> true
//     console.log(res.from.text.value);
//     //=> I [speak] Dutch!
//     console.log(res.from.text.didYouMean);
//     //=> false
// }).catch(err => {
//     console.error(err);
// });


//=====================================
//
//=====================================

// translate('I spea Dutch!', {from: 'en', to: 'nl'}).then(res => {
//     console.log(res);
//     console.log(res.text);
//     //=> Ik spea Nederlands!
//     console.log(res.from.text.autoCorrected);
//     //=> false
//     console.log(res.from.text.value);
//     //=> I [speak] Dutch!
//     console.log(res.from.text.didYouMean);
//     //=> true
// }).catch(err => {
//     console.error(err);
// });


/*

{ Error
    at /Users/kaki/javascript/81_nodeConsole/node_modules/google-translate-api/index.js:105:17
    at processTicksAndRejections (internal/process/next_tick.js:81:5) code: 'BAD_REQUEST' }
*/


/*

https://github.com/matheuss/google-translate-api/issues/70

https://github.com/matheuss/google-translate-api/issues/11

https://stackoverflow.com/questions/52788537/nodejs-google-translate-api-bad-request

*/