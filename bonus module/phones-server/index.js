const express = require("express")
const phones = require('./phones.json')
const app = express()
const port = 5000

var cors = require("cors")
app.use(cors())

app.get('/',(req,res)=>{
    res.send('phones information are getting from my server. pls wait untill my data are getting here ')

})

app.get('/phones',(req,res)=>{
    res.send(phones)
})

app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    console.log("my phone id", id);
    const phone = phones.find( phone => parseInt(phone.id) === id) || {}
    
    res.send(phone)
})


app.listen(port,()=>{
    console.log(`my phone server is running on port :${port}`);
    
})