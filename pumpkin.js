const db = require('./dbConfig');
const Sequelize = require('sequelize');

const Pumpkin = db.define('Pumpkin', {
    name: {
        type: Sequelize.STRING
    },
    size: {
        type: Sequelize.ENUM,
        values: ['small','medium','large']
    },
    evil: {
        type:Sequelize.BOOLEAN,
        defaultValue: Math.random() >= 0.5
        // Pumpkin.prototype.name += " GOOD" : Pumpkin.prototype.name += "EVIL"
    },
    carved: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    },
    candle: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    },
})

Pumpkin.prototype.lightcandle = function() {
    Pumpkin.candle = true
    return Pumpkin.candle
}

//YOUR CODE GOES HERE

//--------------------
module.exports = Pumpkin;
