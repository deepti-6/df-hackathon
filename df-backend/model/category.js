const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryName : {
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    status :{
        type : String,
        required : true,
        enum: ['Active', 'Inactive']
    }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;