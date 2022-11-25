require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 1002;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

//static files
app.use(express.static("./src/public"));

//routes

app.listen(PORT,()=>{console.log(`Aplication running in port ${PORT}`)});
