var mongoClient = require('mongodb').MongoClient;

const config = {
    serverUrl: 'mongodb://admin:admin@ds151973.mlab.com:51973/', 
    db: 'cms'
};

let mongoUrl = config.serverUrl+config.db;
let mongoConnection = undefined;

let connectDb = ()=>{
    if(!mongoConnection){
        mongoConnection = mongoClient.connect(mongoUrl);
    }

    return mongoConnection;
}

module.exports = connectDb;