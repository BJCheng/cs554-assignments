var redis = require('redis');
var client = redis.createClient();
var getById = require('../data/index.js');
var bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// var test = async () => {
//     let hi = await client.setAsync('hi', 'hiiiii');
//     let getHi = await client.getAsync('hi');
//     console.log('getHi:', getHi);
// }
// test();

function configRoute(app) {
    app.get('/api/people/history', (req, res) => {
        //last 20 users in the CACHE from the recently viewed list
        client.keys('*', async function (err, history) {
            if (err) {
                res.send(err);
            }

            let keys = [];
            if (history.length <= 20)
                keys = keys.concat(history);
            else {
                keys = keys.concat(history.slice(0, 19));
            }

            let people = []
            for(let i=0; i<keys.length; i++){
                let key = keys[i];
                let object = await client.getAsync(key);
                let person = JSON.parse(object);
                console.log('person in redis:', person);
                people.push(person);
            }
            res.send(people);
        });


    });

    app.get('/api/people/:id', async (req, res) => {
        // 1) Check if the user has a cache entry in redis. If so, render the result from that cache entry
        let cachePeople = await client.getAsync(req.params.id);
        if (cachePeople) {
            return res.send(JSON.parse(cachePeople));
        }
        // 2) If not, query the data module for the person and fail the request if they are not found
        getById(req.params.id).then((people) => {
            client.setAsync(req.params.id, JSON.stringify(people));
            res.send(people);
        }).catch((err) => {
            res.send(err);
        });
    });
}

module.exports = configRoute;