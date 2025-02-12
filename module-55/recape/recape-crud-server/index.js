const express = require("express")
const cors = require("cors")
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('recaping mongodb database primary usage')
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-practice.wkq4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-practice`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("DB");
    const userCollection = database.collection("user");
      
    app.post('/users',async (req,res)=>{
      const user = req.body
      console.log('hitting on server',user);
      const result = await userCollection.insertOne(user)
      res.send(result)
    })

    app.get('/users',async(req,res)=>{
      const cursor = userCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.delete('/users/:id',async(req,res)=>{

      const id = req.params.id;
      console.log(id);
      const query = {
        _id: new ObjectId(id)
      }
      const result = await userCollection.deleteOne(query);
      res.send(result)
    })

    app.get('/users/:id',async(req,res)=>{
      const findId = req.params.id
      const query = {
        _id:new ObjectId(findId)
      }
      const user = await userCollection.findOne(query);
      res.send(user)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, ()=>{
    console.log('listening from port :',port);
    
})