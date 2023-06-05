import React, { useEffect, useMemo, useState } from "react";
// import AppBar from '@mui/material/AppBar';

import { useDispatch, useSelector } from "react-redux";

import type { NextPage } from "next";
import { getBusinessMenu, postOrder, callWaiter } from "../../../../services/apiClient";
import Menu from "components/Menu";
// import { businessData, categories } from "../../../../common/constants";
import { clearCart, updateCartItemQuantity, updateCartNote } from "redux/reducers/cartSlice";
import OrderTotal from "components/OrderTotal";
import MenuSlider from "components/MenuSlider";
import OrderSummary from "components/OrderSummary";
import InfoDialog from "components/InfoDialog";
import SearchBox from "components/SearchBox";
import { calculateCartTotal, diffInMinutesFromNow, getPromotionProducts, randomString, scroll } from "utils/common";
import EmptyView from "components/EmptyView";
import { useTranslation } from "react-i18next";

const MenuPage: NextPage = ({ business, umbrella, sanitizedMenu, categories }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cart = useSelector((state: any) => state.cart);

  const [open, setOpen] = useState(!(cart?.items));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
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
      setIsAlertOpen(true);
      return;
    }

    if (open) {
      const items = Object.values(cart?.items);
      const orderRef = `${business?.name.slice(0, 3)}-${randomString(5)}`;

      const orderRequest = {
        businessId: business.id,
        umbrella,
        status: "awaiting",
        orderNumber: orderRef,
        total: orderTotal,
        currency: "Lek",
        items: items,
        note: cart?.notes
      };

      const order = await postOrder(orderRequest);
      console.log("order", order);
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
    const orderRequest = {
      recipient: business.whatsapp,
      umbrella,
    };
    callWaiter(orderRequest);
    setCallWaiterOpen(false);
    setIsWaiterCommingAlertOpen(true);
  };

  const orderItems = Object.values(cart?.items);

  const shouldOpen = useMemo(() =>
    Boolean(orderItems?.length && open), [orderItems?.length, open]);

  if (!business?.available)
    return <EmptyView />;

  return (
    <>
      <div style={{
        background: "linear-gradient(#Ffdd74,white)", position: "fixed",
        zIndex: -1, height: "100%", width: "100%"
      }} >
      </div>
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

      <InfoDialog title={t("orderConfirmedTitle")}
        message={t("orderConfirmedMsg")}
        isOpen={isDialogOpen}
        isInfo
        handleClose={() => setIsDialogOpen(false)} />
      <InfoDialog title={t("oopsTitle")}
        message={t("oopsMsg")}
        isOpen={isAlertOpen}
        isInfo
        handleClose={() => setIsAlertOpen(false)} />
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

    </>
  );
};

export default MenuPage;

export async function getServerSideProps(ctx: any) {

  const { umbrella, id } = ctx.query;

  const { data: business } = await getBusinessMenu(id, umbrella);

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
        products: category?.products.filter((product: any) => product.available)
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
