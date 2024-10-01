const express = require("express")
const app = express()
const port = 5000;

app.get("/",(req, res)=>{
    res.send("hello . this my first server created on 30th september 2024")
})

app.listen(port, ()=>{
    console.log(`my first running server : ${port}`);
    
} )