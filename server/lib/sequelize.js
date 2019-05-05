const Sequelize = require('sequelize');
const config = require('../config');

/**
 * Connect to Sequelize
 */
class SequelizeConnection {
    connect() {
        this.SequelizeConnect = new Sequelize(config.dbname, config.dbuser, config.dbpwd, {
            host: config.host,
            port: config.dbport,
            dialect: 'mysql',
        });

        // test connection
        this.SequelizeConnect.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
                return true;
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
                return false;
            });
    }

    getConnection() {
        return this.SequelizeConnect;
    }
}

module.exports = SequelizeConnection;
