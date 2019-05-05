const { initServer } = require('./lib/express');
const SequelizeConnection = require('./lib/sequelize');

async function start() {
    try {
        // Connect to db
        const sequelizeConnection = new SequelizeConnection();
        await sequelizeConnection.connect();

        // Init express server
        const app = initServer();

        app.listen(8080);
    } catch (error) {
        console.error('Faild to start the server', error);
    }
}

start();
