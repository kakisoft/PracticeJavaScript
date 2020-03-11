///////////////////////////////////////////////////////////
// json-2-csv
// https://www.npmjs.com/package/json-2-csv
// https://github.com/mrodrig/json-2-csv/wiki/csv2json-Documentation
// 
// npm i json-2-csv
///////////////////////////////////////////////////////////


let converter = require('json-2-csv');

let documents = [
    {
        Make: 'Nissan',
        Model: 'Murano',
        Year: '2013',
        Specifications: {
            Mileage: '7106',
            Trim: 'S AWD'
        }
    },
    {
        Make: 'BMW',
        Model: 'X5',
        Year: '2014',
        Specifications: {
            Mileage: '3287',
            Trim: 'M'
        }
    }
];

let json2csvCallback = function (err, csv) {
    if (err) throw err;
    console.log(csv);
};

converter.json2csv(documents, json2csvCallback);

