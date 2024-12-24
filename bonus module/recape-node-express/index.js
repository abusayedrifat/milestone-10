const express = require('express');
const app = express()
const port = 5000
const personsData = require('./data.json')

app.get('/',(req, res)=>{
    res.send('this is my server. recaping node express.js')

})

app.get('/about',(req, res)=>{
    res.send('this is from about page. and see now. what do u see?')
})

app.get('/personsData', (req,res)=>{
    res.send(personsData);
})

app.get('/personsData/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    console.log('see persons id:',id);
    const person = personsData.find(person => person.id === id) || {}
    res.send(person)
       
})

app.listen(port,()=>{
    console.log(`listening from port: ${port}`);
    
})