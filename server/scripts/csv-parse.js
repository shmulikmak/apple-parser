const parse = require('csv-parse');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const CsvModel = require('./csv-db.model');

const sequelize = new Sequelize('appledb', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

// test connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const csv = CsvModel(sequelize, Sequelize);

const dataCsv = [];
const csvPath = path.join(__dirname, '../csv/Map.csv');

fs.createReadStream(csvPath)
    .pipe(parse({ delimiter: ',' }))
    .on('data', (csvrow) => {
        dataCsv.push(csvrow);
    })
    .on('end', () => {
        sequelize.sync({ force: true })
            .then(() => {
                for (let index = 0; index < dataCsv.length; index++) {
                    // insert csv to db
                    csv.create({
                        AppleNum: dataCsv[index][0],
                        Color: dataCsv[index][1],
                        Size: dataCsv[index][2],
                        Rightfullness: dataCsv[index][3],
                        x_position: dataCsv[index][4],
                        y_position: dataCsv[index][5]
                    }).then(data => {
                        console.log('data inserted: ', data);
                    });
                }
            });
    });
