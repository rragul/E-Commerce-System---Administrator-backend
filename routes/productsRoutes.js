const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async(req, res) => {
        const products = await Product.find().populate({path: 'subCategory', select: "name -_id" });
        if(!products){
            res.status(500).send({success: false})
        }
        res.status(200).json(products);
    }
);

router.get('/count', async(req, res) => {
    const productCount = await Product.count();
    if(!productCount){
        res.status(500).send({success: false})
    }
    res.status(200).send({productCount: productCount});
});




module.exports = router;