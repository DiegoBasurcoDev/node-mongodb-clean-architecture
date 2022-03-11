const mongoose = require('mongoose');

module.exports = class MongodbDatabase {
    constructor() {}

    getConnection() {
        return mongoose.connect('', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });
    }
}
