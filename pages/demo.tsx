import React, { useEffect, useMemo, useState } from "react";
// import AppBar from '@mui/material/AppBar';
import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from "next";
import Menu from "components/Menu";
import { clearCart, updateCartItemQuantity, updateCartNote } from "redux/reducers/cartSlice";
import OrderTotal from "components/OrderTotal";
import MenuSlider from "components/MenuSlider";
import OrderSummary from "components/OrderSummary";
import InfoDialog from "components/InfoDialog";
import SearchBox from "components/SearchBox";
import { businessData, categories } from "common/constants";
import { calculateCartTotal, diffInMinutesFromNow, scroll } from "utils/common";
import EmptyView from "components/EmptyView";

const MenuPage: NextPage = ({ business }: any) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  const [open, setOpen] = useState(!(cart?.items));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [callWaiterOpen, setCallWaiterOpen] = useState(false);
  const [waiterAlerted, setWaiterAlerted] = useState(false);

  const [menu, setMenu] = useState(business?.menu);

  const onCountChange = React.useCallback(
    (product: any, quantity: number) => {
      dispatch(updateCartItemQuantity({ product, quantity }));
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

  const onMenuClickHandler = ({ url }: any) => scroll(url);

  const orderTotal = React.useMemo(() => calculateCartTotal(cart?.items), [cart?.items]);

  const handleContinue = () => {
    if (cart?.lastOrderTime && diffInMinutesFromNow(cart?.lastOrderTime) < 3) {
      setIsAlertOpen(true);
      return;
    }

    if (open) {
      dispatch(clearCart(true));
      setIsDialogOpen(true);
    }
    setOpen(!open);
  };

  const filterProduct = (name: string, search: string) => name.toLowerCase().includes(search.toLowerCase());

  const handleSearch = (term: string) => {
    if (!term) {
      setMenu(business?.menu);
    } else {
      const filterdMenu = business?.menu.map((category: any) => ({
        ...category,
        products: category?.products.filter((product: any) => filterProduct(product.name, term))
      }));

      setMenu(filterdMenu);
    }
  };

  const handleNoteChange = (event: any) => {
    const note = event.target.value;
    dispatch(updateCartNote({ note }));
  };

  const handleCallWaiter = () => {
    console.log(`Kerkohet kamarieri tek çadra: ${3}`);
    setCallWaiterOpen(false);
    setWaiterAlerted(true);
  };

  const orderItems = Object.values(cart?.items);

  const shouldOpen = useMemo(() => Boolean(orderItems?.length && open), [orderItems?.length, open]);

  // if (business?.available)
  //   return <EmptyView />;

  return (
    <>
      <SearchBox
        onSearch={handleSearch}
        onIconClick={() => setCallWaiterOpen(true)} />

      <MenuSlider
        menuItems={categories}
        onClickHandler={onMenuClickHandler}
        selectedTabUrlValue={"drinks"}
      />
      <Menu
        menu={menu}
        onCountChange={onCountChange}
        cartItems={cart?.items}
      />

      <OrderSummary
        shouldOpen={shouldOpen}
        orderItems={orderItems}
        handleNoteChange={handleNoteChange}
        onCountChange={onOrderItemCountChange}
        handleClose={() => setOpen(false)}
        notes={cart?.notes}
      />

      <OrderTotal total={orderTotal} show={!!(orderTotal)}
        onClick={handleContinue}
        isPopupOpen={open} />
      <InfoDialog title="Porosia u konfirmua."
        message="Kamarieri po vjen, ju lutem qendroni ne cader :)"
        isOpen={isDialogOpen}
        isInfo
        handleClose={() => setIsDialogOpen(false)} />
      <InfoDialog title="Oops, gabimisht?"
        message="Ju porositet para pak minutash, ju lutem prisni pak :D"
        isOpen={isAlertOpen}
        isInfo
        handleClose={() => setIsAlertOpen(false)} />
      <InfoDialog title="U njoftua"
        message="Kamarieri u njoftua dhe do te vije per pak."
        isOpen={waiterAlerted}
        isInfo
        handleClose={() => setWaiterAlerted(false)} />
      <InfoDialog title="Therrisni kamarierin"
        message="Doni te therrisni kamarierin tek çadra?"
        isOpen={callWaiterOpen}
        handleConfirm={handleCallWaiter}
        handleCancel={() => setCallWaiterOpen(false)} />
    </>
  );
};

export default MenuPage;

export async function getServerSideProps() {

  return {
    props: {
      business: businessData
    }
  };
}