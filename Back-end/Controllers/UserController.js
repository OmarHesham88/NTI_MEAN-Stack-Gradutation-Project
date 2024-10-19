const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.addNewUser = async (req, res) => {
    try {
            const {name,email,password,userType} = req.body;
            const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({name,email,userType,password:hashedPassword});
        res.status(201).json(user); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('userType');
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
