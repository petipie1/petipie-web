import React from "react";
// import AppBar from '@mui/material/AppBar';
// import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from "next";
// import Menu from "components/Menu";

// import OrderTotal from "components/OrderTotal";
// import MenuSlider from "components/MenuSlider";
// import OrderSummary from "components/OrderSummary";
// import InfoDialog from "components/InfoDialog";
// import SearchBox from "components/SearchBox";
// import { useTranslation } from "react-i18next";
// import { Avatar, IconButton } from "@mui/material";
// import Image from "next/image";
import EmptyView from "components/EmptyView";

const MenuPage: NextPage = () => {
  // const dispatch = useDispatch();
  // const { t } = useTranslation();
  // const cart = useSelector((state: any) => state.cart);

  // const [open, setOpen] = useState(!cart?.items);

  // const onCountChange = React.useCallback(
  //   (product: any, quantity: number) => {
  //     dispatch(updateCartItemQuantity({ product, quantity }));
  //   },
  //   [dispatch]
  // );

  // const onOrderItemCountChange = (product: any, quantity: number) => {
  //   dispatch(updateCartItemQuantity({ product, quantity }));
  // };

  // useEffect(() => {
  //   if (!Object.values(cart?.items)?.length) {
  //     setOpen(false);
  //   }
  //   return () => {};
  // }, [cart?.items]);

  // const onMenuClickHandler = ({ url }: any) => scroll(url);

  // const orderTotal = React.useMemo(
  //   () => calculateCartTotal(cart?.items),
  //   [cart?.items]
  // );

  // const filterProduct = (name: string, search: string) =>
  //   name.toLowerCase().includes(search.toLowerCase());

  // const handleNoteChange = (event: any) => {
  //   const note = event.target.value;
  //   dispatch(updateCartNote({ note }));
  // };

  // const handleCallWaiter = () => {
  //   setCallWaiterOpen(false);
  //   setIsWaiterCommingAlertOpen(true);
  // };

  // const orderItems = Object.values(cart?.items);

  // const shouldOpen = useMemo(
  //   () => Boolean(orderItems?.length && open),
  //   [orderItems?.length, open]
  // );

  // if (business?.available)
  return (
    <EmptyView
      alTitle="Demo vjen se shpejti :)"
      enTitle="Demo comming soon :)"
    />
  );

  //   return (
  //     <>
  //       <div
  //         style={{
  //           background: "linear-gradient(#Ffdd74,white)",
  //           position: "fixed",
  //           zIndex: -1,
  //           height: "100%",
  //           width: "100%",
  //         }}
  //       ></div>
  //       {/* <SearchBox
  //         isDemo
  //         onSearch={handleSearch}
  //         onIconClick={() => setCallWaiterOpen(true)} /> */}

  //       {/* <MenuSlider
  //         menuItems={categories}
  //         onClickHandler={onMenuClickHandler}
  //         selectedTabUrlValue={"drinks"}
  //       /> */}
  //       {/* <Menu
  //         isDemo
  //         menu={menu}
  //         onCountChange={onCountChange}
  //         cartItems={cart?.items}
  //       /> */}

  //       <OrderSummary
  //         shouldOpen={shouldOpen}
  //         orderItems={orderItems}
  //         handleNoteChange={handleNoteChange}
  //         onCountChange={onOrderItemCountChange}
  //         handleClose={() => setOpen(false)}
  //         notes={cart?.notes}
  //       />

  //       <OrderTotal
  //         total={orderTotal}
  //         show={!!orderTotal}
  //         onClick={handleContinue}
  //         isPopupOpen={open}
  //       />
  //       <InfoDialog
  //         title={t("orderConfirmedTitle")}
  //         message={t("orderConfirmedMsg")}
  //         isOpen={isDialogOpen}
  //         isInfo
  //         handleClose={() => setIsDialogOpen(false)}
  //       />
  //       <InfoDialog
  //         title={t("oopsTitle")}
  //         message={t("oopsMsg")}
  //         isOpen={isAlertOpen}
  //         isInfo
  //         handleClose={() => setIsAlertOpen(false)}
  //       />
  //       <InfoDialog
  //         title={t("waiterComingTitle")}
  //         message={t("waiterComingMsg")}
  //         isOpen={isWaiterCommingAlertOpen}
  //         isInfo
  //         handleClose={() => setIsWaiterCommingAlertOpen(false)}
  //       />
  //       <InfoDialog
  //         title={t("callWaiterTitle")}
  //         message={t("callWaiterMsg")}
  //         isOpen={callWaiterOpen}
  //         handleConfirm={handleCallWaiter}
  //         handleCancel={() => setCallWaiterOpen(false)}
  //       />
  //       <IconButton
  //         onClick={handleCallWaiter}
  //         sx={{
  //           top: "auto",
  //           right: 25,
  //           bottom: 35,
  //           left: "auto",
  //           position: "fixed",
  //           boxShadow: "0px 10px 25px 5px rgba(0,0,0,0.4)",
  //         }}
  //       >
  //         <Avatar
  //           style={{ width: 65, height: 65, margin: -10 }}
  //           sx={{ backgroundColor: "#020f85" }}
  //         >
  //           <Image alt="waiter" src="/waiterrr.png" width={45} height={45} />
  //         </Avatar>
  //       </IconButton>
  //     </>
  //   );
  // };
};
export default MenuPage;
