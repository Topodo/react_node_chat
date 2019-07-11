import { Schema } from 'mongoose';
import { model as Model } from 'mongoose';
import { chatSchema as Chat } from './chat'

// Defines the schema for the model
const userSchema = new Schema({
    username: String,
    password: String,
    chats: [Chat]
}, { timestamps: true })

// Exports the model
export default Model('User', userSchema)