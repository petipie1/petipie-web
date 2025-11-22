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
      <Image src={icon ?? "/ic_dog.png"} alt="dp" width={32} height={32} />
    </InputAdornment>
  );
  return (
    <Box sx={{ margin: 1 }}>
      {error && (
        <div
          style={{
            color: "#c90000",
            fontSize: "14px",
            fontFamily: "Product Sans",
          }}
        >
          {error}
        </div>
      )}
      <TextField
        fullWidth
        value={capitalizedValue}
        sx={{
          boxShadow:
            customStyles?.boxShadow ?? "0px 3px 6px 1px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          textAlign: "start",
          "& .MuiOutlinedInput-root": {
            backgroundColor: customStyles?.backgroundColor ?? "white",
            borderRadius: "8px",
            paddingLeft: icon ? 0 : "1rem",
            "& fieldset": {
              borderWidth: 0,
            },
            "&.Mui-focused fieldset": {
              borderColor: iconBg, // Border color when focused
            },
          },
        }}
        inputProps={{
          style: {
            textAlign: "start",
            justifyContent: "start",
            alignSelf: "start",
            minHeight: customStyles?.minHeight ?? null,
            // minHeight: "100px", // Adjusted height for input content
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
