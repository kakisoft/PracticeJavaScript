「google charts」
## Google Charts
https://developers.google.com/chart/

### ２次元バーコードを作るためのAPI
Image Charts

##【 Infographics 】
https://developers.google.com/chart/infographics/docs/qr_codes

### Syntax
```
Root URL: https://chart.googleapis.com/chart?

（使用例）
https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=hello
```

|       Parameter       |  Description         |
|:----------------------|:---------------------|
| cht=qr                | Specifies a QR code  |
| chs=<width>x<height>  | Image size.          |
| chl=<data>            | ↓                    |

The data to encode. Data can be digits (0-9), alphanumeric characters, binary bytes of data, or Kanji. You cannot mix data types within a QR code. The data must be UTF-8 URL-encoded. Note that URLs have a 2K maximum length, so if you want to encode more than 2K bytes (minus the other URL characters), you will have to send your data using POST.