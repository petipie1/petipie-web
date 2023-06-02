import React from 'react';

import { Dialog, Grid, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import OrderItem from './OrderItem';

const OrderSummary = ({ shouldOpen, handleClose, orderItems, onCountChange, handleNoteChange, notes }: any) => {

  return (
    <Dialog open={shouldOpen} onClose={handleClose} fullWidth sx={{
      zIndex: 1,
      maxHeight: '90%',
    }}
      style={{
        margin: -18,
      }}>

      <Grid container sx={{
        overflow: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        }
      }}>
        <Grid item container sx={{
          background: 'white',
          margin: 1,
          borderRadius: 2
        }} >
          <Grid item container sx={{
            justifyContent: 'end', marginTop: 1,
            marginRight: 1.5,
          }}>
            <Image alt="closeIcon" src={'/CloseIcon.svg'} height={32} width={32} style={{ padding: 3 }}
              onClick={handleClose} />
          </Grid>
          {orderItems?.map((item: any) => (
            <OrderItem
              key={`${item.id}-orderItem`}
              index={`${item.id}-orderItem`}
              {...item}
              quantity={item.quantity}
              onCountChange={(newValue: number) => {
                onCountChange(item, newValue);
              }} />
          ))}

          <Grid item container sx={{ padding: 1.5 }}>
            <Typography color="grey" fontWeight={300} >
              Notes:
            </Typography>
            <TextField
              multiline
              InputProps={{
                sx: {
                  backgroundColor: 'white',
                  borderRadius: 2,
                  minHeight: '60px',
                  textAlign: 'start',
                },
              }}
              onChange={handleNoteChange}
              fullWidth
              value={notes}
            />
          </Grid>
        </Grid>
      </Grid>
    </Dialog >
  );
};

/*

<Container maxWidth="sm" >
        <Grid container item spacing={3} sx={{ justify: 'center', alignItems: 'center' }}>
          {menu.map((category: any, idx: number) => (
            <Grid item container key={idx} id={category.name.toLowerCase()} sx={{ justifyContent: 'start', alignItems: 'center' }}>
              <Typography color="#51515C" variant='h6'
                sx={{ marginBottom: 2, fontWeight: 400 }} >
                {category?.name}
              </Typography>
              <Grid item container >
                {category?.products.map((product: any, idx: number) => (
                  <MenuItem
                    key={idx}
                    {...product}
                    index={product.name}
                    quantity={cartItems[product.name]?.quantity}
                    onCountChange={(newValue: number) => {
                      onCountChange(product, newValue);
                    }} />
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid >
      </Container >

*/

export default React.memo(OrderSummary);