const Info = require('../models/infoModel');

exports.saveContactDetails = async (req, res) => {
    try {
        const { phone, email } = req.body;

        const updatedContactInfo = await Info.findOneAndUpdate(
            {},
            { phone, email },
            { new: true, runValidators: true }
        );
        if (!updatedContactInfo) {
            return res.status(404).send('No contact details found to update');
        }

        res.status(200).json(updatedContactInfo);
    } catch (err) {
        res.status(500).send(err.message);
    }
};




exports.saveWorktimeDetails = async (req, res) => {
    try {
        const { worktime1, worktime2 } = req.body;
        const updatedInfo = await Info.findOneAndUpdate({}, { worktime1, worktime2 }, { new: true, runValidators: true });
        
        if (!updatedInfo) {
            return res.status(404).send('No contact details found to update worktime');
        }

        res.status(200).json(updatedInfo);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getContactDetails = async (req, res) => {
    try {
        const contactInfo = await Info.findOne();
        
        if (!contactInfo) {
            return res.status(404).send('No contact details found');
        }

        res.status(200).json(contactInfo);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
exports.getWorktimeDetails = async (req, res) => {
    try {
        const contactInfo = await Info.findOne().select('worktime1 worktime2');
        if (!contactInfo) {
            return res.status(404).send('No worktime details found');
        }
        res.status(200).json({
            worktime1: contactInfo.worktime1,
            worktime2: contactInfo.worktime2
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
};



