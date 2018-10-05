const mongoose = require('mongoose');

const testSchema = mongoose.Schema(
    {
        hospital_id: { type: String, required: 'Enter hospital_id of test' },
        name: { type: String, required: 'Enter name of test', text: true },
        price: { type: Number, required: 'Enter price of test' },
        popularity: { type: Number, required: 'Enter popularity of test', default: 0 },
        image: { type: String, required: true, default: '' }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('test', testSchema);