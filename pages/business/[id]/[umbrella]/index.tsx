import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';

import type { NextPage } from 'next';
// import { getBusinessMenu } from '../../../../services/apiClient';
import styles from './../../../../styles/Home.module.css';
import Menu from 'components/Menu';
import { BottomNavigation, Button, Card, CssBaseline, Dialog, Grid, Paper, TextField, Typography } from '@mui/material';
import { businessData } from '../../../../common/constants';
import { addProductToCart, clearCart, updateCartItemQuantity, updateCartNote } from 'redux/reducers/cartSlice';
import OrderTotal from 'components/OrderTotal';
import Slide from '@mui/material/Slide';
import MenuSlider from 'components/MenuSlider';
import { useRouter } from 'next/router';
import MenuItem from 'components/Menu/MenuItem';
import Image from 'next/image';
import OrderSummary from 'components/OrderSummary';

const MenuPage: NextPage = ({ business }: any) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  const [open, setOpen] = useState(!(cart?.items));
  // const [orderItems, setOrderItems] = useState(Object.values(cart?.items));

  const menu = business?.menu;

  const onCountChange = React.useCallback(
    (product: any, quantity: number) => {
      dispatch(updateCartItemQuantity({ product, quantity }));
      // if (quantity === 1) {
      //   dispatch(addProductToCart(product));
      // } else {
      //   dispatch(updateCartItemQuantity({ product, quantity }));
      // }
    },
    [dispatch],
  );

  const onOrderItemCountChange = (product: any, quantity: number) => {

    dispatch(updateCartItemQuantity({ product, quantity }));
  };

  useEffect(() => {
    if (!Object.values(cart?.items)?.length) {
      setOpen(false);
    }
    return () => { };

  }, [cart?.items]);

  const calculateCartTotals = (cartItems: any) => {
    let total = 0;
    Object.values(cartItems).forEach((item: any) => {
      const itemTotal = parseFloat(item.price);
      total += itemTotal * item.quantity;
    });
    return total;
  };
  const scroll = (url: string) => {
    const section = document.querySelector(`#${url}`);
    // section?.scrollIntoView({ behavior: 'smooth', block: 'start', });
    const yCoordinate = section?.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -40;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };
  const onMenuClickHandler = ({ url }: any) => scroll(url);

  const orderTotal = React.useMemo(() => calculateCartTotals(cart?.items), [cart?.items]);

  const handleContinue = () => {
    if (open) {
      console.log('Ordering...\nNotes: ', cart?.note,);
      dispatch(clearCart());

    }
    setOpen(!open);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNoteChange = (event: any) => {
    const note = event.target.value;
    dispatch(updateCartNote({ note }));
  };

  const categories = [
    {
      text: 'Promotions',
      url: 'promotions',
    },
    {
      text: 'Drinks',
      url: 'drinks',
    },
    {
      text: 'Cocktails',
      url: 'cocktails',
    }
    , {
      text: 'Coffee',
      url: 'coffee',
    }, {
      text: 'Ice cream',
      url: 'ice-cream',
    }, {
      text: 'Pizza',
      url: 'pizza',
    }
  ];

  const orderItems = Object.values(cart?.items);

  const shouldOpen = useMemo(() => Boolean(orderItems?.length && open), [orderItems?.length, open]);

  return (
    <>
      <MenuSlider
        menuItems={categories}
        onClickHandler={onMenuClickHandler}
        selectedTabUrlValue={'drinks'}
      />
      <Menu
        menu={menu}
        onCountChange={onCountChange}
        cartItems={cart?.items}
        handleClose={handleClose}
        handleNoteChange={handleNoteChange}
      />

      <OrderSummary
        shouldOpen={shouldOpen}
        orderItems={orderItems}
        handleNoteChange={handleNoteChange}
        onCountChange={onOrderItemCountChange}
        handleClose={handleClose}
        notes={cart?.notes}
      />

      {/* <Slide direction="up" in={!!(orderTotal)}  > */}
      <OrderTotal total={orderTotal} show={!!(orderTotal)}
        onClick={handleContinue}
        isPopupOpen={open} />
      {/* </Slide> */}
    </>
  );
};

export default MenuPage;

export async function getServerSideProps(ctx: any) {

  const { umbrella, id } = ctx.query;

  // const { data: business } = await getBusinessMenu(id, umbrella);

  // if(!delivery)
  //return {
  //   redirect: {
  //     destination: '/delivery-not-found'
  //   }
  // }

  return {
    props: {
      business: businessData
    }
  };
}
