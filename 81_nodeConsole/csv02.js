/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## Node.jsでCSVファイル操作
https://solutionware.jp/blog/2016/09/29/node-js%E3%81%A7csv%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E6%93%8D%E4%BD%9C/


npm install csv

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/


const fs = require('fs');
const csv = require('csv');
const JSONStream = require('JSONStream');

const filename = 'sample.csv';

const columns = [
  'jis',
  'postNumOld',
  'postNum',
  'prefKana',
  'countryKana',
  'townKana',
  'pref',
  'country',
  'town',
  'etc1',
  'etc2',
  'etc3',
  'etc4',
  'etc5',
  'etc6'];

const parser = csv.parse({columns: columns});
const readableStream = fs.createReadStream(filename, {encoding: 'utf-8'});

readableStream.pipe(parser);

parser.on('readable', () => {
  var data;
  while (data = parser.read()) {
    console.log(data);
  }
});

parser.on('end', () => {
  console.log('end');
});

