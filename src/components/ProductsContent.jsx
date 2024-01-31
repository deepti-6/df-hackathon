import React, {useState, useEffect} from 'react';
import productIcon from '../assets/products icon.png';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const ProductsContent = ({ onSelectItem }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:4000/products');
        const data = await response.json();
        setProducts(data.data.products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

// Call the fetchProducts function when the component mounts
useEffect(() => {
  fetchProducts();
}, []);
  return (
    <>
      <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src={productIcon} alt="Icon" className="h-7 me-3"  />

          <span className="self-center text-gray-700 text-2xl font-semibold whitespace-nowrap ">Products</span>
      </a>
      <div className="flex md:order-2">
        
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 me-1">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span className="sr-only">Search</span>
        </button>
        <button onClick={() => onSelectItem('addProducts')} type="button" className="text-white bg-buttonBg hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Add New</button>
        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   " aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500      " placeholder="Search..."/>
          </div>

          <div className="relative hidden md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500      " placeholder="Search..."/>
        </div>
        </div>
      </div>
    </nav>

       {/* Table section */}
       <div className="max-w-screen-xl mx-auto mt-8">
        <table className="min-w-full bg-white text-gray-700 border border-gray-300 shadow-lg rounded-md overflow-hidden">
          <thead className="bg-yellow-200">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Pack Size</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">MRP</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Edit</th>
              <th className="py-2 px-4 border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
    {products.map((product) => (
        <tr key={product._id} className="bg-gray-100">
            <td className="py-2 px-4 border-b">{product._id}</td>
            <td className="py-2 px-4 border-b">{product.productName}</td>
            <td className="py-2 px-4 border-b">{product.packSize}</td>
            <td className="py-2 px-4 border-b">{product.category.categoryName}</td>
            <td className="py-2 px-4 border-b">${product.mrp}</td>
            <td className="py-2 px-4 border-b">
                <img src={product.productImage} alt="Product Image" className="w-10 h-10 object-cover rounded-full" />
            </td>
            <td className="py-2 px-4 border-b">{product.status}</td>
            <td className="py-2 px-4 border-b">
                <button /* onClick={() => Handle edit click } */ className="text-gray-500 hover:text-purple-800">
                    <AiOutlineEdit />
                </button>
            </td>
            <td className="py-2 px-4 border-b">
                <button className="text-red-500 hover:text-red-800">
                    <AiOutlineDelete />
                </button>
            </td>
        </tr>
    ))}
</tbody>

        </table>
      </div>
    </>
  );
}

export default ProductsContent;
