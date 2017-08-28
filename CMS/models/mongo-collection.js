var mongoConnection = require('./mongo-connection');
var mongodb = require('mongodb');
var uuid = require('uuid');

class mongoCollection {
    constructor(collectionName) {
        this._collectionName = collectionName;
    }

    async getCollection() {
        if (!this._collection) {
            if (!this.db) {
                this.db = await mongoConnection().then((db) => {
                    return db;
                }).catch((err) => {
                    // TODO: handle error 
                    console.error('db connect err=>', err);
                });
            }
            this._collection = this.db.collection(this._collectionName);
        }
        return this._collection;
    }

    insertDocument(data) {
        data.id = uuid.v4();
        return this.getCollection().then(async (collection) => {
            let result = await collection.insert(data);
            return result;
        }).catch((err) => {
            console.error('get collection error=>', err)
            throw err;
        });
    }

    getDocuments() {
        return this.getCollection().then(async (collection) => {
            let documents = await collection.find().toArray();
            return documents;
        }).catch(err => {
            console.error('get collection error=>', err)
            throw err;
        });
    }

    removeDocuments(structure) {
        return this.getCollection().then(async (collection) => {
            let documents = await collection.remove({ id: structure.id });
            return documents;
        }).catch(err => {
            console.error('delete collection error=>', err)
            throw err;
        });
    }
}

module.exports = mongoCollection;