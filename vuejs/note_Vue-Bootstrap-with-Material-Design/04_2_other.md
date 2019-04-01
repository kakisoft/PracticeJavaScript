## 独立した部品？
```
src/docs/HomePage.vue

src/docs/EdgeHeaderPage.vue
src/docs/GridPage.vue
src/docs/LiveDemoPage.vue
src/docs/MediaPage.vue
src/docs/PaginationPage.vue
src/docs/PanelPage.vue
```


## src/router/index.js
```js
import HomePage from '../docs/HomePage';

import EdgeHeaderPage from '../docs/EdgeHeaderPage';
import GridPage from '../docs/GridPage';
import LiveDemoPage from '../docs/LiveDemoPage';
import MediaPage from '../docs/MediaPage';
import PaginationPage from '../docs/PaginationPage';
import PanelPage from '../docs/PanelPage';
```


## src/router/index.js
```js
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },




    }, {
      path: '/components/edge-header',
      name: 'EdgeHeaderPage',
      component: EdgeHeaderPage
    }, {
    {
      path: '/components/grid',
      name: 'GridPage',
      component: GridPage
    }, {
      path: '/components/liveDemo',
      name: 'LiveDemoPage',
      component: LiveDemoPage
    }, {
      path: '/components/media',
      name: 'MediaPage',
      component: MediaPage
    }, {
      path: '/components/pagination',
      name: 'PaginationPage',
      component: PaginationPage
    }, {
      path: '/components/panel',
      name: 'PanelPage',
      component: PanelPage
    }, {
```


## ファイル
```
HomePage.vue

EdgeHeaderPage.vue
GridPage.vue
LiveDemoPage.vue
MediaPage.vue
PaginationPage.vue
PanelPage.vue
```

