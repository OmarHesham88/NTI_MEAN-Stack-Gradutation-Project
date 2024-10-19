const mongoose = require('mongoose');
const landingImagesSchema = new mongoose.Schema({
    src: {
        type: String,
        required: true, 
    },
},
);

module.exports = mongoose.model('LandingImages', landingImagesSchema);
