const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async(req, res) => {
    const products = await Product.find().populate({path: 'subCategory', populate: {path: 'category'}});
    if(!products){
        res.status(500).json({success: false})
    }
    res.status(200).json(products);
}
);

module.exports = router;