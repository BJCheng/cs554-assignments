var nrp = require('../redis-connection');

module.exports = {
    getContactById: (contactId) => {
        return new Promise((fulfill, reject) => {
            let readEventConfig = {
                contactId: contactId,
                replySuccessEvent: 'READ-SUCCESS-REPLY',
                replyFailEvent: 'READ-FAIL-REPLY'
            };

            //haven't deal with the worker process down situation
            nrp.emit('read', readEventConfig);

            nrp.on(readEventConfig.replySuccessEvent, (data, channel) => {
                fulfill(data)
            });
            nrp.on(readEventConfig.replyFailEvent, (data, channel) => {
                reject(data)
            });
        });
    },

    createNewContact: () => {
        return new Promise((fulfill, reject) => {
            let createEventConfig = {
                replySuccessEvent: 'CREATE-SUCCESS-REPLY',
                replyFailEvent: 'CREATE-FAIL-REPLY'
            };

            nrp.emit('create', createEventConfig);

            nrp.on(createEventConfig.replySuccessEvent, (data, channel) => {
                fulfill(data);
            });

            nrp.on(createEventConfig.replyFailEvent, (data, channel) => {
                reject(data);
            });
        });
    },

    deleteContactById: (contactId) => {
        return new Promise((fulfill, reject) => {
            let deleteEventConfig = {
                contactId: contactId,
                replySuccessEvent: 'DELETE-SUCCESS-REPLY',
                replyFailEvent: 'DELETE-FAIL-REPLY'
            };

            nrp.emit('delete', deleteEventConfig);

            nrp.on(deleteEventConfig.replySuccessEvent, (data, channel) => {
                fulfill(data);
            });

            nrp.on(deleteEventConfig.replyFailEvent, (data, channel) => {
                reject(data);
            });
        });
    },

    updateContactById: (contactId) => {
        return new Promise((fulfill, reject) => {
            let updateEventConfig = {
                contactId: contactId,
                replySuccessEvent: 'UPDATE-SUCCESS-REPLY',
                replyFailEvent: 'UPDATE-FAIL-REPLY'
            };

            nrp.emit('update', updateEventConfig);

            nrp.on(updateEventConfig.replySuccessEvent, (data, channel) => {
                fulfill(data);
            });

            nrp.on(updateEventConfig.replyFailEvent, (data, channel) => {
                reject(data);
            });
        });
    }
}