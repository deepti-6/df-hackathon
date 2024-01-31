import React, {useState, useEffect} from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import mongoose from 'mongoose';

const AddProducts = ({ onSelectItem }) => {

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:4000/categories');
      const data = await response.json();
      setCategories(data.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  

  const [formData, setFormData] = useState({
    category: '',
    productName: '',
    packSize: '',
    mrp: '',
    productStatus: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.id === 'mrp' ? parseFloat(e.target.value) : e.target.value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  

  const handleSave = async (formData) => {
    try {
      console.log('FormData:', formData);
  
      if (!formData.productStatus || !['Active', 'Inactive'].includes(formData.productStatus)) {
        throw new Error('Invalid status');
      }
  
      formData.mrp = parseFloat(formData.mrp);
  
      console.log('Modified FormData:', formData);
  
      const categoryId = formData.category;
      console.log('categoryId:', categoryId);
  
      const response = await fetch('http://localhost:4000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          category: mongoose.Types.ObjectId(categoryId),
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to create product: ${response.statusText}`);
      }
  
      alert('Product added successfully!');
    } catch (error) {
      console.error('Failed to create product:', error.message);
      // Display an error message to the user if needed
    }
  };
  

  
  
  
  
  
  return (
    <>
      <div className="flex items-center space-x-4 mb-4">
        <button onClick={() => onSelectItem('products')}>
          <AiOutlineArrowLeft className='text-2xl text-gray-600' />
        </button>
        <span className="self-center text-gray-900 text-lg font-semibold whitespace-nowrap">Add Product</span>
      </div>
      <form className="grid grid-cols-3 gap-4 mb-4" onSubmit={handleSubmit}>
        <div className="flex-1">
          <label htmlFor="category" className="block mb-2 text-base font-bold text-left text-gray-700">
            Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={handleInputChange}
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option disabled defaultValue="">
            Choose a category
            </option>
            {categories.map((category) => (
                <option key={category._id} value={category._id}>
                    {category.categoryName}
                </option>
            ))}
        </select>
        </div>
        <div className="flex-1">
          <label htmlFor="productName" className="block mb-2 text-base font-bold text-left text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            placeholder=""
            value={formData.productName}
            onChange={handleInputChange}
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="packSize" className="block mb-2 text-base font-bold text-left text-gray-700">
            Pack Size
          </label>
          <input
            type="text"
            id="packSize" 
            placeholder=""
            value={formData.packSize}
            onChange={handleInputChange}
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="mrp" className="block mb-2 text-base font-bold text-left text-gray-700">
            MRP
          </label>
          <input
            type="number"
            id="mrp"
            placeholder=""
            value={formData.mrp} 
            onChange={handleInputChange}
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="productImage" className="block mb-2 text-base font-bold text-left text-gray-700">
            Product Image
          </label>
          <div className="relative">
            <input
              type="file"
              id="productImage"
              className="hidden" // hide the default file input
            />
            <label
              htmlFor="productImage"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40 cursor-pointer hover:border-purple-500"
            >
              <div className="flex items-center justify-start">
            <MdOutlineFileUpload className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 text-2xl" />Upload Image
              </div>
            </label>
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="productStatus" className="block mb-2 text-base font-bold text-left text-gray-700">
            Status
          </label>
          <select
            id="productStatus"
            value={formData.productStatus}
            onChange={handleInputChange}
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option disabled defaultValue="">
              Choose a status
            </option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>

          </select>
        </div>
      <div className="flex gap-4 justify-end mt-4 col-span-3">
        
        <button onClick={() => onSelectItem('products')} className="px-12 py-3 mr-4 font-semibold text-gray-600 border border-gray-500 rounded-full focus:outline-none hover:bg-gray-300">
          Cancel
        </button>
        <button onClick={() => handleSave(formData)} className="px-12 py-3 font-semibold text-white bg-buttonBg rounded-full focus:outline-none hover:bg-purple-600">
          Save
        </button>
      </div>
      </form>

    </>
  );
};

export default AddProducts;
