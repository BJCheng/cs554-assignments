extract computational tasks from server into a anothor worker process by using node-redis-pubsub package. <br/><br/>
the benefit of such a separating is to split the concern and allocate different resources on different tasks.<br/><br/>
for example, server might need more RAM to allow more connections; computational process might need more powerful cpus to calculate faster.<br/><br/>
different group of people can also work on different tasks without interfering each other.<br/>
