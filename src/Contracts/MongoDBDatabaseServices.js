const mongoose = require('mongoose');

module.exports = class MongodbDatabase {
    constructor() {}

    getConnection() {
        return mongoose.connect('mongodb+srv://dbasurco:dbasurco@cluster0.ruog3.mongodb.net/pruebanoticia?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });
    }
}