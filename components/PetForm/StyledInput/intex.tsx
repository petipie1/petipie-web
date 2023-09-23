import React from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import Image from "next/image";

const StyledInput = ({
  icon,
  isOwner,
  error,
  value,
  capitalize,
  ...props
}: any) => {
  const capitalizedValue =
    value?.length && capitalize
      ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      : value;

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
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            borderRadius: "8px",
            paddingLeft: 0,
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
              borderColor: isOwner ? "#FFC334" : "#1FCFCC", // Border color when focused
            },
          },
          // '&:hover': {
          //     // Remove the hover border
          //     '& fieldset': {
          //         borderWidth: 1,
          //         borderColor: 'red'
          //     },
          // },
        }}
        // inputProps={{ style: { textTransform: capitalize && "capitalize" } }}
        InputProps={{
          maxLength: 12,
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
              {/* {icon} */}
              <Image
                src={icon ?? "/ic_dog.png"}
                alt="dp"
                width="32px"
                height="32px"
              />
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </Box>
  );
};

export default StyledInput;
