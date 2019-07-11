import { Schema } from 'mongoose';
import { model as Model } from 'mongoose';

// Defines schema for Message model
export const messageSchema = new Schema({
    authorId: Schema.Types.ObjectId,
    author: String,
    message: String,
}, { timestamps: true })

// Exports the model
export default Model('Message', messageSchema)