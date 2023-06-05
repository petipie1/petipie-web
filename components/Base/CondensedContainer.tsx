import { Container, Grid, useMediaQuery, Hidden } from '@mui/material';
import * as PropTypes from 'prop-types';
import React from 'react';

const CondensedContainer = ({ children, ...props }: any) => {
  const isSmDown = !useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const smDownValue = props.smDown || 10;

  return (
    <Container {...props} style={{ margin: 'auto' }} >
      <Grid container >
        <Hidden smDown={isSmDown}>
          <Grid item sm={1} />
        </Hidden>
        <Grid item style={{
          justifyContent: 'center'
        }} container xs={'auto'} sm={isSmDown ? smDownValue : 12} >
          {children}
        </Grid>
        <Hidden smDown={isSmDown}>
          <Grid item sm={1} />
        </Hidden>
      </Grid>
    </Container >
  );
};
CondensedContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  smDown: PropTypes.number,
};

export default CondensedContainer;
