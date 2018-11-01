var a1 = "aaa";         // => [object String]
var a2 = 123;           // => [object Number]
var a3 = [1,2,3]        // => [object Array]
var a4 = ["1","2","3"]  // => [object Array]

var objectName = Object.prototype.toString.call(a1).slice(8, -1);



var endWordObject = Object.prototype.toString.call(endWord).slice(8, -1);

if(endWordObject == "String"){
  console.log("String");
}else if(endWordObject == "Array"){
  console.log("Array");
}



