const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/junkie").then(()=>{
    console.log("Connection Established");
}).catch((err)=>{
    console.log(err)
});

module.exports = mongoose.connection;