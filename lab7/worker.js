const nrp = require('./redis-connection')
const requestPromise = require('request-promise');

nrp.on('research', async (data, channel) => {
    console.log('redis receive research event');
    //call pixabay API
    let option = {
        url: `https://pixabay.com/api/?key=6046842-3f4bef53f6c1393f1e9fad569&q=${data.searchQuery}&img_type=photo&pretty=true`,
        json: true
    }

    try {
        let result = await requestPromise(option);
        nrp.emit('result', Object.assign(result, data));
    } catch (e) {
        nrp.emit('error', {e});
    }
});