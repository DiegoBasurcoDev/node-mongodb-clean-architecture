const UserRepository = require('../Contracts/UserRepository');

module.exports = class InMemoryUserRepository extends UserRepository {
    constructor() {
        super();
        this.users = [];
        this.currentId = 1;
    }

    async add(userInstance) {
        try{
            this.currentId = this.currentId + 1;
            userInstance.id = this.currentId;
            this.users.push(userInstance);
        } catch (error) {
            throw new Error('Error Occurred');
        }

        return userInstance;
    }

    async getAll() {
        return this.users;
    }
}