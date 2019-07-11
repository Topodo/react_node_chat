import { Schema } from 'mongoose';
import { model as Model } from 'mongoose';
import { messageSchema as Message } from './message'

// Defines schema for Chat model
export const chatSchema = new Schema({
    chatName: String,
    messages: [Message]
}, { timestamps: true })

// Exports the model
export default Model('Chat', chatSchema)