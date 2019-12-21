//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 サイズ 】

var array01 = [1, 2, 3, 4, 5];
var n1 = array01.length

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 最大値・最小値 】

var array02 = [3, 1, 4, 1, 5, 9, 2, 6];
Math.max.apply(null, array02);    // → 9
Math.min.apply(null, array02);    // → 1

//-------------------------------
const array03 = [3, 8, 7, 2, 5];
Math.max(...array03);    // 8
Math.min(...array03);    // 2


//-------------------------------
const memberList = [
  { name: 'Tom', age: 20 },
  { name: 'Bob', age: 25 },
  { name: 'Cate', age: 23 },
  { name: 'John', age: 18 },
];

Math.max(...memberList.map(m => m.age)); // 25
Math.max(...memberList.map((key,value) => key.age)); // 25

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



