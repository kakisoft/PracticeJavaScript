## env-cmd
https://chatgpt.com/g/g-p-6a3958fd19d08191a19479103a10980e-work/c/6a621209-5ee8-83ee-901d-2d7a2603a5c9


.env-cmdrc.json と言うファイルを使う。

複数の環境を用意する場合に使用する。


```json
{
  "development": {
    "API_URL": "https://dev.example.com",
    "PORT": "3000"
  },
  "staging": {
    "API_URL": "https://stg.example.com",
    "PORT": "4000"
  },
  "production": {
    "API_URL": "https://api.example.com",
    "PORT": "80"
  }
}
```

```
env-cmd -e development npm run dev

env-cmd -e production node app.js
```

package.json
```js
{
  "scripts": {
    "dev": "env-cmd -e development vite",
    "build": "env-cmd -e production vite build"
  }
}
```

Vite や Next.js は標準で

.env  
.env.local  
.env.production  

などを読み込むため、通常は env-cmd は不要です。




