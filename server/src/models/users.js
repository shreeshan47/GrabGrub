const mongoose = require('mongoose');

const regsitrationSchema = new mongoose.Schema({
    phoneNumber: Number,
    password: String,
});

const Users = mongoose.model('Users', regsitrationSchema);
module.exports = Users