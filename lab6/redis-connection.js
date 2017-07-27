const NRP = require('node-redis-pubsub');

const config = {
    port: 6379, // Port of your locally running Redis server
    scope: 'simple' // Use a scope to prevent two NRPs from sharing messages
};

const nrp = NRP(config);

module.exports = nrp;