import React from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const HelpDialog = ({ open, handleClose }: any) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant="h4"> {t("howItWorks")}</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h5">{t("helpFirstScan")}</Typography>
        <p>{t("helpFirstScan1")}</p>
        <br />
        <p>{t("helpFirstScan2")}</p>
        <br />
        <p>{t("helpFirstScan3")}</p>
        <br />
        <Typography variant="h5">{t("helpSecondScan")}</Typography>
        <p>{t("helpSecondScan1")}</p>
        <br />
        <Typography variant="h5">{t("helpAvatar")}</Typography>
        <p>{t("helpAvatar1")}</p>
        <br />
        <p>{t("helpAvatar2")}</p>
        <br />
        <Typography variant="h5">{t("helpLocation")}</Typography>
        <span>
          <strong>{t("important")}</strong>
          {t("helpLocation1")}
        </span>
        <br />
        <br />
        <p>{t("helpLocation2")}</p>
        <br />
        <span>
          <strong>{t("clarification")}</strong>
          {t("helpLocation2")}
        </span>
        <br />
        <br />
        <Typography variant="h5">{t("helpContact")}</Typography>
        <span>
          {t("helpContact1")} <strong>+355683303005</strong> {t("helpContact2")}{" "}
          <strong>petipie.online</strong>
        </span>
      </DialogContent>

      <Button
        sx={{
          borderRadius: "3rem",
          textTransform: "none",
          fontFamily: "Product Sans",
          color: "#FFDC26",
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
      </Button>
    </Dialog>
  );
};

export default HelpDialog;
