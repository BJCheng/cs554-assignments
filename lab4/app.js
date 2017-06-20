var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var configRoutes = require('./routes');

app.use(express.static('public'));
app.use('/dist', express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

configRoutes(app);

app.set('port', process.env.PORT ||3000);
app.listen(app.get('port'), () => {
    console.log(`server listening at ${app.get('port')}`);
});