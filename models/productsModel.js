const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "smartphone",
        "camera",
        "computer",
        "laptop",
        "tablet",
        "toys",
        "printer",
      ],
    },
    brand: {
      type: String,
      required: true,
    },
    description: String,
  }
);



const Product = mongoose.model('Product', productSchema);
module.exports = Product;