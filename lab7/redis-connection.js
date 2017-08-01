const NRP = require('node-redis-pubsub');

var option = {
    port: 6379
}

const nrp = NRP(option);

module.exports = nrp;