_________________________________________________________________________________
### src/docs/categories/AdvancedPage.vue
```
Accordion         /advanced/accordion
Carousel          /advanced/carousel
Charts            /advanced/chart
Collapse          /advanced/collapse
Google Maps       /advanced/maps
Popover           /advanced/popover
Tooltip           /advanced/tooltip
Video Carousel    /advanced/videocarousel
Wave Effect       /advanced/wave-effect
```

### src/router/index.js
```js
    {
      path: '/advanced/accordion',
      name: 'AccordionPage',
      component: AccordionPage
    }, {
      path: '/advanced/carousel',
      name: 'CarouselPage',
      component: CarouselPage
    }, {
      path: '/advanced/chart',
      name: 'ChartPage',
      component: ChartPage
    }, {
      path: '/advanced/collapse',
      name: 'CollapsePage',
      component: CollapsePage
    }, {
      path: '/advanced/maps',
      name: 'GoogleMapsPage',
      component: GoogleMapsPage
    }, {
      path: '/advanced/popover',
      name: 'PopoverPage',
      component: PopoverPage
    }, {
      path: '/advanced/tooltip',
      name: 'TooltipPage',
      component: TooltipPage
    }, {
      path: '/advanced/videocarousel',
      name: 'VideoCarouselPage',
      component: VideoCarouselPage
    }, {
      path: '/advanced/wave-effect',
      name: 'WavesPage',
      component: WavesPage
    }
```

## src/router/index.js
```js
import AccordionPage from '../docs/AccordionPage';
import CarouselPage from '../docs/CarouselPage';
import ChartPage from '../docs/ChartPage';
import CollapsePage from '../docs/CollapsePage';
import GoogleMapsPage from '../docs/GoogleMapsPage';
import PopoverPage from '../docs/PopoverPage';
import TooltipPage from '../docs/TooltipPage';
import VideoCarouselPage from '../docs/VideoCarouselPage';
import WavesPage from '../docs/WavesPage';
```

## ファイル削除
```
AccordionPage.vue
CarouselPage.vue
ChartPage.vue
CollapsePage.vue
GoogleMapsPage.vue
PopoverPage.vue
TooltipPage.vue
VideoCarouselPage.vue
WavesPage.vue
```

