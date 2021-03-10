
const exec = require('child_process').exec
let callback;

// exec("mkdir bbb", callback);
exec("mkdir bbb");


// https://riptutorial.com/ja/node-js/example/9105/%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%92%E8%B5%B7%E5%8B%95%E3%81%97%E3%81%A6%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B


//// UseCallback
// function CUIExe(){
//   let NodeJSExec = "command_name [option] [arg]"
//   if (process.env.SUDO_USER) {
//     NodeJSExec = 'sudo -u ' + process.env.SUDO_USER + ' ' + NodeJSExec;
//   }
//   return exec(NodeJSExec, callback);
// }


//// 今はこっちのが主流？
// https://mottox2.com/posts/385


/*

docker-compose -f docker-compose003.yml up -d --build
docker-compose -f C:\kaki\BBP\myproject\application\docker-compose.yml up -d --build


*/

