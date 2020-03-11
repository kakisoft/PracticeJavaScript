///////////////////////////////////////////////////////////
// csvtojson
// https://www.npmjs.com/package/csvtojson
// 
// npm i csvtojson
///////////////////////////////////////////////////////////

const csvFilePath = 'sample01.csv'
//

const csv=require('csvtojson');
const request=require('request')
 
const readStream=require('fs').createReadStream(csvFilePath);
 
const writeStream=request.put('http://mysite.com/obj.json');
 
readStream.pipe(csv()).pipe(writeStream);




