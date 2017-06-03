var router = require('express').Router();

// The first will log all request bodies, 
// as well as the route they are requesting, and the HTTP verb they are using
function logRequest(req, res, next){
    console.log("=====Receiving Request=====")
    console.log(`Request Body: ${req.body}`);
    console.log(`Request URL: ${req.originalUrl}`);
    console.log(`HTTP verb: ${req.method}`);
    console.log("=====Request Ends=====")
    console.log('');
    next();
}

module.exports = logRequest;