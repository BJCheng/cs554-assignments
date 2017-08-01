extract computational tasks from server into a anothor worker process by using node-redis-pubsub package. <br/><br/>
the benefit of such a separating is to split the concernt and allocate different resources on different tasks.<br/><br/>
for example, server might need more ram to allow more connections; computational process might need more powerful cpu to calculate fasrer.<br/><br/>
different group of people can work on different tasks without affecting each other.<br/>
