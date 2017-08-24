var express = require('express');
var app = express();
var path = require('path');

app.use('/bundle', express.static('bundle'));
app.use('/public', express.static('public'));

app.get('/', (rea, res)=>{
    res.sendFile(path.resolve('index.html'));
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{
    console.log(`SPA server listening on port ${app.get('port')}`);
});