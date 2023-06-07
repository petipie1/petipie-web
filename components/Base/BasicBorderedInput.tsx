import { TextField } from "@mui/material";
import * as PropTypes from "prop-types";
import React, { memo } from "react";

const makeBorder = ({ color, topLeft, bottomLeft, topRight, bottomRight }: any) => ({
  border: `2px solid ${color}`,
  borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
});

const selectorBuilder = (
  selector = "",
  states = [""],
  style = {},
  adornment = "",
) =>
  (states || [""]).reduce((accumulator: any, value) => {
    const copy = { ...accumulator };
    copy[`& ${selector}${value}${adornment ? ` > ${adornment}` : ""}`] = style;
    return copy;
  }, {});

export const BasicBorderedInput = ({
  ...newProps
}: any) => {

  return (
    <TextField
      {...newProps}
      sx={{
        root: ({ topLeft, bottomLeft, topRight, bottomRight }: any) => ({
          backgroundColor: "rgba(255, 255, 255, 1)",
          color: "rgba(41, 41, 41, 1)",
          "& .MuiInputBase-root": {
            fontWeight: 400,
          },
          "& .MuiInputBase-input.Mui-disabled": {
            color: "rgb(111 111 111)",
            background: "rgb(241,241,241)",
          },
          "& .MuiFilledInput-root": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            ...makeBorder({
              topLeft,
              bottomLeft,
              topRight,
              bottomRight,
              color: "rgb(241,241,241)",
            }),
            "&.Mui-disabled": {
              color: "rgb(111 111 111)",
              background: "rgb(241,241,241)",
            },
          },
          "& .MuiFilledInput-root > .MuiInputAdornment-root": {
            color: "rgb(111 111 111)",
          },
          "& .MuiFormLabel-root": {
            color: "rgb(111 111 111)",
            fontWeight: 400,
          },
          ...selectorBuilder(".MuiFilledInput-underline", [":before", ":after"], {
            borderBottom: "none",
          }),
          ...selectorBuilder(
            ".MuiFilledInput-root",
            [".Mui-focused", ".Mui-active"],
            makeBorder({
              topLeft,
              bottomLeft,
              topRight,
              bottomRight,
              color: "#1A75C0",
            }),
          ),
          ...selectorBuilder(".MuiFormLabel-root", [".Mui-focused", ".Mui-active"], {
            color: "rgba(41, 41, 41, 1)",
          }),
          ...selectorBuilder(
            ".MuiFilledInput-root",
            [".Mui-focused", ".Mui-active"],
            {
              color: "#1A75C0",
            },
            ".MuiInputAdornment-root",
          ),
          ...selectorBuilder(
            ".MuiFilledInput-root",
            [".Mui-error"],
            makeBorder({
              topLeft,
              bottomLeft,
              topRight,
              bottomRight,
              color: "#EA413B",
            }),
          ),
          ...selectorBuilder(".MuiFormLabel-root", [".Mui-error"], {
            color: "#EA413B",
          }),
        }),
      }}
      fullWidth
      label="Name"
      variant="filled"
      placeholder={null}
    />
  );
};

BasicBorderedInput.propTypes = {
  topLeft: PropTypes.number,
  bottomLeft: PropTypes.number,
  topRight: PropTypes.number,
  bottomRight: PropTypes.number,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
};

BasicBorderedInput.defaultProps = {
  topLeft: 5,
  bottomLeft: 5,
  topRight: 5,
  bottomRight: 5,
  className: "",
};

export default memo(BasicBorderedInput);
