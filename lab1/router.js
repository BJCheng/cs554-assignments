var router = require('express').Router()
var mongoCollections = require('./models/mongoCollection');
var getTasksCollection = mongoCollections.tasks;  //==> a closure, not yet executed
var uuid = require('uuid');

router.get('/', (req, res) => {
    // Shows a list of tasks, with optional querystring parameters ?skip and ?take; 
    // will show up to 20 tasks by default, and max of 100 at a time
    // ?take to be a valid number from 1 to 100, and instead of displaying 20
    // ?skip would allow you to start at a different index position. 
    // if you did ?skip=2 and the data was ["a", "b", "c", "d", "e"], it would return ["c", "d", "e"]
    let take = req.query.take;
    let skip = req.query.skip;
    take = parseInt(take ? take : 20);
    skip = parseInt(skip ? skip : 0);
    return getTasksCollection().then((tasks) => {
        return tasks.find().limit(take).skip(skip).toArray().then((objs) => {
            res.json(objs);
        });
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post('/', (req, res) => {
    // Creates a task with the supplied detail and returns created object
    // fails request if not all details supplied

    if (!hasRequiredAttrs(req.body)) {
        res.send("request doesn't contain enough attributes");
        return;
    }
    // 寫入資料進db
    let creatingTask = req.body;
    creatingTask['id'] = uuid.v4();
    getTasksCollection().then((taskCollection) => {
        return taskCollection.insert(creatingTask);
    }).then(result => {
        res.json(creatingTask);
    }).catch(err => {
        res.status(500).send(err);
        return;
    });
});

router.get('/:id', (req, res) => {
    getTasksCollection().then((taskCollection) => {
        return taskCollection.findOne({ "id": req.params.id })
    }).then((document) => {
        res.send(document);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.put('/:id', (req, res) => {
    // Updates the task with the supplied ID and returns the new task object
    // task: PUT calls must provide all details of the new state of the object! 
    // Note you cannot manipulate comments in this route!
    let id = req.params.id;
    let creatingTask = req.body;
    if (!hasRequiredAttrs(creatingTask)) {
        res.send("request doesn't contain enough attributes");
        return;
    }
    creatingTask["id"] = id;
    delete creatingTask.comments;
    getTasksCollection().then((taskCollection) => {
        return taskCollection.update({ "id": id }, { $set: creatingTask })
    }).then(result => {
        res.send(creatingTask);
    }).catch((err) => {
        res.status(500).end(err);
    });
});

router.patch('/:id', (req, res) => {
    // Updates the task with the supplied ID and returns the new task object
    // task: PATCH calls only provide deltas of the value to update!
    // Note you cannot manipulate comments in this route!
    let id = req.params.id;
    let tasksCollection = undefined;
    delete req.body.comments;
    getTasksCollection().then((collection) => {
        tasksCollection = collection;
        return tasksCollection.update({ "id": id }, { $set: req.body });
    }).then(result => {
        return tasksCollection.findOne({ "id": id })
    }).then(document => {
        res.send(document);
    }).catch((err) => {
        res.status(500).send(err);
    });
    // TODO: exclude comment
});

/**
 * Comments
 */
router.post('/:id/comments', (req, res) => {
    // generate id for the new comment
    let id = req.params.id;
    let comment = req.body;
    comment.id = uuid.v4();
    let tasksCollection = undefined;
    getTasksCollection().then(collection => {
        tasksCollection = collection;
        return tasksCollection.update({ "id": id }, { $push: { comments: comment } });
    }).then(result => {
        if (result.result.nModified < 1) throw (`update failed: ${result}`);
        return tasksCollection.findOne({ "id": id });
    }).then(document => {
        res.send(document);
    }).catch(err => {
        res.status(500).send(err);
    });
});

router.delete('/:taskId/:commentId', (req, res) => {
    let taskId = req.params.taskId;
    let commentId = req.params.commentId;
    let tasksCollection = undefined;
    getTasksCollection().then(collection => {
        tasksCollection = collection;
        return tasksCollection.update({ "id": taskId }, { $pull: { "comments": { id: commentId } } });
    }).then(result => {
        return tasksCollection.findOne({ id: taskId });
    }).then(document => {
        res.send(document);
    }).catch(err => {
        res.status(500).send(err);
    });
});

function hasRequiredAttrs(body) {
    let taskAttributes = ['title', 'description', 'hoursEstimated', 'completed', 'comments'];
    let length = taskAttributes.length;

    //  extract realt attrs from body params
    let bodyAttrs = [];
    for (let propKey in body) {
        if (body.hasOwnProperty(propKey)) {
            bodyAttrs.push(propKey);
        }
    }

    taskAttributes = taskAttributes.filter(attr => {
        return bodyAttrs.indexOf(attr) < 0;
    });

    return taskAttributes.length < 1 ? true : false;
}

module.exports = router;