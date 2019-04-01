_________________________________________________________________________________
### ComponentsPage
```
Alerts           /components/alert
Badge            /components/badge
Button           /components/button
Buttons Group    /components/button-group
Cards            /components/card
```

### src/router/index.js
```js
    }, {
      path: '/components/alert',
      name: 'AlertPage',
      component: AlertPage
    }, {
      path: '/components/badge',
      name: 'BadgePage',
      component: BadgePage
    }, {
      path: '/components/button',
      name: 'ButtonPage',
      component: ButtonPage
    }, {
      path: '/components/button-group',
      name: 'ButtonsGroupPage',
      component: ButtonsGroupPage
    }, {
      path: '/components/card',
      name: 'CardPage',
      component: CardPage
    }, {
```

## src/router/index.js
```js
import AlertPage from '../docs/AlertPage';
import BadgePage from '../docs/BadgePage';
import ButtonPage from '../docs/ButtonPage';
import ButtonsGroupPage from '../docs/ButtonsGroupPage';
import CardPage from '../docs/CardPage';
```

## ファイル削除
```
AlertPage.vue
BadgePage.vue
ButtonPage.vue
ButtonsGroupPage.vue
CardPage.vue
```
