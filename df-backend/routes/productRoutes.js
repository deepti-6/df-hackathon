const express = require('express');
const router = express.Router();
const Product = require('../model/product');

// Create a new product
router.post('/', async (req, res) => {
    try {
        console.log('Received data:', req.body);

        // Validate required fields
        const { category, productName, packSize, mrp, status } = req.body;
        if (!category || !productName || !packSize || !mrp || !status) {
            throw new Error("Incomplete product data provided");
        }

        // Convert 'mrp' to a number
        const parsedMrp = parseFloat(mrp);

        const product = new Product({
            category,
            productName,
            packSize,
            mrp: parsedMrp,
            status,
        });

        await product.validate(); // Validate before saving
        await product.save();

        const populatedProduct = await Product.findById(product._id).populate('category').exec();

        res.status(201).json({
            status: 'Success',
            data: {
                product: populatedProduct
            }
        });
    } catch (err) {
        console.error('Error creating product:', err);
        res.status(500).json({
            status: 'Failed',
            message: err.message,
        });
    }
});



// GET route for retrieving all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find().populate('category');
        res.status(200).json({
            status: 'Success',
            data: { products }
        });
    } catch (err) {
        console.error('Error retrieving products:', err);
        res.status(500).json({
            status: 'Failed',
            message: err.message,
        });
    }
});

// Update a product
router.patch('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        ).populate('category');
        res.status(200).json({
            status: 'Success',
            data: {
                updatedProduct,
            },
        });
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({
            status: 'Failed',
            message: err.message,
        });
    }
});

// Delete a product
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'Success',
            data: null,
        });
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({
            status: 'Failed',
            message: err.message,
        });
    }
});

module.exports = router;