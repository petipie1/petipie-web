import React from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import EmptyView from "./EmptyView";
import VaccinesList from "./VaccinesList";
import ReminderList from "./ReminderList";

const VaccinesModal = ({
  open,
  handleClose,
  vaccines,
  reminders,
  onAddVaccineClick,
}: any) => {
  const { t } = useTranslation();
  const showEmptyView = vaccines?.length === 0 && reminders?.length === 0;
  return (
    <Dialog open={open} onClose={handleClose}>
      <Grid container item justifyContent={"end"} padding={1}>
        <CancelIcon onClick={handleClose} />
      </Grid>
      {/* <DialogTitle>
        <Typography variant="h4"> {t("howItWorks")}</Typography>
      </DialogTitle> */}
      <DialogContent>
        {vaccines?.length > 0 && <VaccinesList vaccines={vaccines} />}
        {reminders?.length > 0 && <ReminderList reminders={reminders} />}

        {showEmptyView && <EmptyView />}

        <Button
          fullWidth
          sx={{
            mt: 3,
            borderRadius: 2,
            textTransform: "none",
            fontFamily: "Product Sans",
            color: "whitesmoke",
            height: "50px",
            fontSize: "1.1rem",
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
          }}
          // onClick={handleFetchVaccines}
          style={{
            backgroundColor: "black",
          }}
        >
          {t("addReminder")}
        </Button>
        <Button
          fullWidth
          sx={{
            mt: 1,
            mb: 2,
            borderRadius: 2,
            textTransform: "none",
            fontFamily: "Product Sans",
            color: "whitesmoke",
            height: "50px",
            fontSize: "1.1rem",
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
          }}
          onClick={onAddVaccineClick}
          style={{
            backgroundColor: "#2FD9A6",
          }}
        >
          {t("addVaccine")}
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

export default VaccinesModal;
