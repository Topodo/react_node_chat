import express from 'express';
import socket from 'socket.io';
import './db/mongoConnection';
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Router
var userRouter = require('./routes/userRouter').default
userRouter(app)

const server = app.listen(process.env.PORT || 8080)

var io = socket(server)

io.on('connection', socket => {
    // Receives the message
    socket.on('SEND_MESSAGE', data => {
        // Emits the received message
        io.emit('RECEIVE_MESSAGE', data)
    })
})