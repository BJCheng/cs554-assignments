const mongoCollection = require('./models/mongo-collection');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

test('class initiate', async () => {
    let collection1 = new mongoCollection(1);
    let collection2 = new mongoCollection(2);

    let val1 = await collection2.getCollection();
    let val2 = await collection2.getCollection();

    expect(val1 + val2).toBe(4);
})