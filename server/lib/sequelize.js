const Sequelize = require('sequelize');

/**
 * Connect to Sequelize
 */
class SequelizeConnection {
    connect() {
        this.SequelizeConnect = new Sequelize('appledb', 'root', 'root', {
            host: 'localhost',
            port: 3306,
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
