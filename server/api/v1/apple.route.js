const express = require('express');
const SequelizeConnection = require('../../lib/sequelize');

const router = express.Router();

router.get('/apple', (req, res) => {
    const sequelizeConnect = new SequelizeConnection();
    sequelizeConnect.connect();
    const dbConnect = sequelizeConnect.getConnection();
    const csvsTable = dbConnect.query('SELECT * FROM csvs');
    csvsTable.then(csvsTableRows => {
        res.status(200).json(
            csvsTableRows
        );
    });
});

module.exports = router;
