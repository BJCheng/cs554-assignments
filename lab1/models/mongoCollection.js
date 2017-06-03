var mongoConnection = require('./mongoConnection');

var getMongoCollections = function (collectionName) {
    let collection = undefined;

    return () => {
        if (!collection) {
            collection = mongoConnection().then((db) => {
                return db.collection(collectionName);
            });
        }

        return collection;
    }
}

module.exports = {
    tasks: getMongoCollections('tasks')
}