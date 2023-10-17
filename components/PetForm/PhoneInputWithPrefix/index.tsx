import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Grid,
  Box,
  Menu,
  Typography,
  Divider,
} from "@mui/material";
import Image from "next/image";

const countries = [
  { code: "+355", name: "Albania", flag: "/flags/albania.png" },
  { code: "+1", name: "United States", flag: "/flags/usa.png" },
  { code: "+44", name: "United Kingdom", flag: "/flags/uk.png" },
  { code: "+49", name: "Germany", flag: "/flags/germany.png" },
  { code: "+389", name: "Macedonia", flag: "/flags/macedonia.png" },
  { code: "+30", name: "Greece", flag: "/flags/greece.png" },
  { code: "+383", name: "Kosovo", flag: "/flags/kosovo.png" },
  { code: "+382", name: "Montenegro", flag: "/flags/montenegro.png" },
  { code: "+45", name: "Denmark", flag: "/flags/denmark.png" },
  { code: "+1", name: "Canada", flag: "/flags/canada.png" },
  { code: "+33", name: "France", flag: "/flags/france.png" },
  { code: "+39", name: "Italy", flag: "/flags/italy.png" },
];

const PhoneInputWithPrefix = ({
  icon,
  isOwner,
  error,
  clickPrefix,
  clickIcon,
  initialPhone,
  customStyles,
  ...props
}: any) => {
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+355",
    name: "Albania",
    flag: "/flags/albania.png",
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    props?.onChange({ prefix: selectedCountry.code, value: phone });
  }, [phone, selectedCountry.code]);

  useEffect(() => {
    setPhone(initialPhone);
  }, [initialPhone]);

  const handleCountryClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCountryClose = (country: any) => {
    setAnchorEl(null);
    // props?.setFieldValue(name, { prefix: country.code, value: "" });
    setSelectedCountry(country);
  };

  const handleOnChange = (event: any) => {
    const restPhone = event.target.value;
    setPhone(restPhone);
  };

  const iconSrc = icon ? icon : selectedCountry?.flag || "/albanian.png";
  const bgColor = customStyles?.iconBg ?? (isOwner ? "#FFC334" : "#00A6A3");

  return (
    <Box sx={{ margin: 1 }}>
      {error && (
        <div
          style={{ color: "#c90000", fontSize: "14px", fontFamily: "cursive" }}
        >
          {error}
        </div>
      )}
      <Grid
        container
        alignItems="center"
        sx={{
          boxShadow: "0px 3px 6px 1px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Grid
          item
          sx={{
            color: bgColor,
            backgroundColor: bgColor,
            padding: "13px 16px",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            width: "60px",
            minWidth: "60px",
          }}
        >
          {/* {icon} */}
          <Image
            src={iconSrc}
            alt="dp"
            width="22px"
            height="22px"
            onClick={clickIcon && handleCountryClick}
          />
        </Grid>
        <Grid
          item
          container
          direction={"row"}
          alignItems="center"
          justifyContent={"center"}
          sx={{
            backgroundColor: "white",
            height: "54px",
            width: "50px",
            padding: "2px",
          }}
        >
          <Typography onClick={clickPrefix && handleCountryClick}>
            {selectedCountry?.code}
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ height: "35px", marginLeft: 1 }}
          />
        </Grid>
        <Grid item xs alignItems="center">
          <TextField
            fullWidth
            type="tel"
            value={phone}
            onChange={handleOnChange}
            sx={{
              borderRadius: "8px",
              marginLeft: "-1px",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
                borderRadius: "0 8px 8px 0",
                height: "54px",
                paddingLeft: 0,
                "& fieldset": {
                  borderWidth: 0,
                },
                "&.Mui-focused fieldset": {
                  borderTopColor: bgColor, // Border color when focused
                  borderRightColor: bgColor,
                  borderBottomColor: bgColor,
                  borderColor: "transparent",
                },
              },
            }}
            InputProps={{
              type: "tel",
            }}
            // {...props}
          />
        </Grid>
      </Grid>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {countries.map((country) => (
          <MenuItem
            sx={{ marginLeft: -1 }}
            value={country.code}
            key={country.code}
            onClick={() => handleCountryClose(country)}
          >
            <Grid container sx={{}}>
              <Grid item sx={{ marginRight: 1 }}>
                <Image
                  alt="flag"
                  src={country.flag}
                  width="22px"
                  height="22px"
                />
              </Grid>
              <Grid item xs>
                {country.code}
              </Grid>
            </Grid>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default PhoneInputWithPrefix;
