import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const InfoDialog = ({
  title,
  message,
  children,
  isOpen,
  handleClose,
  isInfo,
  handleConfirm,
  handleCancel,
}: any) => {
  const { t } = useTranslation();

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: { borderRadius: 6 },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <Typography fontWeight={700} sx={{ fontSize: "20px" }}>
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontSize: "18px" }}
          >
            {message}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          {handleCancel && (
            <Button
              onClick={handleCancel}
              sx={{
                color: "red",
                textTransform: "none",
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              {t("cancel")}
            </Button>
          )}
          {handleConfirm && (
            <Button
              onClick={handleConfirm}
              sx={{ fontSize: "18px", fontWeight: 400 }}
            >
              {t("confirm")}
            </Button>
          )}
        </DialogActions>
        {isInfo && (
          <Button
            fullWidth
            size="medium"
            sx={{
              borderRadius: 0,
              color: "white",
              fontWeight: 400,
              textTransform: "none",
              fontSize: "16px",
              height: "45px",
              fontFamily: "sans-serif",
            }}
            style={{ backgroundColor: "#26c48b" }}
            onClick={handleClose}
          >
            OK
          </Button>
        )}
      </Dialog>
    </div>
  );
};

export default InfoDialog;
