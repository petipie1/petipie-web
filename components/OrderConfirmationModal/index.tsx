import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const OrderConfirmationModal = ({ open, onClose, success }: any) => {
  var title = success
    ? "Porosia u dergua me sukses!"
    : "Oops, nje gabim ka ndodhur!";
  var message = success
    ? "Ju falenderojme qe zgjodhet Petipie! Do t`ju kontaktojme sapo porosia te jete gati."
    : "Ju lutem provoni perseri pak me vone.";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="order-confirmation-dialog"
    >
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center">
          {success ? (
            <CheckCircleOutlineIcon
              sx={{
                width: "120px",
                height: "120px",
                color: "lightgreen",
              }}
            />
          ) : (
            <ErrorOutlineOutlinedIcon
              sx={{
                width: "120px",
                height: "120px",
                color: "#ff5f5f",
              }}
            />
          )}
        </Box>
        <Box display="flex" justifyContent="center">
          <DialogTitle sx={{ fontFamily: "Cocon", mt: 1 }}>{title}</DialogTitle>
        </Box>
        <DialogContentText
          sx={{ textAlign: "center", fontFamily: "Product Sans" }}
        >
          {message}
        </DialogContentText>
      </DialogContent>
      <Box display="flex" justifyContent="center">
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Mbyll
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default OrderConfirmationModal;
