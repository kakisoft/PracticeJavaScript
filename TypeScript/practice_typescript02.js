// //==================================
// //         内部モジュール
// //==================================
var UserModule;
(function (UserModule) {
    UserModule.name = "yamada"; //exportを付けると、外部からアクセスできる
    var AddressModule;
    (function (AddressModule) {
        AddressModule.zip = "111-1111";
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
// console.log(UserModule.name);
// console.log(UserModule.AddressModule.zip);
// import addr = UserModule.AddressModule; //エイリアス。（UserModule.Address<odule を addr でコールできるようにする）
// console.log(addr.zip);
//-----< 別ファイルからコール >-----
//★↓のように、スラッシュを３つ付けたコメントの後に、importするモジュールを指定する。（同時にコンパイルする）
/// <reference path="./modules/developers.ts" />
console.log(DeveloperModule.name);
console.log(DeveloperModule.AddressModule.zip);
//import devaddr = DeveloperModule.AddressModule; 
//console.log(devaddr.zip);
