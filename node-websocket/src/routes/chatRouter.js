import ChatController from '../controllers/chatController'

const chatRouter = app => {

    // Route for Chat's create service
    app.route('/chat/create')
        .post(ChatController.create)

    // Route for Get Messages service
    app.route('/chat/messages')
        .get(ChatController.getMessages)

    // Route for create a new message
    app.route('/chat/messages/create')
        .put(ChatController.createMessage)

}

export default chatRouter