import User from '../schemas/user';
import Chat from '../schemas/chat';

class UserController {

    // Returns all data from specific User
    getUser(request, response) {
        User.findById(request.params.userId)
            .then(result => response.json(result))
    }

    // Creates a new User
    create(request, response) {
        let user = new User(request.body)
        user.save()
            .then(result => response.json(result))
    }

    // Creates a new chat for an User
    createChat(request, response) {
        let chat = new Chat(request.body)
        User.findById(request.params.userId)
            .then(user => {
                let chats = user.chats
                user.chats = [...chats, chat]
                user.save()
            })
            .then(result => response.json(result))
            .catch(error => response.json(error))
    }

}

export default new UserController