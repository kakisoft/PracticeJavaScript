///////////////////////////////////////////////////////////
// haikunator
// https://www.npmjs.com/package/haikunator
// 
// npm install --save haikunator
///////////////////////////////////////////////////////////

var Haikunator = require('haikunator')

var hkn = new Haikunator({
    defaults: {
        tokenLength: 0,
        delimiter  : ' '
    }
})

var a1 = hkn.haikunate();
var n1 = hkn.nouns.length
var n2 = hkn.adjectives.length

console.log(n1)  //=> 96
console.log(n2)  //=> 91

//8736

console.log("===================================")

hkn.nouns.forEach(el => {
  console.log(el)  
});

console.log("===================================")

hkn.adjectives.forEach(el => {
    console.log(el)  
});

console.log("===================================")





