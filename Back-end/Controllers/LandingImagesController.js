const LandingImages = require('../models/landingImagesModel');

exports.addNewLandingImages = async (req, res) => {
    try {
        const landingImages = await LandingImages.create(req.body); 
        res.status(201).json(landingImages);
    } catch (err) {
        res.status(500).send(err.message); 
    }
};

exports.getLandingImages = async (req, res) => {
    try {
        const landingImages = await LandingImages.find();
        res.status(200).json(landingImages); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};
exports.deleteLandingImages = async (req, res) => {
    try {
        await LandingImages.deleteMany({});

        res.status(200).json({ message: 'All landing images deleted successfully' }); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};
