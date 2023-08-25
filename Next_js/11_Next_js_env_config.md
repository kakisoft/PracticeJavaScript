# env / config

## note
```
npm run dev ->
.env.development


npm run build ->
.env.production



process
process.env.HANDSONTABLE_KEY
npm run dev -> development を参照
npm run build -> production を参照
```


## client\.env.development
```js
HANDSONTABLE_KEY="non-commercial-and-evaluation"
BASE_URL="http://localhost:8000/"
```

## client\next.config.js
```js
const nextConfig = {
  reactStrictMode: false,
  env: {
    HANDSONTABLE_KEY: process.env.HANDSONTABLE_KEY,
    BASE_URL: process.env.BASE_URL
  }
}

module.exports = nextConfig
```

## client\axios.js
```js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true
});
```

