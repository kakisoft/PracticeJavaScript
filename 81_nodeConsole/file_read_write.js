//＜実行＞
// node file_read_write.js 
//
// 元々ファイルが存在してなかった場合は NGになった。

var fs = require('fs');

const READ_FILE_NAME = "file_rw_sample01.txt";

//==========< 非同期 >==========
fs.readFile(READ_FILE_NAME, 'utf8', function (err, text01) {
    // 例外処理
    if (err) { throw err; }

    console.log(text01);

});

//==========< 同期 >==========
var text02 = fs.readFileSync(READ_FILE_NAME, 'utf-8');
console.log(text02)




