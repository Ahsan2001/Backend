const Product = require("./../models/productModel");


const dotenv = require("dotenv")
dotenv.config({ path: "backend/configuration/config.env" })

require("../configuration/database")

const products = require('./../data/product.json');

// Setting dotenv file

;

const seedProducts = async () => {
    try {

        await Product.deleteMany();
        console.log('Products are deleted');

        await Product.insertMany(products)
        console.log('All Products are added.')

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts()