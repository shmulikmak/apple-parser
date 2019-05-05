/* eslint-disable no-undef */
module.exports = (sequelize, type) => sequelize.define('csv', {
    AppleNum: {
        type: type.INTEGER,
    },
    Color: {
        type: type.STRING
    },
    Size: {
        type: type.STRING
    },
    Rightfullness: {
        type: type.STRING
    },
    x_position: {
        type: type.STRING
    },
    y_position: {
        type: type.STRING
    }
});
