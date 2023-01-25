const express = require("express") 
const controller_socket = require('../controllers/Socket')


const socketRouter = (io) => {
    const router = express.Router() 

    router.get("/socket", controller_socket) 

    return router
}


module.exports = socketRouter