///////////////////////////////////////////////////////////
// get-ssl-certificate
// https://www.npmjs.com/package/get-ssl-certificate
// 
// npm install --save get-ssl-certificate
///////////////////////////////////////////////////////////

/*--------------------
ロジックがちょっとイケてない。
「取得して、それをファイルに追記」を繰り返している。
それよりも、
「全部取得した後、ファイルに書き込む」
ってした方が良さそう。（書き込みが１回で済む）
ただ、このやり方だと、同期処理でOKという事に気が付いた。（fs.writeFileSync）
--------------------*/

const sslCertificate = require("get-ssl-certificate");
const fs = require("fs");
const eol = require('os').EOL;

const OUTPUT_FILE_NAME = "ssl_samplefile_01.txt";

const targetURL = [
 "github.com"
,"nodejs.org"
,"npmjs.com"
];

//----------< File Clear >----------
fs.writeFileSync(OUTPUT_FILE_NAME, "");

//----------< Write >----------
console.log('==========[ write start ]==========');
targetURL.forEach(el => {
  sslCertificate.get(el).then( (certificate) => {
  
    writeEl = JSON.stringify(certificate);
    // writeEl = JSON.stringify(certificate.issuer);
    writeEl += eol;
    
    try {
      fs.appendFile(OUTPUT_FILE_NAME, writeEl, 'utf-8',  (err) => {
        if (err) {
            throw err;
        }
      });

    }catch(e){
      console.log(e);
    }


  });
  
});
console.log('==========[ write end ]==========');

