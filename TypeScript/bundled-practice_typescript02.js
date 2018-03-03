var DeveloperModule;
(function (DeveloperModule) {
    DeveloperModule.name = "kaki"; //exportを付けると、外部からアクセスできる
    var AddressModule;
    (function (AddressModule) {
        AddressModule.zip = "222-2222";
    })(AddressModule = DeveloperModule.AddressModule || (DeveloperModule.AddressModule = {}));
})(DeveloperModule || (DeveloperModule = {}));
/*
tsc practice_typescript02.ts -t ES5 --out bundled-practice_typescript02.js

node bundled-practice_typescript02.js
*/
//==================================
//         内部モジュール
//==================================
//-----< 別ファイルからコール >-----
//★↓のように、スラッシュを３つ付けたコメントの後に、importするモジュールを指定する。（同時にコンパイルする）
/// <reference path="./modules/developers.ts" />
console.log(DeveloperModule.name);
console.log(DeveloperModule.AddressModule.zip);
var devaddr = DeveloperModule.AddressModule;
console.log(devaddr.zip);
//-----< 同一ファイルからコール >-----
var UserModule;
(function (UserModule) {
    UserModule.name = "yamada"; //exportを付けると、外部からアクセスできる
    var AddressModule;
    (function (AddressModule) {
        AddressModule.zip = "111-1111";
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
console.log(UserModule.name);
console.log(UserModule.AddressModule.zip);
var addr = UserModule.AddressModule; //エイリアス。（UserModule.Address<odule を addr でコールできるようにする）
console.log(addr.zip);
