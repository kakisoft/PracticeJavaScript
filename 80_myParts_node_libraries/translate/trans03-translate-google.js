///////////////////////////////////////////////////////////
// translate-google
// https://www.npmjs.com/package/translate-google
// 
// npm i translate-google
///////////////////////////////////////////////////////////

const translate = require('translate-google')

//---------------------------------------------------------------
const tranObj01 = {
  a: 1,
  b: '1',
  c: "How are you?\nI'm nice.",
  d: [true, 'true', 'hi', { a: 'hello', b: ['world']}],
}
 
translate(tranObj01, {to: 'zh-cn', except:['a']}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})

//---------------------------------------------------------------
translate('I speak Chinese', {to: 'zh-cn'}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})

//---------------------------------------------------------------
translate('I speak Chinese!', {from: 'en', to: 'zh-cn'}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})

//---------------------------------------------------------------
translate({a: 'I speak Chinese!', b: ['hello', 'world']}, {from: 'en', to: 'zh-cn'}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})

//---------------------------------------------------------------

//==============================================================================
const tranObj02 = 
[
     'broken haze'
    ,'shy unit'
    ,'divine truth'
    ,'billowing credit'
    ,'throbbing poetry'
    ,'twilight shadow'
    ,'snowy boat'
    ,'nameless moon'
    ,'dark wind'
    ,'snowy fog'
]
   
  translate(tranObj02, {from: 'en', to: 'ja'}).then(res => {
      console.log('aaaa');
      console.log(res)
  }).catch(err => {
      console.error(err)
  })

//==============================================================================


