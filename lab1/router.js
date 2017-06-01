var router = require('express').Router()

router.get('/api', (req, res)=>{
    res.send('123');
});

module.exports = router;