module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    host: process.env.HOST || 'localhost',
    dbport: process.env.DBPORT || 3306,
    dbname: process.env.DBNAME || 'appledb',
    dbuser: process.env.DBUSER || 'root',
    dbpwd: process.env.DBPWD || 'root',
};
