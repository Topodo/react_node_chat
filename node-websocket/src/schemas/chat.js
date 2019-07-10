import { Schema } from 'mongoose';
import { model as Model } from 'mongoose';
var Message = require('./message').default.schema
var ObjectId = require('mongoose').Types.ObjectId

// Defines schema for Chat model
const chatSchema = new Schema({
    chatName: String,
    messages: [Message]
}, { timestamps: true })

// Exports the model
export default Model('Chat', chatSchema)