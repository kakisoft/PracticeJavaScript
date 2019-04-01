Vue-Bootstrap-with-Material-Design

# ルーティング

## src/router/index.js
にて制御

## _

## src/App.vue
```
  <mdb-nav-item exact to="/" waves-fixed>Home</mdb-nav-item>
  <mdb-nav-item to="/css" waves-fixed>CSS</mdb-nav-item>
  <mdb-nav-item to="/components" waves-fixed>Components</mdb-nav-item>
  <mdb-nav-item to="/advanced" waves-fixed>Advanced</mdb-nav-item>
  <mdb-nav-item to="/navigation" waves-fixed>Navigation</mdb-nav-item>
  <mdb-nav-item to="/forms" waves-fixed>Forms</mdb-nav-item>
  <mdb-nav-item to="/tables" waves-fixed>Tables</mdb-nav-item>
  <mdb-nav-item to="/modals" waves-fixed>Modals</mdb-nav-item>
  <mdb-nav-item to="/plugins" waves-fixed>Plugins & addons</mdb-nav-item>
```

## src/router/index.js
大項目
```
// CATEGORIES
import CSSPage from '../docs/categories/CSSPage';
import ComponentsPage from '../docs/categories/ComponentsPage';
import AdvancedPage from '../docs/categories/AdvancedPage';
import NavigationMenuPage from '../docs/categories/NavigationMenuPage';
import FormsMenuPage from '../docs/categories/FormsMenuPage';
import TablesPage from '../docs/categories/TablesPage';
import ModalsPage from '../docs/categories/ModalsPage';
import AddonsPage from '../docs/categories/AddonsPage';



    {
      path: '/navigation',
      name: 'NavigationMenuPage',
      component: NavigationMenuPage
    },

    {
      path: '/modals',
      name: 'ModalsPage',
      component: ModalsPage
    },
    {
      path: '/plugins',
      name: 'AddonsPage',
      component: AddonsPage
    },
```


### src/docs/categories/NavigationMenuPage.vue
```
                                                                component
----------------------------------------------------------------------------------
Breadcrumb      /navigation/breadcrumb       BreadcrumbPage    BreadcrumbPage
Footer          /navigation/footer           FooterPage
Hamburger Menu  /navigation/hamburger        
Navbar          /navigation/navbar
Navigation      /navigation/navigation
Navs            /navigation/navs


import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbJumbotron, mdbNavItem, mdbListGroup } from 'mdbvue';
```

### src/router/index.js
```
import BreadcrumbPage from '../docs/BreadcrumbPage';


    }, {
      path: '/navigation/breadcrumb',
      name: 'BreadcrumbPage',
      component: BreadcrumbPage
    }, {
```

___________________________________________________________________________

## src/docs/categories/AddonsPage.vue
```
Blog components    /plugins/blog-components    BlogComponentsPage
iFrame             /plugins/iframe             IframePage
Video              /plugins/video              VideoPage

// mdbContainer, mdbRow, mdbCol, mdbIcon, mdbJumbotron, mdbNavItem, mdbListGroup 
```



