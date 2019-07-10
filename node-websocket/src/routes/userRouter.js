import UserController from '../controllers/userController';

const userRouter = app => {

    // Route for Get User service
    app.route('/user/:userId')
        .get(UserController.getUser)

    // Route for Create User service
    app.route('/user/create')
        .post(UserController.create)

    // Route for create a new chat for an User
    app.route('/user/:userId/create_chat')
        .put(UserController.createChat)

}

export default userRouter