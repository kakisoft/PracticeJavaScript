///////////////////////////////////////////////////////////
// get-ssl-certificate
// https://www.npmjs.com/package/get-ssl-certificate
// 
// npm install --save get-ssl-certificate
///////////////////////////////////////////////////////////

/*--------------------
改良版。
最初、単純にループを回しているだけだったが、それだと上手く行かず。
どうやら、sslCertificate.get　が内部的に非同期処理らしく、意図通りの処理順序とならなかった。
・・・考えてみたら当たり前か。

なので、async/await の出番。
--------------------*/

const sslCertificate = require("get-ssl-certificate");
const fs = require("fs");
const eol = require('os').EOL;

const OUTPUT_FILE_NAME = "ssl_samplefile_02.txt";

const targetURL = [
 "github.com"
,"nodejs.org"
,"npmjs.com"
];


let writeContents = [];

//------------------------------
//    Get Single Content
//------------------------------
const getSingleContent = async function(el) {
  await sslCertificate.get(el).then( (certificate) => { writeContents.push(certificate) });
}

//------------------------------
//      Write to File
//------------------------------
function writeToFile(){
  try {
    console.log('==========[ write start ]==========');
    serializedContents = JSON.stringify(writeContents);
    console.log(serializedContents)
    fs.writeFileSync(OUTPUT_FILE_NAME, serializedContents);
    console.log('==========[ write end ]==========');
  }catch(e){
    console.log(e);
  }

}

//====================================
//              main
//====================================
const main = async function() {
  //ForEach だとエラーが出たぜ。何でだろ。
  for(i=0; i<targetURL.length; i++){
    await getSingleContent(targetURL[i])

  }

  console.log(writeContents)
  writeToFile();


}


main();
