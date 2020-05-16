//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 サイズ 】

var array01 = [1, 2, 3, 4, 5];
var n1 = array01.length

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 最大値・最小値 】

var array02 = [3, 1, 4, 1, 5, 9, 2, 6];
Math.max.apply(null, array02);    //=> 9
Math.min.apply(null, array02);    //=> 1

//-------------------------------
const array03 = [3, 8, 7, 2, 5];
Math.max(...array03);    //=> 8
Math.min(...array03);    //=> 2


//-------------------------------
const memberList = [
  { name: 'Tom',  age: 20 },
  { name: 'Bob',  age: 25 },
  { name: 'Cate', age: 23 },
  { name: 'John', age: 18 },
];

Math.max(...memberList.map(m => m.age)); //=> 25
Math.max(...memberList.map((key,value) => key.age)); //=> 25

//-------------------------------
let target = [
  {name:"Aさん", age:10},
  {name:"Bさん", age:20},
  {name:"Cさん", age:30},
  {name:"Dさん", age:40},
  {name:"Eさん", age:50}
]

//最高年齢の人を表示
console.log(target.reduce((a,b)=>a.age>b.age?a:b));    //=>  {name: "Eさん", age: 50}

//名前だけ表示したい場合
console.log(target.reduce((a,b)=>a.age>b.age?a:b).name);    //=> さん


//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 push  配列の末尾に 1 つ以上の要素を追加（戻り値として新しい配列の要素数を返す） 】

var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 pop  配列から最後の要素を取り除き、その要素を返します 】
//（破壊的）

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]


//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 unshift -配列の先頭に値を追加します。 】

var array = ['b', 'c'];

array.unshift('a');
console.log(array); // ['a', 'b', 'c']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 shift  配列から最初の要素を取り除き、その要素を返す。 】
//（破壊的）

var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 reverse  反転 】

var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse(); 
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 特定の要素を削除 】

var startWord = "SELECT";
var endWord = ["FROM","WHERE","GROUP BY","SELECT","ORDER BY"]

endWord = endWord.filter((el)=> el !== startWord);

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━




