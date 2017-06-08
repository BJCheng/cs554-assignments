// var express = require('express');
import express from './express';
var app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/lab2.html');
});

app.get('*', (req, res) => {
    res.status(404).send('page not found');
});

app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log(`server listening at port ${app.get('port')}`);
});
