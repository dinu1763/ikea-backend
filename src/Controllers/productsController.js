const Products = require("../Models/productsModule");


const express = require("express");

const router = express.Router();


router.get("", async (req, res) => {
    try{
        const products = await Products.find().lean().exec();
        return res.status(201).send(products);
    }
    catch(e){
        return res.status(500).send({message:e.message, status:"faild"});
    }
})


router.get("/:id", async (req, res) => {
    try{
        const products = await Products.findById(req.params.id).lean().exec();
        return res.status(201).send(products);
    }
    catch(e){
        return res.status(500).send({message:e.message, status:"faild"});
    }
})



module.exports = router;