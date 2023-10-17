import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";
import DrawerMenu from "components/DrawerMenu";

const NavMenu = ({ items, icon }: any) => {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ flexGrow: 1, backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Hidden smUp>
            <DrawerMenu icon={icon} items={items} />
          </Hidden>
          <div style={{ flexGrow: 1 }}>
            <img
              src={icon}
              alt="Your Logo"
              style={{ height: 40, marginRight: 16 }}
            />
          </div>
          <Hidden smDown>
            {items.map((item: any, idx: number) => (
              <Button
                key={`${idx}-${item.title}`}
                color="inherit"
                sx={{
                  textTransform: "none",
                  marginLeft: 1,
                  fontSize: 16,
                  fontFamily: "Product Sans, sans-serif",
                  color: "#000000",
                }}
                onClick={() =>
                  document.querySelector(item.url)?.scrollIntoView()
                }
              >
                {item.title}
              </Button>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden smDown>
        <Typography
          sx={{
            textAlign: "right",
            marginTop: -2,
            marginRight: 4,
            fontSize: 16,
            backgroundColor: "transparent",
            color: "#FFDC26",
          }}
        >
          +355 68 88 03 602
        </Typography>
      </Hidden>
    </div>
  );
};

export default NavMenu;
