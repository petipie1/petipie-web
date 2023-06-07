import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Menu = ({ menu, onCountChange, cartItems, orderingEnabled, isDemo }: any) => {
  const { t } = useTranslation();

  return (
    <>
      <Container maxWidth="sm" >
        <Grid container item spacing={3} sx={{ justify: "center", alignItems: "center" }}>
          {menu.map((category: any, idx: number) => (
            <Grid item container key={idx} id={category?.url ?? category.name.toLowerCase()} sx={{ justifyContent: "start", alignItems: "center" }}>
              <Typography variant='h6'
                sx={{ marginBottom: 1, fontWeight: 500, fontSize: "24px" }} >
                {t(category?.name)}
              </Typography>
              <Grid item container >
                {category?.products.map((product: any) => (
                  <MenuItem
                    key={product.id}
                    {...product}
                    index={product.id}
                    orderingEnabled={isDemo || orderingEnabled}
                    quantity={cartItems[product.id]?.quantity}
                    onCountChange={(newValue: number) => {
                      onCountChange(product, newValue);
                    }} />
                )
                )}
              </Grid>
            </Grid>
          ))}
          <Box sx={{ m: 8 }} />
        </Grid >
      </Container >
    </>
  );
};

Menu.propTypes = {
  menu: PropTypes.array,
  onCountChange: PropTypes.func,
  cartItems: PropTypes.object,
  orderingEnabled: PropTypes.bool,
  isDemo: PropTypes.bool
};

export default Menu;
