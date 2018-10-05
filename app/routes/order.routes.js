module.exports = (app) => {
    const orderController = require('../controllers/order.controller');

    app.post('/orders', orderController.create);
    app.get('/orders', orderController.getAll);
    app.get('/orders/:_id', orderController.get);
    app.put('/orders/:_id', orderController.update);
    app.delete('/orders/:_id', orderController.delete);
};