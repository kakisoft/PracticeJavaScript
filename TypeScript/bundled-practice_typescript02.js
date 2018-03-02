/*
tsc practice_typescript02.ts -t ES5 --out bundled-practice_typescript02.js

node bundled-practice_typescript02.js
*/
/*
-----( ドットインストール質問事項 )-----
内部モジュールに「module UserModule」を定義し、
外部モジュールに「module DeveloperModule」を定義すると、
ビルドエラーが発生しました。

これらは１つのファイルに共存させる事ができないのでしょうか。
（どちらか１つをコメントアウトすると、ビルドが通る。）
*/
//==================================
//         内部モジュール
//==================================
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
//-----< 別ファイルからコール >-----
//★↓のように、スラッシュを３つ付けたコメントの後に、importするモジュールを指定する。（同時にコンパイルする）
/// <reference path="./modules/developers.ts" />
// console.log(DeveloperModule.name);
// console.log(DeveloperModule.AddressModule.zip);
// import devaddr = DeveloperModule.AddressModule; 
// console.log(devaddr.zip);
