## src/docs/
```


src/docs/DropdownPage.vue
      <a href="https://mdbootstrap.com/docs/vue/components/dropdowns/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>


src/docs/JumbotronPage.vue
      <a href="https://mdbootstrap.com/docs/vue/components/jumbotron/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>



src/docs/ListGroupPage.vue
      <a href="https://mdbootstrap.com/docs/vue/components/list-group/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>



src/docs/ProgressBarsPage.vue
      <a href="https://mdbootstrap.com/docs/vue/components/progress-bar/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>



src/docs/SliderPage.vue
      <a href="https://mdbootstrap.com/docs/vue/forms/slider/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>



src/docs/SpinnersPage.vue
      <a href="https://mdbootstrap.com/docs/vue/components/spinners/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>



src/docs/TablePage.vue
    <a href="https://mdbootstrap.com/docs/vue/tables/additional/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>



src/docs/TabsPage.vue
      <a href="https://mdbootstrap.com/docs/vue/components/tabs/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>


```

## src/router/index.js
```js
import DropdownPage from '../docs/DropdownPage';
import JumbotronPage from '../docs/JumbotronPage';
import ListGroupPage from '../docs/ListGroupPage';
import ProgressBarsPage from '../docs/ProgressBarsPage';
import SliderPage from '../docs/SliderPage';
import SpinnersPage from '../docs/SpinnersPage';
import TablePage from '../docs/TablePage';
import TabsPage from '../docs/TabsPage';
```

## src/router/index.js
```js
    }, {
      path: '/components/dropdown',
      name: 'DropdownPage',
      component: DropdownPage
    }, {
      path: '/components/jumbotron',
      name: 'JumbotronPage',
      component: JumbotronPage
    }, {
      path: '/components/listgroup',
      name: 'ListGroupPage',
      component: ListGroupPage
    }, {
      path: '/components/progress-bars',
      name: 'ProgressBarsPage',
      component: ProgressBarsPage
    }, {
      path: '/components/slider',
      name: 'SliderPage',
      component: SliderPage
    }, {
      path: '/components/spinners',
      name: 'SpinnersPage',
      component: SpinnersPage
    }, {
      path: '/css/table',
      name: 'TablePage',
      component: TablePage
    }, {
      path: '/components/tabs',
      name: 'TabsPage',
      component: TabsPage
    }, {
```


## ファイル削除
```
DropdownPage.vue
JumbotronPage.vue
ListGroupPage.vue
ProgressBarsPage.vue
SliderPage.vue
SpinnersPage.vue
TablePage.vue
TabsPage.vue
```
