///////////////////////////////////////////////////////////
// ttranslate
// https://www.npmjs.com/package/translate
// 
// npm i translate
///////////////////////////////////////////////////////////

// async/await. Options can be a language name (ISO 639)
const text = await translate('Hello world', 'es');
console.log(text);  // Hola mundo
 
// Promises with .then(). Options can also be an object
// translate('こんにちは世界', { from: 'ja', to: 'es' }).then(text => {
//   console.log(text);  // Hola mundo
// });


/*
const text = await translate('Hello world', 'es');
             ^^^^^

SyntaxError: await is only valid in async function
    at new Script (vm.js:84:7)


*/