const express = require('express') 
const router = express.Router() 

const controller_home = require('../controllers/Home')


router.get('/', controller_home) 


module.exports = router 