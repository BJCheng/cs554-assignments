var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors')
var bodyParser = require('body-parser');
var nrp = require('./redis-connection');
var WorkerEvents = require('./enums/worker-events');

app.use(cors())
// get parameter from axios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/admin/structures', (req, res) => {
    nrp.emit(WorkerEvents.GetStructures, '');
    nrp.on(WorkerEvents.GotStructures, (data, channel) => {
        res.send(data);
    });
    nrp.on(WorkerEvents.GotStructuresFail, (data, channel) => {
        res.status(400).send(data);
    });
});

app.post('/admin/structures/new', (req, res) => {
    nrp.emit(WorkerEvents.CreateStructure, req.body);
    nrp.on(WorkerEvents.DocumentInserted, (data, channel) => {
        res.send('hello from api')
    });
    nrp.on(WorkerEvents.DocumentNotInsert, (data, channel) => {
        res.status(400).send(data);
    });
});

app.post('/admin/structures/delete', (req, res) => {
    let structure = req.body;
    nrp.emit(WorkerEvents.DeleteStructure, req.body);
    nrp.on(WorkerEvents.StructureDeleted, (data, channel) => {
        res.send('hello from api')
    });
    nrp.on(WorkerEvents.StructureDeletedFail, (data, channel) => {
        res.status(400).send(data);
    });
});
app.get('/admin/structures/:slug/list', (req, res) => {
    // res.send([{
    //     name: 'dog1',
    //     type: 'la bu la do'
    // }, {
    //     name: 'dog2',
    //     type: 'wood'
    // }]);
    // let structure = req.body;
    let structureSlug = req.params.slug;
    nrp.emit(WorkerEvents.GetEntries, structureSlug);
    nrp.on(WorkerEvents.GotEntries, (documents, channel) => {
        res.send(documents);
    });
    nrp.on(WorkerEvents.GotEntriesFail, (data, channel) => {
        res.status(400).send(data);
    });
});

app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () => {
    console.log(`API server listening on port ${app.get('port')}`);
});