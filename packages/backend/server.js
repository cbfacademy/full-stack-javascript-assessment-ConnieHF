const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

require("dotenv").config();
const app = express();

app.use(helmet());
// cors is used becaused frontend and backend run on different ports
app.use(cors());
// the data is a simple string, so 'extended: false' is added
app.use(express.json({ extended: false }));

// import DB connection from .env file
const uri = process.env.MONGO_URI; // Add your connection string from Atlas to your .env file. See https://docs.atlas.mongodb.com/getting-started/
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// DB connection error handing
client.connect((err) => {
  if (err) {
    console.error("Error connecting to MongoDB", err);
    return;
  }
  console.log("Connected to MongoDB");
  client.close();
});

// to read data from the server (backend)
app.get("/readfromserver", (req, res) => {
  res.json({message:"Hello from the CBF Academy backend!"}); //  was res.send
});

// to write data to MongoDB
app.post("/writetodatabase", async (req, res) => {
  try {
    // req.body is used to access input data from the frontend
    // and place it in an object called content
    const {content} = req.body;
    // // data is structured according to the data model
    // const newData = new DataModel({ content });
    const newData = {content};
    // the data is saved in the newData variable
    await newData.save();
    // send response to the frontend
    res.json({message: "Data saved successfully"})
  } catch (error) {
    console.log("??? error ???", error.message);
    // error message to send to the frontend
    res.status(500).send("Server error while saving data")
  }
})

// // mongodb schema
// const DataSchema = new MongoDB.Schema({
//   content: {
//     type: String,
//     required: true
//   }
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // perform a database connection when the server starts
  console.log(`Server started on http://localhost:${PORT}`);
});
