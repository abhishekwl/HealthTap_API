module.exports = (app) => {
    const userController = require('../controllers/user.controller');

    app.post('/users', userController.create);
    app.get('/users/:_id', userController.get);
    app.put('/users/:_id', userController.update);
    app.delete('/users/:_id', userController.delete);
};