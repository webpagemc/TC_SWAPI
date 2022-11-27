require("dotenv").config();

const express = require("express");
const cors = require("cors");
const hbs = require("express-handlebars");
const request = require("request");

const app = express();
const PORT = process.env.PORT || 1002;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

//handlebars(views)
app.engine("hbs",hbs.engine());
app.set("view engine","hbs");
app.set("views","./src/views")

//static files
app.use(express.static("./src/public"));

//routes
app.get("/character",(req,res)=>{

    const id = req.params.id

    request(`https://swapi.dev/api/people/${1}`,(err,response,body)=>{

        if (!err){
            const element = JSON.parse(body);
            res.render("character",{element});
        }

    })
});

app.listen(PORT,()=>{console.log(`Aplication running in port ${PORT}`)});
