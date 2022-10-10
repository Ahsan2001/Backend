const Product = require("../models/productModel")
const ErrorHandler = require("../utils/errorHandler")
const catchAsynError = require("../middleware/catchAsynError");
const APIFeatures = require("../utils/apiFeatures");

// Admin Create only 
// create a new product => api/v1/admin/product/new 
const createProduct = catchAsynError( async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        message: "Created Product SuccessFully",
        product
    })
}
)

// Admin Update only
// Update a product => api/v1/admin/product/edit/:id 
const editProduct = catchAsynError( async (req, res, next) => {

    let product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler('Product not Found'))
    }


    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({
        success: true,
        product
    })
})

// Admin Delete only
// Update a product => api/v1/admin/product/edit/:id 
const deleteProduct = catchAsynError( async (req, res, next) => {

    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler('Product not Found'))
    }

    await Product.deleteOne();
    res.status(404).json({
        success: true,
        message: "product deleted successfully",
    })

})

// get all product from => api/v1/product
const getProduct = catchAsynError( async (req, res, next) => {
    const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter()
    res.status(200).json({
        success: true,
        counts : product.length, 
        product
    })
})

// get Single product from => api/v1/product/:id
const getSingleProduct = catchAsynError( async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if(!product) {
        return next(new ErrorHandler('Product not Found'))
    }

    res.status(200).json({
        success: true,
        product
    })
})

module.exports = { getProduct, getSingleProduct, createProduct, editProduct, deleteProduct };