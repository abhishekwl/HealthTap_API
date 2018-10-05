module.exports = (app) => {
    const testController = require('../controllers/test.controller');

    app.post('/tests', testController.create);
    app.get('/tests', testController.getAll);
    app.get('/tests/:_id', testController.get);
    app.put('/tests/:_id', testController.update);
    app.delete('/tests/:_id', testController.delete);
};