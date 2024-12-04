import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import OTPInput from "components/OtpInput";

const VerificationModal = ({ open, handleClose, confirmCode, error }: any) => {
  const { t } = useTranslation();
  const [opCode, setOpCode] = useState("");
  const onChange = (code: any) => setOpCode(code);
  const disabled = !(opCode?.length == 6);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <Grid container item justifyContent={"end"} padding={1}>
        <CancelIcon onClick={handleClose} />
      </Grid>
      <DialogContent>
        <Grid
          item
          container
          sx={{
            justifyContent: "start",
            mt: 2,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontFamily: "Product Sans" }}>
            <strong>{t("operatinCode")}</strong>
          </Typography>
        </Grid>
        <Grid
          item
          container
          sx={{
            justifyContent: "start",
            mt: 2,
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Product Sans" }}>
            <strong>{t("sixDigitsCode")}</strong>
          </Typography>
        </Grid>
        <OTPInput
          length={6}
          onChangeOTP={onChange}
          isNumberInput
          helperText={error}
        />
        <Grid
          item
          container
          sx={{
            justifyContent: "start",
            mt: 2,
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Product Sans" }}>
            {t("sixDigits")}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Product Sans", mt: 2, mb: 2 }}
          >
            <span
              style={{
                color: "red",
              }}
            >
              {t("dontHaveCode")}
            </span>
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              {t("callUs")}
            </span>
          </Typography>
        </Grid>
        <Button
          fullWidth
          disabled={disabled}
          sx={{
            mt: 2,
            borderRadius: 2,
            textTransform: "none",
            fontFamily: "Product Sans",
            color: "whitesmoke",
            height: "50px",
            fontSize: "1.1rem",
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            ":disabled": {
              opacity: "0.6",
              color: "whitesmoke",
            },
          }}
          onClick={() => confirmCode(opCode)}
          style={{
            backgroundColor: "#5344C2",
          }}
        >
          {t("continue")}
        </Button>
      </DialogContent>
      {/* <Button
        sx={{
          borderRadius: "3rem",
          textTransform: "none",
          fontFamily: "Product Sans",
          color: "#2FD9A6",
          maxHeight: "50px",
          minWidth: "60%",
          fontSize: "1.2rem",
          paddingRight: "1.5rem",
          paddingLeft: "1.5rem",
          mt: "1.5rem",
        }}
        onClick={handleClose}
      >
        {t("close")}
      </Button> */}
    </Dialog>
  );
};

export default VerificationModal;
