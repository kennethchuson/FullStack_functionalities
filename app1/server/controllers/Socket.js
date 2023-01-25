const express = require('express') 

const router = express.Router();




const Socker = async (req, res) => {
    try {
        res.status(200).json({message: "1st Route (Socket)", page: 1.1})
    } catch (err) {
        res.status(404).json({message: err, page: 'X'})
    }
}

module.exports = Socker