const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const users = [
    {id:1, name:"rifat", email:"rifat@gmail.com"},
    {id:2, name:"saadi", email:"saadi@gmail.com"},
    {id:3, name:"sifat", email:"sifat@gmail.com"},
    {id:4, name:"sourav", email:"sourav@gmail.com"},
]

app.use(cors());

app.get('/', (req,res)=>{
    res.send('user management server is running')
})

app.get('/users', (req, res)=>{
    res.send(users)
})

app.listen(port,()=>{
    console.log(`my server running on port : ${port}`);
    
})