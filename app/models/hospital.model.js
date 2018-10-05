const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema(
    {
        _id: { type: String, required: 'Enter _id of hospital' },
        name: { type: String, required: 'Enter name of hospital' },
        latitude: { type: Number, required: 'Enter latitude of hospital' },
        longitude: { type: Number, required: 'Enter longitude of hospital' },
        city: { type: String, required: 'Enter city in which the hospital is in' },
        image: { type: [String], required: 'Enter images of hospital', default: [] } 
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('hospital', hospitalSchema);