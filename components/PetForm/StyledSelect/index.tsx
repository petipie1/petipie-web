import React from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import Image from "next/image";

const StyledSelect = ({
  icon,
  isOwner,
  label,
  name,
  children,
  value,
  error,
  readOnly,
  customStyles,
  ...props
}: any) => {
  const leftIcon = (
    <InputAdornment
      sx={{
        color: isOwner ? "#FFC334" : "#00A6A3",
        backgroundColor: isOwner ? "#FFC334" : "#00A6A3",
        padding: "28px 16px",
        minWidth: "60px",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
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
          style={{
            color: "#c90000",
            fontSize: "14px",
            fontFamily: "Product Sans",
          }}
        >
          {error}
        </div>
      )}
      <FormControl
        required
        fullWidth
        sx={{
          borderRadius: "8px",
          "& .MuiInputLabel-root": {
            color: isOwner ? "#FFC334" : "#00A6A3",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: customStyles?.backgroundColor ?? "white",
            borderRadius: "8px",
            paddingLeft: 0,
            "& fieldset": {
              borderWidth: 0,
            },
            "&.Mui-focused fieldset": {
              borderColor: isOwner ? "#FFC334" : "#00A6A3",
              outline: "none",
            },
          },
          boxShadow:
            customStyles?.boxShadow ?? "0px 3px 6px 1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Select
          name={name}
          select
          readOnly={readOnly}
          displayEmpty
          renderValue={() =>
            value || <div style={{ color: "grey", opacity: 0.6 }}>{label}</div>
          }
          startAdornment={icon ? leftIcon : null}
          sx={{
            "& .MuiSelect-root": {
              padding: "28px 15px",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
              borderBottomColor: "red",
            },
            "& .MuiSelect-icon": {
              color: isOwner ? "#FFC334" : "#00A6A3",
            },
          }}
          {...props}
        >
          {props?.optional && (
            <MenuItem value={""}>
              <em>None</em>
            </MenuItem>
          )}
          {children}
        </Select>
      </FormControl>
    </Box>
  );
};

export default StyledSelect;
