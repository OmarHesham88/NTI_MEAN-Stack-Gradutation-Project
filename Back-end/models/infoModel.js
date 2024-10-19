const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    worktime1: {
        type: String,
        default: 'test',
    },
    worktime2: {
        type: String,
        default: 'test',
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Info', infoSchema);
