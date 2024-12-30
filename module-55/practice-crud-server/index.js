const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://abusayedrifat0131:pvKS9MOdq1JMtWGZ@cluster0-practice.wkq4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-practice";

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
    const database = client.db("usersDB");
    const usersCollection = database.collection("users");


    app.get('/users',async(req,res)=>{
        const cursor = usersCollection.find();
        const result = await cursor.toArray();
        res.send(result)
      })
  
    app.post('/users',async (req,res)=>{
        const users = req.body;
        console.log('hitting on server',users); 
        const result = await usersCollection.insertOne(users);
        res.send(result)
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


app.get('/',(req,res)=>{
    res.send('practice crud ')
})
app.listen(port,()=>{
    console.log(`listening from port ${port}`);
    
})

