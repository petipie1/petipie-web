import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { PetImages, colors } from "common/constants";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface Order {
  id: string;
  status: string;
  petId: string;
  createdAt: string;
  name: string;
  phone: string;
  address: string;
  items: any;
}

interface OrderCardProps {
  order: Order;
  updateOrder: any;
}

const OrderCard = ({ order, updateOrder }: OrderCardProps) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChipClick = (event: any) => setAnchorEl(event.currentTarget);

  const handleStatusClick = (status: any) => {
    setAnchorEl(null);
    updateOrder(order.id, status);
  };

  const statusColor: any = {
    New: "#71CCFF",
    Preparing: "#FFD521",
    Ready: "#FA8316",
    Shipped: "#222222",
    Completed: "#25D366",
    Declined: "#F20007",
  };

  const color = statusColor[order.status] ?? "#71CCFF";

  const pet = order.items;

  const avatarColor = pet?.styles?.avatarBg
    ? colors.find((color) => color.name === pet?.styles?.avatarBg)
    : { name: "Sweet Morning", start: "#FF5F6D", end: "#FFC371" };

  const avatarImage = PetImages[pet.breed];

  const inputDateString = order.createdAt;
  const inputDate = new Date(inputDateString);

  const options: any = {
    day: "2-digit",
    month: "short",
    // year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedDate = inputDate.toLocaleString("en-UK", options);

  return (
    <>
      <Card
        sx={{
          width: "100%",
          m: 2,
          boxShadow: "none",
          backgroundColor: "#F5F5F5",
          borderRadius: 5,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              alt="Profile Avatar"
              src={avatarImage}
              sx={{
                width: 85,
                height: 85,
                border: "3px solid whitesmoke",
                background: `linear-gradient(${avatarColor?.start}, ${avatarColor?.end})`,
                padding: 1.5,
              }}
            />
          }
          title={
            <Typography variant="h5" fontFamily={"Product Sans"}>
              {pet.name}

              <strong color="red"> - ({pet.breed})</strong>
            </Typography>
          }
          subheader={
            <div>
              <Typography variant="body1" fontFamily={"Product Sans"}>
                {order.petId}
              </Typography>
              <Typography
                variant="body2"
                fontFamily={"Product Sans"}
                sx={{ fontStyle: "italic", fontWeight: 700 }}
              >
                {formattedDate}
              </Typography>
            </div>
          }
          action={
            <Chip
              label={order.status}
              clickable={false}
              onClick={handleChipClick}
              sx={{
                borderRadius: 2,
                backgroundColor: color,
                minWidth: "65px",
                color: "white",
              }}
            />
          }
        />
        <Grid item container justifyContent="start">
          <Divider
            sx={{
              ml: 3,
              width: "70%",
              height: "0.12rem",
              backgroundColor: "white",
              border: "transparent",
            }}
          />
        </Grid>
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography fontFamily={"Product Sans"}>
                {order.name}

                <strong color="red"> {order.phone}</strong>
              </Typography>
              <Typography variant="body2" paragraph fontFamily={"Product Sans"}>
                {order.address}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      {/* Colors menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {Object.entries(statusColor).map(([key, value]) => (
          <MenuItem
            sx={{ marginLeft: -1 }}
            value={key}
            key={key}
            onClick={() => handleStatusClick(key)}
          >
            <Grid container sx={{}}>
              <Grid item xs>
                <Chip
                  label={key}
                  color="primary"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: `${value}`,
                    minWidth: "65px",
                  }}
                />
              </Grid>
            </Grid>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default OrderCard;
