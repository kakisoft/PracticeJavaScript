//JavaScript 配列で条件にマッチする要素のみ検索して抽出する
// IE 8以下は未対応

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var arr01 = ["1", "", "2", "", "4"];

console.log(arr01.filter(function (element) {
  return element.trim().length > 0;
}));

//=========================
arr01 = arr01.filter( (element) => element.trim().length > 0 );

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var arr02 = [1, 2, 3, 4, 5];

var isEven = function (element) {
  // 偶数の場合はtrue、奇数の場合はfalse
  return element % 2 === 0;
};
console.log(arr02.filter(isEven)); // [2, 4]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var arr03 = [1, 2, 3, 4, 5];

console.log(arr03.filter(function (element) {
  return element % 2 === 0;
})); // [2, 4]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//オブジェクトの配列の場合

var arr04 = [
  {
    name: '一郎',
    age: 25
  },
  {
    name: '二郎',
    age: 21
  },
  {
    name: '三郎',
    age: 18
  },
  {
    name: 'Roi',
    age: 7
  }
];

console.log(arr04.filter(function (element) {
  return element.age >= 20;
})); // [ {name: "一郎", age: 25}, {name: "二郎", age: 21} ]


let filterdParams04_1 = arr04.filter( el => el.age < 20 );         //=> [ { name: '三郎', age: 18 }, { name: 'Roi', age: 7 } ]
let filterdParams04_2 = arr04.filter((el, p) => el.age*2 < 20 );   //=> [ { name: 'Roi', age: 7 } ]

console.log(filterdParams04_1);
console.log(filterdParams04_2);

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//【 reduce 】
//  -> sum 

const array04 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array04.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array04.reduce(reducer, 5));
// expected output: 15



//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 every 】
// 条件を全ての値が満たすかどうか。戻り値は boolean

var passed = [12, 54, 18, 130, 44].every(function(element, index, array) {
  return (element >= 10);
});

console.log(passed); // true

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 some 】
// 条件を満たすものがあるか。戻り値は boolean

passed = [2, 5, 8, 1, 4].some(function(element, index, array) {
  return (element >= 10);
});

console.log(passed); // false


//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━




