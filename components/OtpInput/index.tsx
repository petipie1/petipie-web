import React, { memo, useCallback, useState } from "react";
import * as PropTypes from "prop-types";

import SingleInput from "./SingleInput";
import { Grid, Typography } from "@mui/material";

OTPInputComponent.propTypes = {
  length: PropTypes.number,
  isNumberInput: PropTypes.bool,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  onChangeOTP: PropTypes.func,
  helperText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  error: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  wasResendClicked: PropTypes.bool,
};

function OTPInputComponent(props: any) {
  const {
    length,
    isNumberInput,
    autoFocus,
    disabled,
    onChangeOTP,
    helperText,
    error,
    onFocus,
    wasResendClicked,
  } = props;

  const [activeInput, setActiveInput] = useState(0);
  const [otpValues, setOTPValues] = useState(Array(length).fill(""));

  //   useEffect(() => {
  //     if (activeInput === -1) onBlur();
  //   }, [activeInput, onBlur]);

  // Helper to return OTP from inputs
  const handleOtpChange = useCallback(
    (otp: any) => {
      const otpValue = otp.join("");
      onChangeOTP(otpValue);
    },
    [onChangeOTP]
  );

  // Helper to return value with the right type: 'text' or 'number'
  const getRightValue = useCallback(
    (str: string) => {
      const changedValue = str;
      if (!isNumberInput) {
        return changedValue;
      }
      return !changedValue || /\d/.test(changedValue) ? changedValue : "";
    },
    [isNumberInput]
  );

  // Change OTP value at focussing input
  const changeCodeAtFocus = useCallback(
    (str: string) => {
      const updatedOTPValues = [...otpValues];
      updatedOTPValues[activeInput] = str[0] || "";
      setOTPValues(updatedOTPValues);
      handleOtpChange(updatedOTPValues);
    },
    [activeInput, handleOtpChange, otpValues]
  );

  // Focus `inputIndex` input
  const focusInput = useCallback(
    (inputIndex: number) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
      setActiveInput(selectedIndex);
    },
    [length]
  );

  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1);
  }, [activeInput, focusInput]);

  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);

  // Handle onFocus input
  const handleOnFocus = useCallback(
    (index: number) => () => {
      focusInput(index);
      if (onFocus) onFocus();
    },
    [focusInput, onFocus]
  );

  // Handle onChange value for each input
  const handleOnChange = useCallback(
    (e: any) => {
      const val = getRightValue(e.currentTarget.value);
      if (!val) {
        e.preventDefault();
        return;
      }
      changeCodeAtFocus(val);
      focusNextInput();
    },
    [changeCodeAtFocus, focusNextInput, getRightValue]
  );

  // Hanlde onBlur input
  const handleOnBlur = useCallback(() => {
    // only blur (and trigger validation) if the user didn't click on a link
    if (!wasResendClicked) setActiveInput(-1);
  }, [wasResendClicked]);

  // Handle onKeyDown input
  const handleOnKeyDown = useCallback(
    (e: any) => {
      switch (e.key) {
        case "Backspace":
        case "Delete": {
          e.preventDefault();
          if (otpValues[activeInput]) {
            changeCodeAtFocus("");
          } else {
            focusPrevInput();
          }
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          focusPrevInput();
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          focusNextInput();
          break;
        }
        case " ": {
          e.preventDefault();
          break;
        }
        default:
          break;
      }
    },
    [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]
  );

  const handleOnPaste = useCallback(
    (e: any) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData("text/plain")
        .trim()
        .slice(0, length - activeInput)
        .split("");
      if (pastedData) {
        let nextFocusIndex = 0;
        const updatedOTPValues = [...otpValues];
        updatedOTPValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = getRightValue(pastedData.shift() || val);
            if (changedValue) {
              updatedOTPValues[index] = changedValue;
              nextFocusIndex = index;
            }
          }
        });
        setOTPValues(updatedOTPValues);
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
        handleOtpChange(updatedOTPValues);
      }
    },
    [activeInput, getRightValue, length, otpValues, handleOtpChange]
  );

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <>
        {Array(length)
          .fill("")
          .map((_, index) => (
            <Grid
              item
              xs={2}
              style={{ paddingBottom: "0px" }}
              // eslint-disable-next-line react/no-array-index-key
              key={`SingleInput-${index}`}
            >
              <SingleInput
                focus={activeInput === index}
                value={otpValues && otpValues[index]}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus={autoFocus}
                onFocus={handleOnFocus(index)}
                onChange={handleOnChange}
                onKeyDown={handleOnKeyDown}
                onBlur={handleOnBlur}
                onPaste={handleOnPaste}
                type={isNumberInput ? "tel" : "text"}
                inputMode={isNumberInput ? "numeric" : "text"}
                disabled={disabled}
                error={error}
              />
            </Grid>
          ))}
        <Typography
          variant="caption"
          style={{
            color: "red",
            textAlign: "left",
            width: "100%",
            marginLeft: "22px",
            marginRight: "14px",
            marginTop: "3px",
          }}
        >
          {helperText}
        </Typography>
      </>
    </Grid>
  );
}

const OTPInput = memo(OTPInputComponent);
export default OTPInput;
