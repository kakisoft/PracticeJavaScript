///////////////////////////////////////////////////////////
// convert-csv-to-json
// https://www.npmjs.com/package/convert-csv-to-json
// 
// npm i convert-csv-to-json
// ※ csvtojson の類似品
//
///////////////////////////////////////////////////////////


let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'myInputFile01.csv'; 
let fileOutputName = 'myOutputFile01.json';
 
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

let json = csvToJson.getJsonFromCsv("myInputFile02.csv");
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}