require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.json({message:"hello from server"});
})

app.listen(port,()=>{
    console.log(`Server is run on ${port} no.`);
})