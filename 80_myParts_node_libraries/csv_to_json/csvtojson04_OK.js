///////////////////////////////////////////////////////////
// csvtojson
// https://www.npmjs.com/package/csvtojson
// 
// npm i csvtojson
///////////////////////////////////////////////////////////

csvStr = `1,2,3
4,5,6
7,8,9`;

const csv = require('csvtojson')
csv({
    noheader:true,
    output: "csv"
})
.fromString(csvStr)
.then((csvRow)=>{ 
    console.log(csvRow) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
    // console.log(csvStr)
})


