import { connect as _connect } from 'mongoose';

const HOST = '127.0.0.1:27017'
const DB_NAME = 'websocket_chat'

class MongoConnection {
    constructor() {
        this.connect()
    }

    connect() {
        _connect(`mongodb://${HOST}/${DB_NAME}`, { useNewUrlParser: true })
    }
}

export default new MongoConnection()