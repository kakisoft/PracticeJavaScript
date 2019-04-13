// 暗号化    encryption
// 復号化    Decryption

var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var passphrase = "7IeZlmfz";

var encrypt = (text) => {
  var cipher = crypto.createCipher(algorithm,passphrase)
  var crypted = cipher.update(text,'utf8','base64')
  crypted += cipher.final('base64');
  return crypted;
}

var decrypt = (text) => {
  var decipher = crypto.createDecipher(algorithm,passphrase)
  var dec = decipher.update(text,'base64','utf8')
  dec += decipher.final('utf8');
  return dec;
}


var encryptedText = encrypt("password");
console.log(encryptedText);  //=> "+E9LLPtNh1w="

var decryptedText = decrypt(encryptedText);
console.log(decryptedText); //=> "password"





