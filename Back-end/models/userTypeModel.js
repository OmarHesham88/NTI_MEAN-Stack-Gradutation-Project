const mongoose = require('mongoose');

const userTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    description: {
        type: String,  
    }
},
{
    timestamps: true 
});
module.exports = mongoose.model('UserType', userTypeSchema);
