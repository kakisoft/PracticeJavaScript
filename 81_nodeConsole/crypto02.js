// 暗号化    encryption
// 復号化    Decryption

// 【参考】　https://qiita.com/_daisuke/items/990513e89ca169e9c4ad

var crypto = require("crypto");

var planeText = 'This is Plane Text';
var passowrd = 'passw0rd';

console.log('暗号化するテキスト : ' + planeText);
console.log('暗号化キー        : ' + passowrd);

// 暗号化
var cipher = crypto.createCipher('aes192', passowrd);
var cipheredText = cipher.update(planeText, 'utf8', 'hex');
cipheredText += cipher.final('hex');

console.log('暗号化(AES192) :');
console.log(cipheredText);

// 復号
var decipher = crypto.createDecipher('aes192', passowrd);
var dec = decipher.update(cipheredText, 'hex', 'utf8');
dec += decipher.final('utf8');

console.log('復号化(AES192) : ');
console.log(dec);


