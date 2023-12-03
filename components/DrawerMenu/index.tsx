import React, { memo, useState } from "react";
import PropTypes from "prop-types";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Typography, Grid, List, ListItem } from "@mui/material";
import Link from "next/link";

const DrawerMenu = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => setIsOpen(open);

  const iconSrc = props?.icon || "/default.png";
  const items = props.items;

  return (
    <div>
      <IconButton
        edge="start"
        aria-label="menu"
        sx={{ marginRight: 2 }}
        onClick={() => toggleDrawer(true)}
      >
        <MenuIcon htmlColor="#FFDC26" />
      </IconButton>
      <SwipeableDrawer
        open={isOpen}
        onClick={() => toggleDrawer(false)}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        anchor="left"
      >
        <>
          <List>
            {/* <MenuListItems menuItems={menuItems} /> */}
            {/* <StyledLoginItem> */}
            <Grid container alignItems="stretch" spacing={2}>
              {/* {!true ? (
                <React.Fragment>
                  <Grid item xs={6}>
                    <Button
                      onClick={() => onLoginRegisterClicked(true)}
                    >
                      Register
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      onClick={() => onLoginRegisterClicked(false)}
                    >
                      Log In
                    </Button>
                  </Grid>
                </React.Fragment>
              ) : ( */}
              <Grid item xs>
                <Link
                  href="/"
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "Roboto",
                    fontWeight: 200,
                    color: "black",
                  }}
                >
                  <div style={{ flexGrow: 1 }}>
                    <img
                      src={iconSrc}
                      alt="Your Logo"
                      style={{ height: 40, margin: "12px" }}
                    />
                  </div>
                </Link>
              </Grid>
              {/* )} */}
            </Grid>
            {items.map((item: any, idx: number) => (
              <ListItem
                key={item.title - idx}
                style={{ color: "black", fontSize: "14px" }}
              >
                <Typography
                  sx={{ fontFamily: "Product Sans" }}
                  onClick={() =>
                    document.querySelector(item.url)?.scrollIntoView()
                  }
                >
                  {item.title}
                </Typography>
              </ListItem>
            ))}
            <ListItem>
              <a href="tel:+355683303005">
                <Typography
                  sx={{
                    textAlign: "right",
                    marginRight: 4,
                    marginTop: -1.5,
                    fontSize: 16,
                    backgroundColor: "transparent",
                    fontStyle: "italic",
                    color: "#FFDC26",
                  }}
                >
                  +355 68 33 03 005
                </Typography>
              </a>
            </ListItem>
            <ListItem>
              <a href="`mailto:petipie.contact@gmail.com">
                <Typography
                  sx={{
                    textAlign: "right",
                    marginRight: 4,
                    marginTop: -1.5,
                    fontSize: 16,
                    backgroundColor: "transparent",
                    fontStyle: "italic",
                    color: "#FFDC26",
                  }}
                >
                  petipie.contact@gmail.com
                </Typography>
              </a>
            </ListItem>
          </List>
          <Grid
            container
            style={{ flexGrow: 1, justifyContent: "flex-end" }}
            direction="column"
            sx={{ minWidth: "16rem" }}
          >
            {/* <Grid item>
              <Typography component={ListItem} variant="body2">
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography component={ListItem} variant="body2">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography component={ListItem} variant="body2">
                <a
                  target="_blank"
                  href="https://sacoronavirus.co.za/"
                  rel="noreferrer"
                >
                  COVID-19 Online Resource & News Portal
                </a>
              </Typography>
            </Grid> */}
          </Grid>
        </>
      </SwipeableDrawer>
    </div>
  );
};
DrawerMenu.propTypes = {
  icon: PropTypes.string,
  items: PropTypes.array,
};

export default memo(DrawerMenu);
