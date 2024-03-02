import React, { useState } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/system';

const CustomDeleteIcon = styled(DeleteIcon)(({ active }) => ({
  color: active ? '#FFFFFF' : '#B2BAC7', // Колір іконки для неактивних та активної кнопок
}));


const WishlistButtons = () => {
  const [activeButton, setActiveButton] = useState('All products');

  const buttonStyle = {
    backgroundColor: '#E9EBEF', // Колір неактивної кнопки
    color: '#000000', // Чорний текст
  };

  const activeButtonStyle = {
    backgroundColor: '#B2BAC7', // Колір активної кнопки
    color: '#FFFFFF', // Білий текст
  };

  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
  };

  return (
    <div className='align-container'>
      <div className='left-align'>
        <Button
          style={activeButton === 'All products' ? activeButtonStyle : buttonStyle}
          size="small"
          endIcon={<CustomDeleteIcon active={activeButton === 'All products'} />}
          onClick={() => handleButtonClick('All products')}
        >
          All products
        </Button>
        <Button
          style={{
            ...(activeButton === 'Phones' ? activeButtonStyle : buttonStyle),
            marginLeft: '10px'
          }}
          size="small"
          endIcon={<CustomDeleteIcon active={activeButton === 'Phones'} />}
          onClick={() => handleButtonClick('Phones')}
        >
          Phones
        </Button>
        <Button
          style={{
            ...(activeButton === 'Accessories' ? activeButtonStyle : buttonStyle),
            marginLeft: '10px'
          }}
          size="small"
          endIcon={<CustomDeleteIcon active={activeButton === 'Accessories'} />}
          onClick={() => handleButtonClick('Accessories')}
        >
          Accessories
        </Button>
      </div>
      <div className='right-align'>
        <Button className='button-middle' size="small" variant="outlined">New category</Button>
      </div>
    </div>
  );
};

export default WishlistButtons;
