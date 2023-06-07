import {
  variants,
  weight as FontWeights,
} from "./constants";
import * as PropTypes from "prop-types";
import React, { useMemo } from "react";
import { StyledText } from "./StyledText";

export const Price = ({
  value,
  variant,
  digits,
  defaultEmptyState,
  style,
  color,
  symbol,
  weight,
  ...newProps
}: any) =>
  useMemo(() => {
    let displayValue;
    switch (defaultEmptyState) {
      case "dash":
        displayValue = value ? `${symbol}${value.toFixed(digits)}` : "-";
        break;
      case "zero":
        displayValue = value
          ? `${symbol}${value.toFixed(digits)}`
          : `${symbol}${(0).toFixed(digits)}`;
        break;
      case "nothing":
      default:
        displayValue = value ? `${symbol}${value.toFixed(digits)}` : "";
        break;
    }

    return (
      <StyledText
        {...newProps}
        variant={variant}
        style={style}
        color={color}
        weight={weight}
      >
        {displayValue}
      </StyledText>
    );
  }, [value, variant, digits, defaultEmptyState, style]);

Price.propTypes = {
  digits: PropTypes.number,
  value: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.oneOf(variants),
  weight: PropTypes.oneOf(FontWeights),
  defaultEmptyState: PropTypes.oneOf(["nothing", "zero", "dash"]),
  style: PropTypes.object,
  symbol: PropTypes.string,
};

Price.defaultProps = {
  variant: "h4",
  value: 0,
  weight: "bold",
  digits: 2,
  defaultEmptyState: "zero",
  color: "black",
  symbol: "L",
};
