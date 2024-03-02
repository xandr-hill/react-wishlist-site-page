import React, { useState } from 'react';
import WishlistBreadcrumbs from './WishlistBreadcrumbs';
import WishlistHeader from './WishlistHeader';
import WishlistButtons from './WishlistButtons';
import WishlistTable from './WishlistTable';
import WishlistActionButtons from './WishlistActionButtons';
import './App.css';

const App = () => {
  const [productCount, setProductCount] = useState(0);

  const handleProductCountChange = (count) => {
    setProductCount(count);
  };

  return (
    <div className='content-wrapper'>
      <WishlistBreadcrumbs />
      <WishlistHeader productCount={productCount} />
      <WishlistButtons />
      <WishlistTable onProductCountChange={handleProductCountChange} />
      <WishlistActionButtons />
    </div>
  );
};

export default App;
