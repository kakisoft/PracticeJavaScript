///////////////////////////////////////////////////////////
// convert-csv-to-json
// https://www.npmjs.com/package/convert-csv-to-json
// 
// npm i convert-csv-to-json
// ※ csvtojson の類似品
//
///////////////////////////////////////////////////////////


let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'samplecsv01.csv'; 
let fileOutputName = 'samplecsv01.json';
 
csvToJson.fieldDelimiter(',');
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
