const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hello from the server of auth.js');
});

router.post('/register', (req,res) => {
    console.log(req.body);
    res.json({message:req.body});
    //res.send("Router page successful");
});

module.exports = router;