_________________________________________________________________________________
### src/docs/categories/ModalsPage.vue
```
Modal       /modals/modal
Events      /modals/events
Examples    /modals/examples
Forms       /modals/forms
Styles      /modals/styles
```

### src/router/index.js
```js
    }, {
      path: '/modals/modal',
      name: 'ModalPage',
      component: ModalPage
    }, {
      path: '/modals/events',
      name: 'ModalEventsPage',
      component: ModalEventsPage
    }, {
      path: '/modals/examples',
      name: 'ModalExamplesPage',
      component: ModalExamplesPage
    }, {
      path: '/modals/forms',
      name: 'ModalFormsPage',
      component: ModalFormsPage
    }, {
      path: '/modals/styles',
      name: 'ModalStylesPage',
      component: ModalStylesPage
    }, {
```

## src/router/index.js
```js
import ModalPage from '../docs/ModalPage';
import ModalEventsPage from '../docs/ModalEventsPage';
import ModalExamplesPage from '../docs/ModalExamplesPage';
import ModalFormsPage from '../docs/ModalFormsPage';
import ModalStylesPage from '../docs/ModalStylesPage';
```

## ファイル削除
```
ModalPage.vue
ModalEventsPage.vue
ModalExamplesPage.vue
ModalFormsPage.vue
ModalStylesPage.vue
```

