import express from 'express';
import socket from 'socket.io';
import './db/mongoConnection';
import userRouter from './routes/userRouter'
import chatRouter from './routes/chatRouter'
import ChatController from './controllers/chatController'

var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routers
userRouter(app)
chatRouter(app)

const server = app.listen(process.env.PORT || 8080)

var io = socket(server)

io.on('connection', socket => {
    // Receives the message
    socket.on('SEND_MESSAGE', data => {
        // Store the message in the database
        ChatController.createMessage(data.userId, data.chatId, data.body)
        // Emits the received message
        io.emit('RECEIVE_MESSAGE', data.body)
    })
})