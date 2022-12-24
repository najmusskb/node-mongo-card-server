// create server --------------------------------------------------
const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;


// MiddleWare
app.use(cors());
app.use(express.json());
const uri = 'mongodb://localhost:27017';

// const uri = "mongodb+srv://Database5:FRCIbWvlvCBWeEwA@cluster0.jrurpuf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollections = client.db('nodemongoDBCrud').collection('users')
        const information = {
            name: 'testiong',
            email: 'nice to meet you  testing@gmail.com'
        }
        const result = await userCollections.insertOne(information)
        console.log(result);

    }
    finally {

    }

}
run().catch(err => console.log(err))





app.get('/', (req, res) => {
    res.send('hello from node mongodb curd server')
})

app.listen(port, () => {
    console.log(`listening port ${port}`);
})
// ---------------------------------------------------------------------