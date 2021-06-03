const mongoose = require('mongoose');

const userSchema = {
    username: String,
    password: String,
    email: String
}

const Users = mongoose.model('Users', userSchema)

module.exports = Users;