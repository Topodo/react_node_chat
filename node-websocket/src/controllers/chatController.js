import User from '../schemas/user'
import Message from '../schemas/message'
import Chat from '../schemas/chat'

// Returns a specific chat
const _getChat = (chats, chatId) => {
    let chat
    for (chat of chats) {
        if (chat.id === chatId) return chat
    }
    return {}
}

// Return the messages of a chat
const _getMessages = chat => {
    return chat.messages
}

class ChatController {

    // Create a new chat
    create(request, response) {
        let chat = new Chat(request.body)
        chat.save()
            .then(result => response.json(result))
            .catch(error => response.json(error))
    }

    // Returns all the messages of a specific chat
    getMessages(request, response) {
        User.findById(request.query.userId)
            .then(user => _getChat(user.chats, request.query.chatId))
            .then(chat => response.json(chat.messages))
            .catch(error => response.json(error))
    }

    // Add a new message for a specific chat
    createMessage(userId, chatId, body) {
        let chatRet
        User.findById(userId)
            .then(user => {

                // Gets the chat, his messages and creates a new
                // Message from the body of request

                let chat = _getChat(user.chats, chatId)
                let messages = _getMessages(chat)
                let message = new Message(body)

                // Concat the messages in the database with the
                // new message
                messages = [...messages, message]
                chat.messages = messages

                user.save()
                return _getMessages(chat)
            })
            .then(chat => chatRet = chat)
            .catch(error => console.error(error))
        return chatRet
    }
}

export default new ChatController