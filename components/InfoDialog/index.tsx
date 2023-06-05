import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const InfoDialog = ({ title, message, isOpen, handleClose, isInfo,
  handleConfirm, handleCancel }: any) => {

  const { t } = useTranslation();

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: { borderRadius: 6 }
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <Typography fontWeight={700} sx={{ fontSize: "20px" }}>
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ fontSize: "18px" }}>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {handleCancel &&
            <Button onClick={handleCancel}
              sx={{
                color: "red", textTransform: "none",
                fontSize: "18px"
              }}>
              {t("no")}
            </Button>
          }
          {handleConfirm &&
            <Button onClick={handleConfirm} sx={{ fontSize: "18px" }}>
              {t("yes")}
            </Button>
          }
        </DialogActions>
        {isInfo &&
          <Button
            fullWidth
            size='medium'
            sx={{
              borderRadius: 0,
              color: "white",
              fontWeight: 400,
              textTransform: "none",
              fontSize: "16px",
              maxHeight: "45px",
              fontFamily: "sans-serif"
            }}
            style={{ backgroundColor: "#26c48b" }}
            onClick={handleClose}
          >
            OK
          </Button>
        }

      </Dialog>
    </div >
  );
};

export default InfoDialog;