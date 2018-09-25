//JavaScript 配列で条件にマッチする要素のみ検索して抽出する
// IE 8以下は未対応

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var arr = ["1", "", "2", "", "4"];

console.log(arr.filter(function (element) {
  return element.trim().length > 0;
}));

//=========================
arr01 = arr01.filter( (element) => element.trim().length > 0 );

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var arr = [1, 2, 3, 4, 5];

var isEven = function (element) {
  // 偶数の場合はtrue、奇数の場合はfalse
  return element % 2 === 0;
};
console.log(arr.filter(isEven)); // [2, 4]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var arr = [1, 2, 3, 4, 5];

console.log(arr.filter(function (element) {
  return element % 2 === 0;
})); // [2, 4]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//オブジェクトの配列の場合

var arr = [
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
  }
];

console.log(arr.filter(function (element) {
  return element.age >= 20;
})); // [ {name: "一郎", age: 25}, {name: "二郎", age: 21} ]


