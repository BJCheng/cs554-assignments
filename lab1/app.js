var app = require('express')();
var router = require('./router');
var logRequest = require('./log-request');
var trackUrl = require('./track-url');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(logRequest);
app.use(trackUrl);

app.use('/api/tasks', router); 

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.set('port', 3000);
app.listen(app.get('port'), ()=>{ 
    console.log(`server listening at port ${app.get('port')}`);
}) 