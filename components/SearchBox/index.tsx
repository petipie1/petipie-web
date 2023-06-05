import * as React from "react";
import { Avatar, Grid, IconButton, ListItemIcon, ListItemText } from "@mui/material";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function SearchBox({ placeholder, onSearch, onIconClick }: any) {

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

  const handleLanguageSelect = (language: string) => {
    console.log("Selected language: ", language);
    setAnchorEl(null);
  };

  return (
    <Grid item container sx={{ justifyContent: "center", padding: 1, alignItems: "center", width: "100%", display: "row" }}>
      <Grid item container maxWidth={"sm"}>
        <TextField
          InputProps={{
            disableUnderline: true,
            sx: {
              borderRadius: "12px",
              paddingRight: "12px",
              marginTop: "5px",
              paddingLeft: "15px",
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
              fontSize: "0.95rem", fontWeight: "100", color: "grey",
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
              margin: 0
            },

            flexGrow: "1",
            borderRadius: "12px",
            boxShadow: "0px 5px 6px 3px rgba(100, 100, 111, 0.1)",
            zIndex: 1,
            height: 40,
            justifyContent: "start",
          }}
          value={value}
          onChange={handleChange}
          placeholder={placeholder ?? "Search"} color="secondary"
        />
        <Grid>
          <IconButton onClick={handleClick}>
            <Avatar
              sx={{
                backgroundColor: "#020f85",
                marginTop: -1, marginBottom: -1
              }}>
              <FilterListIcon htmlColor='white' />
            </Avatar>
          </IconButton>
          <IconButton onClick={onIconClick}>
            <Avatar style={{}}
              sx={{ backgroundColor: "#020f85", margin: -1 }}>

              <img alt="alb" src="/waiterrr.png" width={30} height={30}
              />
            </Avatar>
          </IconButton>
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
          <MenuItem onClick={() => handleLanguageSelect("EN")}>
            <ListItemIcon>
              <img alt="alb" src="/english.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>English</ListItemText>
          </MenuItem>

          <MenuItem onClick={() => handleLanguageSelect("AL")}>
            <ListItemIcon>
              <img alt="alb" src="/albanian.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Albanian</ListItemText>
          </MenuItem>
        </Menu>
      </Grid>
    </Grid >
  );
}