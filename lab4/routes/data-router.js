var router = require('express').Router();

router.get('/', (req, res) => {
    res.json(require('../MOCK_DATA.json'));
});

module.exports = router;