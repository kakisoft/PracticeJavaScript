///////////////////////////////////////////////////////////
// csvtojson
// https://www.npmjs.com/package/csvtojson
// 
// npm i csvtojson
///////////////////////////////////////////////////////////

// csvStr = `1,2,3
// 4,5,6
// 7,8,9`;

// const csv=require('csvtojson')
// csv({output:"line"})
// .fromString(csvStr)
// .subscribe((csvLine)=>{ 
//     // csvLine =>  "1,2,3" and "4,5,6"
//     console.log(csvLine);
// })


const csvFilePath = 'sample01.csv'
const csv = require('csvtojson')
csv()
.fromFile(csvFilePath)
.subscribe((csvLine)=>{ console.log(csvLine) } )
.then((csvRow)=>{ console.log(csvRow) })


