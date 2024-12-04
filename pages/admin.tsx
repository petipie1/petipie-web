import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import orderService from "../services/order.service";
import { Grid } from "@mui/material";
import Button from "components/Base/Button";
import OrderCard from "components/OrderCard";
import OrderFilterComponent from "components/OrderFilter";
import useAuth from "hooks/useAuth";

export const AdminPage = () => {
  const { logout, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window?.location.origin,
      },
    });
  };

  useEffect(() => {
    if (token) {
      getOrders("New", "", "");
    }
  }, [refresh, token]);

  const getOrders = async (status: string, from: string, to: string) => {
    const response = await orderService.getOrdersByStatus({
      status,
      from,
      to,
      token,
    });

    if (response?.data) {
      setOrders(response?.data);
    }
  };

  const handleFilterOrders = async (
    status: string,
    from: string,
    to: string
  ) => {
    await getOrders(status, from, to);
  };

  const handleOrderUpdate = async (orderId: string, status: string) => {
    await orderService.updateOrderStatus({
      orderId,
      status,
      token,
    });
    setRefresh(true);
  };

  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid container maxWidth={"sm"}>
        <OrderFilterComponent getOrders={handleFilterOrders} />
        <Grid item container maxWidth={"sm"} sx={{ justifyContent: "center" }}>
          {!orders?.length && <div> No orders!</div>}
          {orders.map((order: any, index: number) => (
            <OrderCard
              key={order.name - index}
              order={order}
              updateOrder={handleOrderUpdate}
            />
          ))}
        </Grid>
        <Grid container maxWidth={"sm"} sx={{ justifyContent: "center" }}>
          <Button title="Logout" onClick={handleLogout} fullWidth />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withAuthenticationRequired(AdminPage);
