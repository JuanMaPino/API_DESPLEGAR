const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const beneficiarioroute = require("./routes/beneficiarios")

// settings
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use("/api",beneficiarioroute);

// routes
app.get("/",(req,res)=>{
    res.send("Bienvenido to my PAPI")
});

// mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("Conectado a mongo atlas"))
.catch((error)=> console.error(error));


// server listening
app.listen(port,()=> console.log("serve listening",port));