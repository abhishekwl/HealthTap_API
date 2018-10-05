const mongoose = require('mongoose');

const collectorSchema = mongoose.Schema(
    {
        _id: { type: String, required: 'Enter _id of collector' },
        name: { type: String, required: 'Enter name of collector' },
        age: { type: Number, required: 'Enter age of collector' },
        gender: { type: String, required: 'Enter gender of collector' },
        rating: { type: Number, required: 'Enter rating of collector', default: 3 },
        status: { type: String, enum: ['IDLE','BUSY'], default: ['IDLE'] }, //IDLE || BUSY
        image: { type: String, required: 'Enter image of collector', default: '' }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('collector', collectorSchema);