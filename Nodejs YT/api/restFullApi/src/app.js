const express = require("express");
const app = express();
const port = process.nextTick.PORT || 3000;

app.get('/',(req,res)=>{})

// create a new student 

app.post('/students',(req,res)=>{
    res.send("Hellofrom the otherside");
})

app.listen(port,()=>{
    console.log(`Connection is set at ${port}`);
})