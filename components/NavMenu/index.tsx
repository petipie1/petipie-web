import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";
import Link from "next/link";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   menuItem: {
//     marginLeft: theme.spacing(2),
//   },
// }));

const NavMenu = ({ items, icon }: any) => {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ flexGrow: 1, backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Hidden smUp>
            <IconButton edge="start" aria-label="menu" sx={{ marginRight: 2 }}>
              <MenuIcon htmlColor="#FFDC26" />
            </IconButton>
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
              <Link href={item.url} key={`${idx}-${item.title}`}>
                <Button
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    marginLeft: 1,
                    fontSize: 16,
                    fontFamily: "Product Sans, sans-serif",
                    color: "#000000",
                  }}
                >
                  {item.title}
                </Button>
              </Link>
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
