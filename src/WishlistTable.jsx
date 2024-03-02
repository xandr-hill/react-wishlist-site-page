import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, IconButton, Switch } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import './WishlistTable.scss';
import PropTypes from 'prop-types';

const CenteredTableCell = ({ children }) => (
  <TableCell style={{ textAlign: 'center' }}>{children}</TableCell>
);

const WishlistTable = ({ onProductCountChange }) => {
  const [products, setProducts] = useState([]);
  const [toggleButtonStates, setToggleButtonStates] = useState([]);
  const [, setProductCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Отримуємо дані з products.json
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();

        setProducts(data.wishlist);
        setToggleButtonStates(data.wishlist.map(product => ({ id: product.id, checked: false })));
        
        const count = data.wishlist.length;
        
        setProductCount(count);
        onProductCountChange(count); // Виклик функції при зміні кількості товарів
      } catch (error) {
        setError(error.message); // Зберігаємо повідомлення про помилку
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [onProductCountChange]);

  const allButtonsSelected = toggleButtonStates.every((button) => button.checked);

  const handleToggleButtonChange = (buttonId) => {
    const updatedButtons = toggleButtonStates.map((button) =>
      button.id === buttonId ? { ...button, checked: !button.checked } : button
    );

    setToggleButtonStates(updatedButtons);
  };

  const handleSwitchChange = () => {
    const updatedButtons = toggleButtonStates.map((button) => ({ ...button, checked: !allButtonsSelected }));

    setToggleButtonStates(updatedButtons);
  };

  return (
    <div className='table-container'>
      {error ? (
        <div>Error loading data: {error}</div>
      ) : (
      <Table className='table-area'>
        <TableHead className='table-head'>
          <TableRow>
            <CenteredTableCell>Photo</CenteredTableCell>
            <CenteredTableCell>Product code</CenteredTableCell>
            <CenteredTableCell>Name</CenteredTableCell>
            <CenteredTableCell>Stock</CenteredTableCell>
            <CenteredTableCell>QTY</CenteredTableCell>
            <CenteredTableCell>Price</CenteredTableCell>
            <CenteredTableCell></CenteredTableCell>
            <CenteredTableCell>
              <Switch checked={allButtonsSelected} onChange={handleSwitchChange} />
            </CenteredTableCell>
            <CenteredTableCell>Image</CenteredTableCell>
          </TableRow>
        </TableHead>
        <TableBody className='table-body'>
          {products.map((product) => (
            <TableRow key={product.id} className='table-row'>
              <CenteredTableCell><img src={product.photo} alt={`Product ${product.id}`} style={{ width: '100px', height: 'auto' }} /></CenteredTableCell>
              <CenteredTableCell>{product.productCode}</CenteredTableCell>
              <CenteredTableCell>{product.name}</CenteredTableCell>
              <CenteredTableCell>{product.stock}</CenteredTableCell>
              <CenteredTableCell>{product.qty}</CenteredTableCell>
              <CenteredTableCell>{product.price}</CenteredTableCell>
              <CenteredTableCell>
                <Button size="small" variant="outlined">
                  Add to cart
                </Button>
              </CenteredTableCell>
              <CenteredTableCell>
                <IconButton
                  onClick={() => handleToggleButtonChange(product.id)}
                  color={toggleButtonStates.find(button => button.id === product.id)?.checked ? 'primary' : 'default'}
                >
                  {toggleButtonStates.find(button => button.id === product.id)?.checked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </CenteredTableCell>
              <CenteredTableCell>
                {product.productImage ? (
                  <img src={product.productImage} alt={`Product ${product.id}`} style={{ width: '100px', height: 'auto' }} />
                ) : (
                  <CloseIcon />
                )}
            </CenteredTableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      )}
    </div>
  );
};

WishlistTable.propTypes = {
  onProductCountChange: PropTypes.func.isRequired,
};

export default WishlistTable;