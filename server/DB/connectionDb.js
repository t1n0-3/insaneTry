const mongoose = require('mongoose')

const { DB_URL } = require('../CONSTANTS')

function connectToDb() {
    mongoose.connect(DB_URL).then(() => console.log('u successfuly connect to the DB')).catch(err => console.log(err))
}
module.exports = connectToDb;