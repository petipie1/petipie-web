import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import { Container, Grid, Typography } from '@mui/material';

const Menu = ({ menu, onCountChange, cartItems }: any) => {

  return (
    <>
      <Container maxWidth="sm" >
        <Grid container item spacing={3} sx={{ justify: 'center', alignItems: 'center' }}>
          {menu.map((category: any, idx: number) => (
            <Grid item container key={idx} id={category.name.toLowerCase()} sx={{ justifyContent: 'start', alignItems: 'center' }}>
              <Typography color="#51515C" variant='h6'
                sx={{ marginBottom: 2, fontWeight: 400 }} >
                {category?.name}
              </Typography>
              <Grid item container >
                {category?.products.map((product: any) => (
                  <MenuItem
                    key={product.id}
                    {...product}
                    index={product.id}
                    quantity={cartItems[product.id]?.quantity}
                    onCountChange={(newValue: number) => {
                      onCountChange(product, newValue);
                    }} />
                )
                )}
              </Grid>
            </Grid>
          ))}
        </Grid >
      </Container >
    </>
  );
};

Menu.propTypes = {
  menu: PropTypes.object,
  onCountChange: PropTypes.func,
  orderItems: PropTypes.array
};

export default Menu;
