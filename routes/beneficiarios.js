const express = require("express");

const beneficiarioSchema = require("../models/beneficiario");
const { error } = require("console");

const router = express.Router();


// create user
router.post("/beneficiarios",(req,res)=>{
    const user = beneficiarioSchema(req.body);
    user
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});


// get all users
router.get("/beneficiarios",(req,res)=>{
    beneficiarioSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


// get a user
router.get("/beneficiarios/:id",(req,res)=>{
    const {id} = req.params;
    beneficiarioSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


// delete a user
router.delete("/beneficiarios/:id",(req,res)=>{
    const {id} = req.params;
    beneficiarioSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}));
});

// update user
router.put("/beneficiarios/:id",(req,res)=>{

    const {id} = req.params;
    const {nombre,telefono,numero_familiares,documento} = req.body;
    beneficiarioSchema
    .updateOne({_id:id},{$set:{nombre,telefono,numero_familiares,documento}})
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
});

module.exports=router;