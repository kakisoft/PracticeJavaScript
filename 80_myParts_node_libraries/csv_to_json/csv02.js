/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## csv
https://www.npmjs.com/package/csv
https://csv.js.org/
https://csv.js.org/parse/

 * csv-generate
 * csv-parse
 * stream-transform
 * csv-stringify

 が含まれている。


＜インストール＞
 npm i csv

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/


const parse = require('csv-parse')
const assert = require('assert')

parse(`
"key_1","key_2"
"value 1","value 2"
`.trim(), {
  columns: true
}, function(err, records){
  assert.deepEqual(
    records, [{
      key_1: 'value 1',
      key_2: 'value 2'
    }]
  )
})


// 正直、このサンプルプログラムではさっぱり分からん。
