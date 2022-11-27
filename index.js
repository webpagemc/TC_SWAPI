require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 1002;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

//react config

app.get("/character/:url",(req,res)=>{

    const url = req.params.url;
    const id = url.split("/").pop()
   
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then((character)=>{character.json()})
    .then((data)=>{res.json({data})})

})


//static files
app.use(express.static("./src/public"));

//routes

app.listen(PORT,()=>{console.log(`Aplication running in port ${PORT}`)});
