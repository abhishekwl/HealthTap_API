const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = global.Promise;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.status(200).json({ message: 'App deployed successfully' });
});

require('./app/routes/user.routes')(app);
require('./app/routes/hospital.routes')(app);
require('./app/routes/test.routes')(app);
require('./app/routes/collector.routes')(app);
require('./app/routes/order.routes')(app);
app.listen(config.PORT, '0.0.0.0', ()=>{
    console.log('[SERVER] Listening on port '+config.PORT);
    mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
    .then(()=>console.log('[MONGODB] Successfully connected to DB'))
    .catch(err=>{
        console.log('[!MONGODB] '+err);
        console.log('Exiting now..');
    });
});