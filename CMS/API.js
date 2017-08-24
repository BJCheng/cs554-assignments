var express = require('express');
var app = express();
var path = require('path');

app.get('/', (rea, res)=>{
});

app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), ()=>{
    console.log(`API server listening on port ${app.get('port')}`);
});