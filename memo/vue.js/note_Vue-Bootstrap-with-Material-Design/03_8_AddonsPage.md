_________________________________________________________________________________
### src/docs/categories/AddonsPage.vue
```
Blog components    /plugins/blog-components
iFrame             /plugins/iframe
Video              /plugins/video
```

### src/router/index.js
```js
    }, {
      path: '/plugins/blog-components',
      name: 'BlogComponentsPage',
      component: BlogComponentsPage
    }

    }, {
      path: '/plugins/iframe',
      name: 'IframePage',
      component: IframePage
    }, {

    }, {
      path: '/plugins/video',
      name: 'VideoPage',
      component: VideoPage
    }, {
```

## src/router/index.js
```js
import BlogComponentsPage from '../docs/BlogComponentsPage';
import IframePage from '../docs/IframePage';
import VideoPage from '../docs/VideoPage';
```

## ファイル削除
```
BlogComponentsPage.vue
IframePage.vue
VideoPage.vue
```

