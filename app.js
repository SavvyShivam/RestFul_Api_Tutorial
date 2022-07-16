const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// const bodyParser = require("body-parser");

// app.use(bodyParser.json());
app.use(express.json);

// Middleware - middleware helps to run another function at the time of sending requests and sending responses to server. means that at the middle point it will another function.

// app.use('/posts',()=>{
//     console.log('This is middleware');
// });


// Import the Routes
const postRoute = require('./Routes/posts')
app.use("/posts", postRoute );

// Routes
// GET() -> fetch the data , POST() -> push the data
// Patch() -> update the data , DELETE() -> delete the data

app.get("/", (req, res) => {
  res.send("I'm inside the app");
});


// connect to the mongoDb server

mongoose.connect(
  process.env.DB_CONNECTION,
  () => {
    console.log("Mongoose Connected");
  }
);

// listen on http://localhost:3000
app.listen(3000);
