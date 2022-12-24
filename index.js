const express = require("express");
const mongoose = require("mongoose");
const Category = require("./models/category");
require("dotenv").config();
const Product = require("./models/product");
const app = express();

const port = process.env.PORT || 5000;
const URI = process.env.URI;

// const indexRouter = require('./routes/index');
const categoriesRouter = require("./routes/categoriesRoutes");
const productsRouter = require("./routes/productsRoutes");
const subCategoriesRouter = require("./routes/subCategoriesRoutes");

// app.use('/', indexRouter);
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

app.get("/", (req, res) => {
    Category.find({}, (err, mobile) => {
      if (err) {
        console.log(err);
      } else {
        res.json(mobile);
      }
    });
  });

app.listen(port, () => console.log(`Server listening on port ${port}!`));
