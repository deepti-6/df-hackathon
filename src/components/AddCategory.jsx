import React, {useState} from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";

const AddCategory = ({ onSelectItem }) => {


    // State variables for form fields
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  const handleCancel = () => {
    onSelectItem('category');
  };

  const handleSave = () => {
    // Form validation (you can add more validation as needed)
    if (!categoryName || !description || !status) {
      alert('Please fill in all fields'); 
      return;
    }

    // Implement logic to save the category
    fetch('http://localhost:4000/categories', {
      method: 'POST',
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
        console.log('Category saved:', data);
        // Optionally, you can clear the form fields after successful submission
        setCategoryName('');
        setDescription('');
        setStatus('');
        onSelectItem('category');
        alert('Category added successfully!');
      })
      .catch((error) => {
        console.error('Error saving category:', error);
        alert('Error saving category. Please try again.');
      });
      
  };

  return (
    <>
    <div className="flex items-center space-x-4 mb-4">
    <button onClick={() => onSelectItem('category')}><AiOutlineArrowLeft className='text-2xl text-gray-600'/>
    </button>
    <span className="self-center text-gray-900 text-lg font-semibold whitespace-nowrap ">Add Category</span>
    </div>
      <form onClick={handleSubmit} className="grid grid-cols-3 gap-4 mb-4" >
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
        <div className="flex gap-4 justify-end mt-4 col-span-3">
          
          <button onClick={handleCancel} className="px-12 py-3 font-semibold text-gray-600 border border-gray-500 rounded-full focus:outline-none hover:bg-gray-300">
            Cancel
          </button>
          <button onClick={handleSave} className="px-12 py-3 font-semibold text-white bg-buttonBg rounded-full focus:outline-none hover:bg-purple-600">
            Save
          </button>
        </div>
      </form>

    </>
  );
};

export default AddCategory;
