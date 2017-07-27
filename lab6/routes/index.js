var getById = require('../data/index.js');
var sender = require('./sender');

function configRoute(app) {
    app.get('/api/people/:id', async (req, res) => {
        //return a person from the worker, and render JSON of the person
        let result;
        try {
            result = await sender.getContactById(req.params.id);
        } catch (e) {
            result = e;
        }

        res.send(result);
    });

    app.post('/api/people', async (req, res) => {
        //creates a person, and render JSON of the person created
        let result;
        try {
            result = await sender.createNewContact();

        } catch (err) {
            result = err;
        }
        res.send(result);
    });

    app.put('/api/people/:id', async (req, res) => {
        //updates a person, and render JSON of the person updated
        let result;
        try{
            result = await sender.updateContactById(req.params.id);
        } catch(e){
            result = e;
        }
        res.send(result);
    });

    app.delete('/api/people/:id', async (req, res) => {
        //deletes a person, and render JSON stating that the operation completed
        let result;
        try {
            result = await sender.deleteContactById(req.params.id);
        } catch (e) {
            result = e;
        }
        res.send(result);
    });


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
            for (let i = 0; i < keys.length; i++) {
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