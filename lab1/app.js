var app = require('express')();
var router = require('./router');

app.use('/', router);

app.set('port', 3000);

app.listen(app.get('port'), ()=>{
    console.log(`server listening at port ${app.get('port')}`);
})