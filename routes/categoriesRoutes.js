const express = require('express');
const Category = require('../models/category');
const router = express.Router();

router.get('/', async (req, res) => {
    const categories = await Category.find();
    if(!categories){
        res.status(500).json({success: false})
    }
    res.status(200).json(categories);
}
);

module.exports = router;


