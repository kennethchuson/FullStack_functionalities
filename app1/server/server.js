const express = require('express')
const bodyParser  = require('body-parser') 
const cors  = require('cors') 
const session  = require('express-session') 
const cookieParser = require('cookie-parser')
const socket = require("socket.io")
const http = require('http')
const url = require('url')
const fs = require('fs')
const helmet = require('helmet')


const homeRouter = require('./routes/Home')


const app = express() 


const PORT = 3001 

//sockets 
const server = http.createServer(app) 
const io = socket(server)


const socketRouter = require("./routes/SocketRouter")(io)



app.use(helmet()) 
app.use(session({
  secret: 'your-secret-key', // a secret key to sign the session ID cookie
  resave: false, // whether to save the session even if it is not modified
  saveUninitialized: true // whether to save a new, but unmodified session
}));

app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "DELETE", "PUT"], 
    credentials: true
}))

app.use(cookieParser()) 
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))




app.use('/', homeRouter)
app.use('/api/v1', socketRouter)



//socket connection 
io.on("connection", (socket) => {
    console.log('A user connected');
    // emit events or do some other server-side logic here

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
})




server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})


