var fs = require('fs');

const READ_FILE_NAME = "ssl_samplefile_02.txt";


//==========< 読み込み >==========
var text02 = fs.readFileSync(READ_FILE_NAME, 'utf-8');


var toObj = JSON.parse(text02);
console.log(toObj)




