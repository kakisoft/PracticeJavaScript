## JSX
描画したい UI を JSX という記法で書く。


## コンポーネント
「コンポーネント」という独自のタグを作成し、機能を追加していく事ができる。  
コンポーネントの先頭は大文字。


## 設計思想
state を持つ Component は最小限にし、その他の Component には極力値を持たせないという設計が良いとされている。


## error
```
Uncaught Error: Target container is not a DOM element.

要素が無い場合に発生
```
