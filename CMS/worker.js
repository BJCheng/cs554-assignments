const nrp = require('./redis-connection')
const MongoCollection = require('./models/mongo-collection')
const WorkerEvents = require('./enums/worker-events');

nrp.on(WorkerEvents.InsertDocument, async (data, channel) => {
    let mongoCollection = new MongoCollection(data.name);
    let result;
    try {
        result = await mongoCollection.insertDocument(data);
        nrp.emit(WorkerEvents.DocumentInserted, 'hello');
    } catch (e) {
        nrp.emit(WorkerEvents.DocumentNotInsert, e);
    }
});

nrp.on(WorkerEvents.CreateStructure, async (data, channel) => {
    let structuresCollection = new MongoCollection('structures');
    let result;
    try {
        result = await structuresCollection.insertDocument(data);
        nrp.emit(WorkerEvents.DocumentInserted, 'hello');
    } catch (e) {
        nrp.emit(WorkerEvents.DocumentNotInsert, e);
    }
});

nrp.on(WorkerEvents.GetStructures, async (data, channel) => {
    let structuresCollection = new MongoCollection('structures');
    let result;
    try {
        result = await structuresCollection.getDocuments();
        nrp.emit(WorkerEvents.GotStructures, result);
    } catch (e) {
        nrp.emit(WorkerEvents.GotStructuresFail, err);
    }
});

nrp.on(WorkerEvents.DeleteStructure, async (data, channel) => {
    let structuresCollection = new MongoCollection('structures');
    let result;
    try {
        result = await structuresCollection.removeDocuments(data);
        nrp.emit(WorkerEvents.StructureDeleted, result);
    } catch (e) {
        nrp.emit(WorkerEvents.StructureDeletedFail, err);
    }
});

nrp.on(WorkerEvents.GetEntries, async (slug, channel) => {
    let entryCollection = new MongoCollection(slug);
    let result;
    try {
        result = await entryCollection.getDocuments();
        nrp.emit(WorkerEvents.GotEntries, result);
    } catch (e) {
        nrp.emit(WorkerEvents.GotEntriesFail, e);
    }
});