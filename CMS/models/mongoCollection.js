var mongoConnection = require('./mongoConnection');

class mongoCollection {
    constructor(collectionName) {
        this._collectionName = collectionName;
        let collection = undefined;
    }

    getCollection() {
        if (!this.collection) {
            this.collection =  this._getCollectionAsync(this._collectionName);
        }
        return this.collection;
    }

    _getCollectionAsync(number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number);
            }, 3000);
        }).then((number) => { return number; });
    }
}

module.exports = mongoCollection;