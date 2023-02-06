// 【 配列に値を詰める 】

/*
(ref)
https://qiita.com/suin/items/1b39ce57dd660f12f34b
*/

var counters = Array(N)
var counters = [...Array(N)]
var counters = [...Array(N)].map(() => 0)  // ALL 0

var counters = [...Array(N)].map((_, i) => i)      // [ 0, 1, 2, 3, 4 ]
var counters = [...Array(N)].map((_, i) => i + 1)  // [ 1, 2, 3, 4, 5 ]

// ※ (_, i) =>のアンダースコアは第1引数を使わないという意味。
//   第2引数だけ使いたいのですが、第1引数も受け取る必要があるため、_を置いている。


//_____________________________________________________________________________
// 【 配列の最大値・最小値 】

const max = A.reduce( (a,b) => a>b ? a:b);  // find biggest number
const min = A.reduce( (a,b) => a>b ? b:a);  // find smallest number


//_____________________________________________________________________________
// 【 配列の重複を削除 】

const array2 = new Set(array1);             // 型が「set」
const array3 = Array.from(new Set(array1))  // 型を Array に変換

//_____________________________________________________________________________
// 【 for ループ 】

for(i = 0; i < A.length; i++){
    if( A.includes(sequenceNumber) === false){
        return 0;
    }
    sequenceNumber++;
}

