var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('*', (req, res) => {
    res.status(500).send('invalid request');
});

app.set('port', 3000);
app.listen('3000', () => {
    console.log(`Server listening at port ${app.get('port')}`);
});