const express = require('express') 

const router = express.Router();




const home = async (req, res) => {
    try {
        res.status(200).json({message: "1st Route", page: 1})
    } catch (err) {
        res.status(404).json({message: err, page: 'X'})
    }
}

module.exports = home