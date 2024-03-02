import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const WishlistActionButtons = () => {
  return (
    <div className='align-container'>
      <div className='left-align'>
        <Button size="small" startIcon={<ArrowBackIcon />}>Back</Button>
      </div>
      <div className='right-align'>
        <Button className='button-wide' size="small" variant="outlined">Add product</Button>
        <Button className='button-wide' size="small" variant="contained" style={{ marginLeft: '10px' }}>Add to cart</Button>
      </div>
    </div>
  );
};

export default WishlistActionButtons;
