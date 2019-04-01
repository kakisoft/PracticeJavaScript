_________________________________________________________________________________
### src/docs/categories/TablesPage.vue
```
Datatable           /tables/datatable
Table pagination    /tables/table-pagination
Table Scroll        /tables/table-scroll
Table Search        /tables/table-search
Table Sort          /tables/table-sort
```

### src/router/index.js
```js
    }, {
      path: '/tables/datatable',
      name: 'DataTablePage',
      component: DataTablePage
    }, {
      path: '/tables/table-pagination',
      name: 'TablePaginationPage',
      component: TablePaginationPage
    }, {
      path: '/tables/table-scroll',
      name: 'TableScrollPage',
      component: TableScrollPage
    }, {
      path: '/tables/table-search',
      name: 'TableSearchPage',
      component: TableSearchPage
    }, {
      path: '/tables/table-sort',
      name: 'TableSortPage',
      component: TableSortPage
    }, {
```

## src/router/index.js
```js
import DataTablePage from '../docs/DataTablePage';
import TablePaginationPage from '../docs/TablePaginationPage';
import TableScrollPage from '../docs/TableScrollPage';
import TableSearchPage from '../docs/TableSearchPage';
import TableSortPage from '../docs/TableSortPage';
```

## ファイル削除
```
DataTablePage.vue
TablePaginationPage.vue
TableScrollPage.vue
TableSearchPage.vue
TableSortPage.vue
```

