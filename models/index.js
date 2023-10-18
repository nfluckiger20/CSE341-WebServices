const dbConfig = require('../');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.inventory = require('./inventory.js')(mongoose);
db.location = require('./location.js')(mongoose);

module.exports = db;