const express = require('express');
const SubCategory = require('../models/subCategory');


const router = express.Router();

router.get('/', async (req, res) => {
    const subCategories = await SubCategory.find().populate({ path: "category", select: "name -_id"});
    if(!subCategories){
        res.status(500).json({success: false})
    }
    res.status(200).json(subCategories);
}
);

module.exports = router;