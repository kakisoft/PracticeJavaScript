_________________________________________________________________________________
### src/docs/categories/NavigationMenuPage.vue
```
Breadcrumb        /navigation/breadcrumb
Footer            /navigation/footer
Hamburger Menu    /navigation/hamburger
Navbar            /navigation/navbar
Navigation        /navigation/navigation
Navs              /navigation/navs
```

### src/router/index.js
```js
    }, {
      path: '/navigation/breadcrumb',
      name: 'BreadcrumbPage',
      component: BreadcrumbPage
    }, {
      path: '/navigation/footer',
      name: 'FooterPage',
      component: FooterPage
    }, {
      path: '/navigation/hamburger',
      name: 'HamburgerMenuPage',
      component: HamburgerMenuPage
    }, {
      path: '/navigation/navbar',
      name: 'NavbarPage',
      component: NavbarPage
    }, {
      path: '/navigation/navigation',
      name: 'NavigationPage',
      component: NavigationPage
    }, {
      path: '/navigation/navs',
      name: 'NavsPage',
      component: NavsPage
    }, {
```

## src/router/index.js
```js
import BreadcrumbPage from '../docs/BreadcrumbPage';
import FooterPage from '../docs/FooterPage';
import HamburgerMenuPage from '../docs/HamburgerMenuPage';
import NavsPage from '../docs/NavsPage';
import NavbarPage from '../docs/NavbarPage';
import NavigationPage from '../docs/NavigationPage';
```

## ファイル削除
```
BreadcrumbPage.vue
FooterPage.vue
HamburgerMenuPage.vue
NavsPage.vue
NavbarPage.vue
NavigationPage.vue
```

