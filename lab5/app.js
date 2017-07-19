var express = require('express');
var app = express();
var configRoute = require('./routes');

configRoute(app);

app.set('port', 3000);
app.listen(app.get('port'), ()=>{
    console.log('Server listening at port:', app.get('port'));
})