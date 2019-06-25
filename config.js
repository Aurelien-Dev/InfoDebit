var env = process.env.NODE_ENV || "development";

var config = require('./configs/config.json')['production'];
config.infoDebit.rivieres = require('./configs/rivieres.json');

module.exports = config;