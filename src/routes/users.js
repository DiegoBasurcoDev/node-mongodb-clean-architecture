const express = require('express');
const UserController = require('../Controllers/UserController');

const userRouter = (dependencies) => {
    const router = express.Router();

    const controller = UserController(dependencies);

    router.route('/')
        .get(controller.getAllUsers);

    return router;
};

module.exports = userRouter;