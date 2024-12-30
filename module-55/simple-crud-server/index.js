const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

//abusayedrifat0131
//NiB2qHg5oAzsI22e

app.get('/', (req, res) => {
  res.send("mongodb using as backend. Simple CRUD is running")

})
const {
  MongoClient,
  ServerApiVersion,
  ObjectId
} = require('mongodb');

const uri = "mongodb://localhost:27017"

// const uri = "mongodb+srv://abusayedrifat0131:NiB2qHg5oAzsI22e@cluster0.faxnq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    
    const database = client.db("userDB");
    const userCollection = database.collection('users');
    
    app.get('/users', async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })
    
    
    app.post('/users', async (req, res) => {
      const users = req.body;
      console.log('hittiong on server', users);
      const result = await userCollection.insertOne(users);
      res.send(result)
    })
    
    app.delete('/users/:id', async (req, res) => {
      const deleteId = req.params.id;
      console.log(deleteId);
      const query = {
        _id: new ObjectId(deleteId)
      }
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })
    
    app.get('/users/:id', async (req,res)=>{
      const findId = req.params.id
        const query = {
          _id: new ObjectId(findId)
        }
        const user = await userCollection.findOne(query);
        res.send(user) 
    })

    app.put('/users/:id', async(req,res)=>{
      const findId = req.params.id
      const updatedUser = req.body
      console.log(findId, updatedUser);
      
      const filter = {
        _id: new ObjectId(findId)
      }
      const options = {upsert:true}
      const updateDoc = {
        $set:{
          name: updatedUser.name,
          email: updatedUser.email
        }
      }
      const result = await userCollection.updateOne(filter, updateDoc, options )
      res.send(result)
    })
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({
      ping: 1
    });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`listening from port ${port}`);

})