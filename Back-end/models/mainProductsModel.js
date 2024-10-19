const mongoose = require('mongoose');

const mainProductsSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    src: {
        type: String, 
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    calories:{
        type:Number,
        required:true,
    }
},
{
    timestamps: true 
});

module.exports = mongoose.model('MainProducts', mainProductsSchema);
