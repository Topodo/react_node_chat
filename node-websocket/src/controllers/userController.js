import User from '../schemas/user';
import Chat from '../schemas/chat';

class UserController {

    // Returns all data from specific User
    getUser(request, response) {
        User.findById(request.params.userId)
            .then(user => response.json(!user ? {} : user))
            .catch(error => response.json(error))
    }

    // Returns the chats of an user
    getChats(request, response) {
        User.findById(request.params.userId)
            .then(user => response.json(!user.chats ? [] : user.chats))
            .catch(error => response.json(error))
    }

    // Creates a new User
    create(request, response) {
        let user = new User(request.body)
        user.save()
            .then(result => response.json(result))
            .catch(error => response.json(error))
    }

    // Creates a new chat for an User
    createChat(request, response) {
        User.findById(request.params.userId)
            .then(user => {
                let chat = new Chat(request.body)
                user.chats = [...user.chats, chat]
                return user.save()
            })
            .then(result => response.json(result))
            .catch(error => response.json(error))
    }

}

export default new UserController