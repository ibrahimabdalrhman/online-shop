const Product = require('../models/productsModel');
const apiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const newError = require('../utils/newError');



exports.getProducts = catchAsync(async (req, res) => {
    const features = new apiFeatures(Product.find(), req.query)
        .filter()
        .sort()
        .field()
        .pagination()
    const products = await features.query;
    res.json({
        status: "success",
        results: products.length,
        data: {
            products
        }
    });
});
exports.getProductsById = catchAsync(async (req, res) => {
    
    const product = await Product.findById(req.params.id);

    if (!product) {
        console.log("can dot find id");
        return next(new newError(`can't find product with id `, 404));
    }
    
    res.json({
        status: "success",
        data: {
            product,
        },
    });
}
);
exports.createProduct = catchAsync(async (req, res) => {

    const product = await Product.create(req.body);

    res.json({
        status: "success",
        data: {
            data: product
        }
    });
    console.log("success added")
    
}
);


exports.updateProduct = catchAsync(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
     if (!product) {
       return next(new newError("can't find product with id ", 404));
     }
    res.json({
        status: "success",
        data: {
            product,
        },
    });
    
});

exports.removeProduct = catchAsync(async (req, res) => {
    const product = await Product.findByIdAndRemove(req.params.id);
     if (!product) {
         return next(new newError("can't find product with id ", 404));
    }
    res.json({
        status: "success",
        data: null
    })

}
);
