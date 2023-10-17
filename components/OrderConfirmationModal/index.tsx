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

const OrderConfirmationModal = ({ open, onClose }: any) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="order-confirmation-dialog"
    >
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center">
          <CheckCircleOutlineIcon
            sx={{
              width: "120px",
              height: "120px",
              color: "lightgreen",
            }}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <DialogTitle sx={{ fontFamily: "Cocon", mt: 1 }}>
            Porosia u dergua me sukses!
          </DialogTitle>
        </Box>
        <DialogContentText
          sx={{ textAlign: "center", fontFamily: "Product Sans" }}
        >
          Ju falenderojme qe zgjodhet Petipie! Do t`ju njoftojme sapo porosia te
          jete gati.
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
