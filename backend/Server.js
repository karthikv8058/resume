const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");

const router = require('./routes/todoRoute');

require('dotenv').config();
const app = express()
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Connected to mongo db");
}).catch((err)=>{
    console.log(err);
})

app.use(router);

app.listen(PORT,()=>{
    console.log("Listening on : ",PORT);
})