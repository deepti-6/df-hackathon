const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    packSize: {
        type: String,
        required: true
    },
    mrp: {
        type: Number,
        required: true
    },
    productImage: {
        type: String // Assuming you store the image URL or path
    },
    status: {
        type: String,
        required: true,
        enum: ['Active', 'Inactive']
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
