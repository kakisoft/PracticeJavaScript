///////////////////////////////////////////////////////////
// csvtojson
// https://www.npmjs.com/package/csvtojson
// 
// npm i csvtojson
///////////////////////////////////////////////////////////

const request=require('request')
const csv=require('csvtojson')
 
csv()
.fromStream(request.get('http://mywebsite.com/mycsvfile.csv'))
.subscribe((csvLine)=>{ console.log(csvLine) } )



// const request=require('request')
// const csv=require('csvtojson')
 
// csv()
// .fromStream(request.get('http://mywebsite.com/mycsvfile.csv'))
// .subscribe((json)=>{
//     return new Promise((resolve,reject)=>{
//         // long operation for each json e.g. transform / write into database.
//     })
// },onError,onComplete);


