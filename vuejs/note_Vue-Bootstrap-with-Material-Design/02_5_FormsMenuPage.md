_________________________________________________________________________________
### src/docs/categories/FormsMenuPage.vue
```
Forms         /forms/forms
Input         /forms/inputs
Input Group   /forms/group
Search        /forms/search
Validation    /forms/validation
```

### src/router/index.js
```js
    }, {
      path: '/forms/forms',
      name: 'FormsPage',
      component: FormsPage
    }, {
      path: '/forms/inputs',
      name: 'InputsPage',
      component: InputsPage
    }, {
      path: '/forms/group',
      name: 'InputGroupPage',
      component: InputGroupPage
    }, {
      path: '/forms/search',
      name: 'SearchPage',
      component: SearchPage
    }, {
      path: '/forms/validation',
      name: 'ValidationPage',
      component: ValidationPage
    }, {
```

## src/router/index.js
```js
import FormsPage from '../docs/FormsPage';
import InputsPage from '../docs/InputsPage';
import InputGroupPage from '../docs/InputGroupPage';
import SearchPage from '../docs/SearchPage';
import ValidationPage from '../docs/ValidationPage';
```

## ファイル削除
```
FormsPage.vue
InputsPage.vue
InputGroupPage.vue
SearchPage.vue
ValidationPage.vue
```

