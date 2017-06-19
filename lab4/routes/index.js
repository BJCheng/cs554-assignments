var defaultRouter = require('./default-router');
var dataRouter = require('./data-router');
var contactRouter = require('./contact-router');

module.exports = function configRoutes(app) {
    app.use('/', defaultRouter);
    app.use('/data', dataRouter);
    app.use('/contact', contactRouter);

    app.get('*', (req, res) => {
        res.status(404).send('invalid request');
    });
}