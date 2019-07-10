import { Schema } from 'mongoose';
import { model as Model } from 'mongoose';

// Defines schema for Message model
const messageSchema = new Schema({
    author: String,
    message: String,
}, { timestamps: true })

// Exports the model
export default Model('Message', messageSchema)