const express = require('express');
const router = express.Router();
const Category = require('../model/category');

// Create a new category
router.post('/', async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json({
            status: 'Success',
            data: {
                category
            }
        });
    } catch (err) {
        console.error('Error creating category:', err);
        res.status(500).json({
            status: 'Failed',
            message: err.message,
        });
    }
});

// GET route for retrieving all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({
            status: 'Success',
            data: { categories }
        });
    } catch (err) {
        console.error('Error retrieving categories:', err);
        res.status(500).json({
            status: 'Failed',
            message: err.message,
        });
    }
});

// Update a category
router.patch('/:id', async (req, res) => {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200).json({
        status: 'Success',
        data: {
          updatedCategory,
        },
      });
    } catch (err) {
      console.error('Error updating category:', err);
      res.status(500).json({
        status: 'Failed',
        message: err.message,
      });
    }
  });

  // Delete a category
router.delete('/:id', async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'Success',
      data: null,
    });
  } catch (err) {
    console.error('Error deleting category:', err);
    res.status(500).json({
      status: 'Failed',
      message: err.message,
    });
  }
});

module.exports = router;
