// const nrp = require('./redis-connection');
const requestPromise = require('request-promise');

class worker {
    constructor() {
        this.loadData();
        this.nrp = require('./redis-connection');
    }

    async loadData() {
        console.log('downloading dummy data...');
        let option = {
            uri: 'https://gist.githubusercontent.com/philbarresi/5cf15393d245b38a2d86ce8207d5076c/raw/d529fb474c1af347702ca4d7b992256237fa2819/lab5.json',
            json: true
        };
        try {
            this.data = await requestPromise(option);
            console.log('downloaded');
        } catch (e) {
            console.log(e);
        }
    }

    establish() {
        this.nrp.on('read', async (data, channel) => {
            let theContact = this.data.find((contact) => {
                return contact.id == data.contactId;
            });
            if (theContact)
                this.nrp.emit(data.replySuccessEvent, { theContact });
            else
                this.nrp.emit(data.replyFailEvent, { err: 'id not found' });
        });

        this.nrp.on('create', (data, channel) => {
            let originalLength = this.data.length;
            let newContact = {
                id: this.data.length + 1,
                first_name: 'Hello',
                last_name: 'World',
                email: `HelloWorld${this.data.length + 1}@unicef.org`,
                gender: 'unknown',
                ip_address: '111.235.111.188'
            };
            this.data.push(newContact);
            if (this.data.length > originalLength)
                this.nrp.emit(data.replySuccessEvent, { newContact });
            else
                this.nrp.emit(data.replyFailEvent, { err: 'unknown failure' });
        });

        this.nrp.on('update', (data, channel) => {
            let updatingIndex = this.data.findIndex((contact) => {
                return contact.id == data.contactId;
            });
            if (updatingIndex < 0)
                this.nrp.emit(data.replyFailEvent, { err: 'id not found' });
            else {
                this.data[updatingIndex].updated = true;
                this.nrp.emit(data.replySuccessEvent, { updatingContact: this.data[updatingIndex] });
            }
        });

        this.nrp.on('delete', (data, channel) => {
            let deletingIndex = this.data.findIndex((contact) => {
                return contact.id == data.contactId;
            });
            if (deletingIndex < 0)
                this.nrp.emit(data.replyFailEvent, { err: 'id not found' });
            else {
                if (this.data.splice(deletingIndex, 1).length > 0)
                    this.nrp.emit(data.replySuccessEvent, { success: `id ${data.contactId} deleted` });
                else
                    this.nrp.emit(data.replyFailEvent, { err: 'unknown failure' });
            }
        });
    }
}
const myWorker = new worker();
myWorker.establish();