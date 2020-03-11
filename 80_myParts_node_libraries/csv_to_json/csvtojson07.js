///////////////////////////////////////////////////////////
// csvtojson
// https://www.npmjs.com/package/csvtojson
// 
// npm i csvtojson
///////////////////////////////////////////////////////////

// const targetURL = "http://mywebsite.com/mycsvfile.csv";
const targetURL = "https://holidays-jp.github.io/api/v1/date.csv";

const request=require('request')
const csv=require('csvtojson')

csv()
.fromStream(request.get(targetURL))
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


