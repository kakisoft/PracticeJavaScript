/*

node arg.js aaa bbb ccc ddd eee

*/

for(var i = 0;i < process.argv.length; i++){
  console.log("argv[" + i + "] = " + process.argv[i]);
}


//=>
// argv[0] = C:\Program Files\nodejs\node.exe
// argv[1] = C:\kaki\__myrepo__\PracticeJavaScript\Node.js\arg.js
// argv[2] = aaa
// argv[3] = bbb
// argv[4] = ccc

