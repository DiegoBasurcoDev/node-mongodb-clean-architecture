const User = require('../models/User');

module.exports = class UserRepository {
    constructor() { }

    add(userInstance){
        return Promise.reject(new Error('Not implemented'));
    }

    async getAll() {
        return User.find();
    }
};