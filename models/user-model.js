const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/junkie");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: String,
    cart: {
        type: Array,
        default: [],
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,
});


module.exports = mongoose.model('user', userSchema);
