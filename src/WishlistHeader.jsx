import React from 'react';
import { Typography } from '@mui/material';

const WishlistHeader = ({ productCount }) => {
  return (
    <div className='wishlist-header'>
      <Typography variant="h4">Wishlist</Typography>
      <Typography variant="subtitle1">{`${productCount} product${productCount !== 1 ? 's' : ''}`}</Typography>
    </div>
  );
};

export default WishlistHeader;

