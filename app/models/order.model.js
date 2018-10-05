const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        user_id: { type: String, required: 'Enter user_id of order' },
        hospital_id: { type: String, required: 'Enter hospital_id of order' },
        collector_id: { type: String, required: 'Enter collector_id of order' },
        status: { type: String, enum: ['WAITING', 'ENROUTE', 'ACTIVE', 'COMPLETED'], default: ['WAITING'] },   //WAITING || ENROUTE || ACTIVE || COMPLETE
        latitude: { type: Number, required: 'Enter latitude of hospital' },
        longitude: { type: Number, require: 'Enter longitude of hospital' }
    }
);

module.exports = mongoose.model('order', orderSchema);