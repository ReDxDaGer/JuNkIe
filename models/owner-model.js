const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
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
    products: {
        type: Array,
        default: [],
    },
    picture: String,
    gstin: String,

});


module.exports = mongoose.model('owner', ownerSchema);
