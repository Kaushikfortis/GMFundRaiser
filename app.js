const dotenv= require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

dotenv.config({ path:'./config.env'})

require('./db/conn');

app.use(express.json());

//linking the router files
app.use(require('./router/auth'));

//const Regs = require('./models/userSchema');

// Middleware

const middleware= (req,res,next) => {
    console.log(`you are in the middleware!`);
    next();
}

app.get('/about',(req,res)=>{
    res.send('Hello from the about server');
});

app.get('/contact',middleware,(req,res)=>{
    res.send('Hello from the contact server');
});

app.get('/',(req,res)=>{
    res.send('Hello from the server of app.js');
});


console.log('hello');



app.listen(3000,()=>{
    console.log(`server is running at port 3000`);
})