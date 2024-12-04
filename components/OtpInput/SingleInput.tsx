import React, { memo, useRef, useLayoutEffect } from "react";
import usePrevious from "./usePrevious";
import { TextField, styled } from "@mui/material";

const BorderedTextField = styled(TextField)({
  backgroundColor: "rgba(168, 156, 255, 0.08)",
  "& label.Mui-focused": {
    color: "red",
    backgroundColor: "rgba(168, 156, 255, 0.08)",
    // borderRadius: "8px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid",
      borderColor: "lightgrey",
      borderRadius: "8px",
    },
    "&:hover fieldset": {
      //   borderRadius: "8px",
      // borderColor: "whitesmoke",
    },
    //   "&.Mui-focused fieldset": {
    //     borderColor: "red",
    //   },
    //   "&.Mui-error fieldset": {
    //     borderColor: "red",
    //   },
  },
});

export function SingleOTPInputComponent(props: any) {
  const { focus, autoFocus, ...rest } = props;
  const inputRef: any = useRef(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current?.focus();
      }
      if (focus && focus !== prevFocus) {
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    }
  }, [autoFocus, focus, inputRef, prevFocus]);

  return (
    <BorderedTextField
      inputProps={{ ref: inputRef, style: { textAlign: "center" } }}
      {...rest}
    />
  );
}

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
