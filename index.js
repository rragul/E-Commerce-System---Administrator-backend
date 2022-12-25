const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());

app.use(function(req, res, next) {
    res.header('Content-Range', 'products 0-10/10');
    next();
  });

const port = process.env.PORT || 5000;
const URI = process.env.URI;

const categoriesRouter = require("./routes/categoriesRoutes");
const productsRouter = require("./routes/productsRoutes");
const subCategoriesRouter = require("./routes/subCategoriesRoutes");

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/subCategories", subCategoriesRouter);
mongoose.set('strictQuery', false);

async function connect() {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}

connect();

app.listen(port, () => console.log(`Server listening on port ${port}!`));
