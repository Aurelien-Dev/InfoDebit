var env = process.env.NODE_ENV || 'dev';

var config = require('./configs/config.json')['prod'];
config.infoDebit.rivieres = require('./configs/rivieres.json');

module.exports = config;