
import * as React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const OrderTotal = ({ total, show, onClick, isPopupOpen }: any) => {

  // if (!show)
  //   return null;

  const buttonLabel = isPopupOpen ? 'Order' : 'Continue';
  return (
    <Grid item container sx={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      minHeight: '70px',
      justifyContent: 'center',
      opacity: !show ? '0' : '1',
      transition: 'all 0.4s',
      visibility: !show ? 'hidden' : 'visible',
      zIndex: 4
    }}>
      <Grid item container sx={{
        borderTopLeftRadius: 30, borderTopRightRadius: 30,
        direction: 'row',
        background: '#26c48b',
        alignContent: 'center',
        p: 2,
        maxWidth: 'sm',
      }}
      >
        <Grid item container xs={5} sx={{ alignContent: 'center' }} direction="column" >
          <Typography variant='subtitle2' fontWeight={100} color="white">
            Total:
          </Typography>
          <Typography sx={{ marginTop: -0.5 }} variant='h6' fontWeight={400} color="white">
            {`${total} lek`}
          </Typography>
        </Grid>
        <Grid item container xs={2} >
        </Grid>
        <Grid item xs={5}>
          <Button
            fullWidth
            size='medium'
            sx={{
              borderRadius: 18,
              color: '#26c48b',
              fontWeight: 400,
              textTransform: 'none',
              fontSize: '16px',
              maxHeight: '45px',
              fontFamily: 'sans-serif'
            }}
            style={{ backgroundColor: 'white' }}
            onClick={onClick}
          >
            {buttonLabel}
          </Button>
        </Grid>
      </Grid>
    </Grid>);
};

export default OrderTotal;