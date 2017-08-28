async function a() {
    var mongoCollection = require('./models/mongoCollection');

    let collection1 = new mongoCollection(1);
    console.log('first:', await collection1.getCollection());
    console.log('second:', await collection1.getCollection())
};
a();