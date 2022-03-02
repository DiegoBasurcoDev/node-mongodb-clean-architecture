const InMemoryDatabaseServices = require('../InMemory/InMemoryDatabaseServices');
const MongoDBDatabaseService = require('../Contracts/MongoDBDatabaseServices');
const UserRepository = require('../Contracts/UserRepository');

module.exports = (() => {
    return {
        DatabaseService: new UserRepository(),
        MongoDBDatabaseService: new MongoDBDatabaseService()
    };
})();