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

