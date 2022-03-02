const DatabaseServices = require('../Contracts/DatabaseServices');
const InMemoryUserRepository = require('./InMemoryUserRepository');
const User = require('../entities/User');

module.exports = class InMemoryDatabaseServices extends DatabaseServices {
    constructor() {
        super();
        this.userRepository = new InMemoryUserRepository();
    }

    async initDatabase() {
        this.seedData();
    }

    async seedData() {
        let sampleUser = new User('Diego', 'Basurco', 'correo', 'clave');
        sampleUser = await this.userRepository.add(sampleUser);
    }
}