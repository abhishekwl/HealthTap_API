const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        _id: { type: String, required: 'Enter user _id' },
        name: { type: String, required: 'Enter user name', default: 'Anonymous' },
        age: { type: Number, required: 'Enter user age' },
        blood: { type: String, required: 'Enter user blood group' },
        gender: { type: String, required: 'Enter user gender' },
        phone: { type: String, required: 'Enter user phone number' },
        additional: { type: String, required: 'Enter additional user info', default: null }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('user', userSchema);