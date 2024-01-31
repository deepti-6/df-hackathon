// EditCategory.js
import { AiOutlineArrowLeft } from 'react-icons/ai';

import React, { useState, useEffect } from 'react';

const EditCategory = ({ category, onSave, onCancel }) => {
  const [categoryName, setCategoryName] = useState(category.categoryName);
  const [description, setDescription] = useState(category.description);
  const [status, setStatus] = useState(category.status);

  const handleSave = () => {
    // Form validation (you can add more validation as needed)
    if (!categoryName || !description || !status) {
      alert('Please fill in all fields');
      return;
    }

    // Implement logic to save the edited category
    fetch(`http://localhost:4000/categories/${category._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        categoryName,
        description,
        status,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Category edited:', data);
        onSave(data.data.updatedCategory);
        alert('Category edited successfully!');
      })
      .catch((error) => console.error('Error editing category:', error));
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      <div className="flex items-center space-x-4 mb-4">
        <button onClick={handleCancel}>
          <AiOutlineArrowLeft className="text-2xl text-gray-600" />
        </button>
        <span className="self-center text-gray-900 text-lg font-semibold whitespace-nowrap">
          Edit Category
        </span>
      </div>
      <form className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex-1">
          <label htmlFor="categoryName" className="block mb-2 text-base font-bold text-left text-gray-700">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder=""
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="description" className="block mb-2 text-base font-bold text-left text-gray-700">
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="status" className="block mb-2 text-base font-bold text-left text-gray-700">
            Status
          </label>
          <select
            id="status" 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option disabled value="">
              Choose a status
            </option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </form>
      <div className="flex gap-4 justify-end mt-4 col-span-3">
        <button
          onClick={handleCancel}
          className="px-12 py-3 font-semibold text-gray-600 border border-gray-500 rounded-full focus:outline-none hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-12 py-3 font-semibold text-white bg-buttonBg rounded-full focus:outline-none hover:bg-purple-600"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditCategory;
