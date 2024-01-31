import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'
import HomeContent from '../components/HomeContent';
import ProductsContent from '../components/ProductsContent';
import AddCategory from '../components/AddCategory';
import CategoryContent from '../components/CategoryContent';
import AddProducts from '../components/AddProducts';
import EditCategory from '../components/EditCategory';

const Dashboard = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const onSelectItem = (item) => {
    setSelectedNavItem(item);
  };

  const renderContent = (selectedNavItem) => {
    switch (selectedNavItem) {
      case 'home':
        return <HomeContent />;
      case 'category':
        return <CategoryContent onSelectItem={onSelectItem}/>;
      case 'products':
        return <ProductsContent onSelectItem={onSelectItem}/>;
      case 'addCategory':
        return <AddCategory onSelectItem={onSelectItem}/>;
      case 'addProducts':
        return <AddProducts onSelectItem={onSelectItem}/>;
      case 'editCategory':
        return (
          <EditCategory
            category={selectedCategory}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        );
      default:
        return <div>Default</div>; 
    }
  };
  
  const handleSaveEdit = (updatedCategory) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category._id === updatedCategory._id ? updatedCategory : category
      )
    );
    setEditingCategory(null);
    setSelectedCategory(null);
    onSelectItem('category');
  };

  const handleCancelEdit = () => {
    setEditingCategory(null);
    setSelectedCategory(null);
    onSelectItem('category');
  };
  return (
    <>
    <Navbar/>
    <Sidebar onSelectItem={(item) => setSelectedNavItem(item)}/>
    <div className="p-4 sm:ml-64 min-h-screen">
      <div className="min-h-screen p-4 border-2 shadow-md  rounded-lg mt-14 ">
        {renderContent(selectedNavItem)}
      </div>
    </div>
    </>
  )
}

export default Dashboard

