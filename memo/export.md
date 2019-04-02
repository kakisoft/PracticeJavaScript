## export
https://www.shookuro.com/entry/2018/09/22/172636  

「自前で持ってる関数を、外で使えるようにするための記述」  
・・・という事でいいのか？  


## 書き方色々
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export
```js
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // var, const も使用可
export let name1 = …, name2 = …, …, nameN; // var, const も使用可
export function FunctionName(){...}
export class ClassName {...}

export default expression;
export default function (…) { … } // class, function* も使用可
export default function name1(…) { … } // class, function* も使用可
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

