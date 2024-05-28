const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose-connection');
const ownersRoute = require('./routes/ownersRouter');
const usersRoute = require('./routes/usersRouter');
const productsRoute = require('./routes/productsRouter');
const { error } = require('console');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use("/owner" , ownersRoute);
app.use("/user" , usersRoute);
app.use("/product" , productsRoute);

app.listen(3000, () => {
    if(error){
        console.log(error);
    }
    else{
        console.log("localhost: https://localhost:3000/")
    }
});
