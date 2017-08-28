var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors')
var bodyParser = require('body-parser');

app.use(cors())
// get parameter from axios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
});

app.post('/', (req, res)=>{
    // call worker to insert document
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    res.send('hello from api')
});

app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), ()=>{
    console.log(`API server listening on port ${app.get('port')}`);
});