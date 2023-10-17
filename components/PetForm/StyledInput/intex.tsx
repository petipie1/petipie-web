import React from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import Image from "next/image";

const StyledInput = ({
  icon,
  isOwner,
  error,
  value,
  capitalize,
  customStyles,
  ...props
}: any) => {
  const capitalizedValue =
    value?.length && capitalize
      ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      : value;

  const iconBg = isOwner ? "#FFC334" : "#00A6A3";

  const leftIcon = (
    <InputAdornment
      sx={{
        minHeight: customStyles?.minHeight,
        color: iconBg,
        backgroundColor: iconBg,
        padding: "28px 14px",
        width: "60px",
        minWidth: "60px",
        borderColor: "red",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        borderBottomColor: "red",
      }}
      position="start"
    >
      {/* {icon} */}
      <Image src={icon ?? "/ic_dog.png"} alt="dp" width="32px" height="32px" />
    </InputAdornment>
  );
  return (
    <Box sx={{ margin: 1 }}>
      {error && (
        <div
          style={{ color: "#c90000", fontSize: "14px", fontFamily: "cursive" }}
        >
          {error}
        </div>
      )}
      <TextField
        fullWidth
        value={capitalizedValue}
        sx={{
          boxShadow: "0px 3px 6px 1px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          textAlign: "start",
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            borderRadius: "8px",
            paddingLeft: icon ? 0 : "1rem",
            "& fieldset": {
              borderWidth: 0,
            },

            // "&.Mui-focused": {
            //     "& .MuiInputAdornment-root": {
            //         color: "white",
            //         backgroundColor: '#1FCFCC',
            //     },
            //     borderColor: 'red'
            // },
            "&.Mui-focused fieldset": {
              borderColor: iconBg, // Border color when focused
            },
          },
          // '&:hover': {
          //     // Remove the hover border
          //     '& fieldset': {
          //         borderWidth: 1,
          //         borderColor: 'red'
          //     },
          // },
          // ...customStyles,
        }}
        // inputProps={{ style: { textTransform: capitalize && "capitalize" } }}
        inputProps={{
          style: {
            textAlign: "start",
            justifyContent: "start",
            alignSelf: "start",
          },
        }}
        InputProps={{
          maxLength: 12,
          startAdornment: icon ? leftIcon : null,
        }}
        {...props}
      />
    </Box>
  );
};

export default StyledInput;
