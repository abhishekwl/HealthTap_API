module.exports = (app) => {
    const collectorController = require('../controllers/collector.controller');

    app.post('/collectors', collectorController.create);
    app.get('/collectors/:_id', collectorController.get);
    app.put('/collectors/:_id', collectorController.update);
    app.delete('/collectors/:_id', collectorController.delete);
};