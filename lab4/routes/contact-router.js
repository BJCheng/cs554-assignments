var router = require('express').Router();
var fs = require('fs');
var path = require('path');

router.post('/', (req, res) => {
    fs.readFile(path.resolve('MOCK_DATA.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        let newData = JSON.parse(data);
        req.body.id = newData.length + 1;
        newData.push(req.body);
        fs.writeFile(path.resolve('MOCK_DATA.json'), JSON.stringify(newData), (err) => {
            if (err) throw err;

            res.setHeader('Content-Type', 'application/json');
            res.send(newData);
        });
    });
});

module.exports = router;