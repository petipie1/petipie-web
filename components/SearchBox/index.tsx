import * as React from "react";
import { Avatar, Grid, IconButton, ListItemIcon, ListItemText } from "@mui/material";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function SearchBox({ placeholder, onSearch, onIconClick, isDemo, showWaiterButton }: any) {
  const { t, i18n } = useTranslation();

  const [value, setValue] = React.useState("");
  const [timer, setTimer]: any = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: any): any => {
    const searchTerm = event.target.value;
    setValue(searchTerm);
    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      onSearch(searchTerm);
    }, 0);
    setTimer(newTimer);
  };

  const handleClear = () => {
    setValue("");
    onSearch("");
  };

  const handleLanguageSelect = async (language: string) => {
    i18n.changeLanguage(language);
    setAnchorEl(null);
  };

  return (
    <Grid item container sx={{ justifyContent: "center", padding: 1, alignItems: "center", width: "100%", display: "row" }}>
      <Grid item container maxWidth={"sm"}>
        {isDemo &&
          <IconButton >
            <Link href="/" >
              <ArrowBackIcon />
            </Link>
          </IconButton>
        }
        <TextField
          InputProps={{
            disableUnderline: true,
            sx: {
              borderRadius: "12px",
              paddingRight: "12px",
              marginTop: "5px",
              paddingLeft: "15px",
              fontSize: "26px"
            },
            endAdornment: (
              <IconButton
                sx={{
                  visibility: value ? "visible" : "hidden",
                  height: "30px",
                }}
                onClick={handleClear}
              >
                <ClearIcon />
              </IconButton>
            ),
            style: {
              fontSize: "18px", fontWeight: "400", color: "grey",
            }
          }}

          variant="standard"
          InputLabelProps={{
            style: {
              fontSize: 30, alignSelf: "start",
            }
          }}
          sx={{
            backgroundColor: "white",
            "& input[type=number]::-webkit-inner-spin-button": {
              "WebkitAppearance": "none",
              margin: 0,

            },

            flexGrow: "1",
            borderRadius: "12px",
            boxShadow: "0px 5px 6px 3px rgba(100, 100, 111, 0.1)",
            zIndex: 1,
            height: 45,
            justifyContent: "start",
            fontSize: "19px"
          }}
          value={value}
          onChange={handleChange}
          placeholder={placeholder ?? t("search")} color="secondary"
        />
        <Grid>
          <IconButton onClick={handleClick}>
            <Avatar
              sx={{
                backgroundColor: "#020f85",
                marginTop: -1, marginBottom: -1,
              }}>
              <FilterListIcon htmlColor='white' />
            </Avatar>
          </IconButton>
          {isDemo || showWaiterButton ? (
            <IconButton onClick={onIconClick}>
              <Avatar style={{}}
                sx={{ backgroundColor: "#020f85", margin: -1 }}>
                <Image alt="waiter" src="/waiterrr.png" width={30} height={30}
                />
              </Avatar>
            </IconButton>
          ) : null
          }
        </Grid>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => handleLanguageSelect("en")}>
            <ListItemIcon>
              <Image alt="eng" src="/english.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>{t("English")}</ListItemText>
          </MenuItem>

          <MenuItem onClick={() => handleLanguageSelect("al")}>
            <ListItemIcon>
              <Image alt="alb" src="/albanian.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>{t("Albanian")}</ListItemText>
          </MenuItem>
        </Menu>
      </Grid>
    </Grid >
  );
}