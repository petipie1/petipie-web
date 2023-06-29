import React, { useEffect, useMemo, useState } from "react";
// import AppBar from '@mui/material/AppBar';

import { useDispatch, useSelector } from "react-redux";

import type { NextPage } from "next";
import { getBusinessMenu, postOrder, callWaiter } from "../../../../services/apiClient";
import Menu from "components/Menu";
// import { businessData, categories } from "../../../../common/constants";
import { clearCart, updateCartItemQuantity, updateCartNote, updateWaiterTime } from "redux/reducers/cartSlice";
import OrderTotal from "components/OrderTotal";
import MenuSlider from "components/MenuSlider";
import OrderSummary from "components/OrderSummary";
import InfoDialog from "components/InfoDialog";
import SearchBox from "components/SearchBox";
import { calculateCartTotal, diffInMinutesFromNow, getPromotionProducts, isWithinOpeningTime, randomString, scroll } from "utils/common";
import EmptyView from "components/EmptyView";
import { useTranslation } from "react-i18next";
import { Avatar, IconButton } from "@mui/material";
import Image from "next/image";

const MenuPage: NextPage = ({ business, umbrella, sanitizedMenu, categories }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cart = useSelector((state: any) => state.cart);

  const [open, setOpen] = useState(!(cart?.items));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [alertData, setAlertData] = useState({ title: "", message: "", open: false });
  const [callWaiterOpen, setCallWaiterOpen] = useState(false);
  const [isWaiterCommingAlertOpen, setIsWaiterCommingAlertOpen] = useState(false);

  const [menu, setMenu] = useState(sanitizedMenu);

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

  const orderTotal = React.useMemo(() =>
    calculateCartTotal(cart?.items), [cart?.items]);

  const handleContinue = async () => {
    if (cart?.lastOrderTime && diffInMinutesFromNow(cart?.lastOrderTime) < 3) {
      setAlertData({
        title: t("oopsTitle"),
        message: t("oopsMsg"),
        open: true
      });

      return;
    }

    if (open) {
      const items = Object.values(cart?.items);
      const orderRef = `${business?.name.slice(0, 3)}-${randomString(5)}`;

      const orderRequest = {
        businessId: business?.id,
        umbrella,
        status: "awaiting",
        orderNumber: orderRef,
        total: orderTotal,
        currency: "Lek",
        items: items,
        note: cart?.notes
      };

      await postOrder(orderRequest);
      dispatch(clearCart(false));
      setIsDialogOpen(true);
    }
    setOpen(!open);
  };

  const filterProduct = (name: string, search: string) => name.toLowerCase().includes(search.toLowerCase());

  const handleSearch = (term: string) => {
    if (!term) {
      setMenu(sanitizedMenu);
    } else {
      const filterdMenu = sanitizedMenu.map((category: any) => ({
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
    if (cart?.lastWaiterTime && diffInMinutesFromNow(cart?.lastWaiterTime) < 3) {
      setAlertData({
        title: t("oopsTitle"),
        message: t("oopsWaiterMsg"),
        open: true
      });
      setCallWaiterOpen(false);
      return;
    }

    const callWaiterRequest = {
      recipient: business?.whatsapp,
      umbrella,
    };
    callWaiter(callWaiterRequest);
    dispatch(updateWaiterTime());
    setCallWaiterOpen(false);
    setIsWaiterCommingAlertOpen(true);
  };

  const orderItems = Object.values(cart?.items);

  const shouldOpen = useMemo(() =>
    Boolean(orderItems?.length && open), [orderItems?.length, open]);

  const isWithinOpeningItems = isWithinOpeningTime(business?.openingTime, business?.closingTime);

  let alMessage = "";
  let enMessage = "";
  if (!business) {
    alMessage = "Nuk ka te dhena!";
    enMessage = "(No data found!)";
  } else if (!business?.available) {
    alMessage = "Menu nuk eshte aktive!";
    enMessage = "(Menu is not available!)";
  } else if (!isWithinOpeningItems) {
    alMessage = "Jashte orarit te punes!";
    enMessage = "(Outside of working hours!)";
  }

  if (alMessage)
    return <EmptyView alTitle={alMessage} enTitle={enMessage} />;

  return (
    <>
      <div style={{
        background: "linear-gradient(#Ffdd74,white)", position: "fixed",
        zIndex: -1, height: "100%", width: "100%"
      }} >
      </div>
      <SearchBox
        onSearch={handleSearch} />
      <MenuSlider
        menuItems={categories}
        onClickHandler={onMenuClickHandler}
        selectedTabUrlValue={"drinks"}
      />
      <Menu
        menu={menu}
        onCountChange={onCountChange}
        cartItems={cart?.items}
        orderingEnabled={business?.orderRequestFlag}
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

      <InfoDialog title={t("orderConfirmedTitle")}
        message={t("orderConfirmedMsg")}
        isOpen={isDialogOpen}
        isInfo
        handleClose={() => setIsDialogOpen(false)} />
      <InfoDialog title={alertData.title}
        message={alertData.message}
        isOpen={alertData.open}
        isInfo
        handleClose={() => setAlertData({ title: "", message: "", open: false })} />
      <InfoDialog title={t("waiterComingTitle")}
        message={t("waiterComingMsg")}
        isOpen={isWaiterCommingAlertOpen}
        isInfo
        handleClose={() => setIsWaiterCommingAlertOpen(false)} />
      <InfoDialog title={t("callWaiterTitle")}
        message={t("callWaiterMsg")}
        isOpen={callWaiterOpen}
        handleConfirm={handleCallWaiter}
        handleCancel={() => setCallWaiterOpen(false)} />
      {business?.waiterRequestFlag &&
        <IconButton onClick={() => setCallWaiterOpen(true)} sx={{
          top: "auto",
          right: 25,
          bottom: 35,
          left: "auto",
          position: "fixed",
          boxShadow: "0px 17px 10px -10px rgba(0,0,0,0.4)"
        }} >
          <Avatar style={{ width: 65, height: 65, margin: -10 }}
            sx={{ backgroundColor: "#020f85" }}>
            <Image alt="waiter" src="/waiterrr.png" width={45} height={45}
            />
          </Avatar>
        </IconButton>
      }
    </>
  );
};

export default MenuPage;

export async function getServerSideProps(ctx: any) {

  const { umbrella, id } = ctx.query;

  const response = await getBusinessMenu(id, umbrella);

  const business = response?.data;

  if (!business)
    return {
      props: {
        business: null,
        umbrella,
      }
    };

  // if(!delivery)
  //return {
  //   redirect: {
  //     destination: '/delivery-not-found'
  //   }
  // }

  let sanitizedMenu = business?.menu?.filter((category: any) => category?.available)
    .map((category: any) => (
      {
        ...category,
        products: category?.products?.filter((product: any) => product?.available)
      }));

  let categories = sanitizedMenu?.
    map((category: any) => ({
      text: category?.name,
      url: category?.url ?? category?.name?.toLowerCase(),
      icon: category?.icon,
    })
    );

  const preferredProducts = getPromotionProducts(sanitizedMenu);

  if (preferredProducts?.length) {
    const suggestionsCategory = {
      name: "Our Suggestions",
      url: "preferred",
      products: preferredProducts
    };

    sanitizedMenu = [suggestionsCategory, ...sanitizedMenu];

    categories = [{ text: "Our Suggestions", url: "preferred", icon: "/drinks.png" }, ...categories];
  }

  return {
    props: {
      business,
      umbrella,
      sanitizedMenu,
      categories
    }
  };
}
