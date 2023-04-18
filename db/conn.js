const mongoose = require('mongoose');

const DB= process.env.DATABASE;

mongoose.connect(DB).then(()=> {
    console.log('connection successful for DB');
})
.catch((err)=>{
    console.log(`connection failed!`);
})