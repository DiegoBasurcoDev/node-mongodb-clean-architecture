const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    password: String
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('User', userSchema);