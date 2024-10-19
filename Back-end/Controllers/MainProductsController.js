const MainProducts = require('../models/mainProductsModel');

// Add a new main product
exports.addMainProduct = async (req, res) => {
    try {
        const mainProduct = await MainProducts.create(req.body);
        res.status(201).json(mainProduct);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Get all main products
exports.getMainProduct = async (req, res) => {
    try {
        const mainProducts = await MainProducts.find();
        res.status(200).json(mainProducts);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Update a main product
exports.updateMainProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await MainProducts.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).send('Main product not found');
        }
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteMainProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await MainProducts.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).send('Main product not found');
        }
        res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
