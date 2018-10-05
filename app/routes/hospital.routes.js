module.exports = (app) => {
    const hospitalController = require('../controllers/hospital.controller');

    app.post('/hospitals', hospitalController.create);
    app.get('/hospitals', hospitalController.getAll);
    app.get('/hospitals/:_id', hospitalController.get);
    app.put('/hospitals/:_id', hospitalController.update);
    app.delete('/hospitals/:_id', hospitalController.delete);
};