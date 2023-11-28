import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Grid,
  InputAdornment,
  Box,
  Menu,
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

const PhoneInput = ({ icon, isOwner, error, value, name, ...props }: any) => {
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+355",
    name: "Albania",
    flag: "/flags/albania.png",
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCountryClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCountryClose = (country: any) => {
    setAnchorEl(null);
    props?.setFieldValue(name, country.code);
    setSelectedCountry(country);
  };

  console.log("error", error);
  return (
    <Box sx={{ margin: 1 }}>
      {error && (
        <div
          style={{ color: "red", fontSize: "12px", fontFamily: "Product Sans" }}
        >
          {error}
        </div>
      )}
      <TextField
        fullWidth
        name="ownerPhone"
        type="tel"
        value={value || "+355"}
        onChange={props?.onChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            borderRadius: "8px",
            paddingLeft: 0,
            "& fieldset": {
              borderWidth: 0,
            },
            "&.Mui-focused fieldset": {
              borderColor: isOwner ? "#FFC334" : "#1FCFCC", // Border color when focused
            },
          },
        }}
        InputProps={{
          type: "tel",
          startAdornment: (
            <InputAdornment
              sx={{
                color: isOwner ? "#FFC334" : "#1FCFCC",
                backgroundColor: isOwner ? "#FFC334" : "#1FCFCC",
                padding: "28px 15px",
                borderColor: "red",
                borderTopLeftRadius: "7px",
                borderBottomLeftRadius: "7px",
                borderBottomColor: "red",
              }}
              position="start"
            >
              <Image
                src={selectedCountry?.flag ?? "/albanian.png"}
                alt="dp"
                width="32px"
                height="32px"
                onClick={handleCountryClick}
              />

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
              {icon}
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </Box>
  );
};

export default PhoneInput;
