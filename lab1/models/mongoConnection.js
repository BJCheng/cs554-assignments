var mongoClient = require('mongodb').MongoClient;

const config = {
    serverUrl: 'mongodb://localhost:27017/', 
    db: 'cheng-benjen-cs554-lab1'
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