var dummyData = require('./dummy.js');

var getById = ((id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // find project
            let people = dummyData.find((data) => {
                return data.id == id;
            });
            if (people) {
                resolve(people);
            } else {
                reject('cannot find contact with this id');
            }
        }, 5000);
    });
});

module.exports = getById;