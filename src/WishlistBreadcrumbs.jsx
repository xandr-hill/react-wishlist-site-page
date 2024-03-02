import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

const WishlistBreadcrumbs = () => {
  return (
    <>
      <Breadcrumbs className="breadcrumbs" separator={<PlayArrowOutlinedIcon fontSize="small" />}>
        <Link color="inherit" href="/">
          <HomeOutlinedIcon />
        </Link>
        <Typography variant="h6">Wishlist</Typography>
      </Breadcrumbs>
    </>
  );
};

export default WishlistBreadcrumbs;
