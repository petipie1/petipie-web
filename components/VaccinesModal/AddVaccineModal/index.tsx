import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { Box, Grid, MenuItem, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import StyledInput from "components/PetForm/StyledInput/intex";
import StyledSelect from "components/PetForm/StyledSelect";
import { UploadFile } from "@mui/icons-material";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const AddVaccineModal = ({ open, handleClose, handleAddVaccine }: any) => {
  const vaccines = ["Rabbies Vaccine", "Parasitar"];
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const fileInputRef: any = useRef(null);
  const formRef: React.Ref<any> = useRef();

  const handleUploadClick = () => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      // Handle the selected file
    }
  };

  const requiredFieldMessage = "Field is required!";
  const initialValues = {
    vaccine: "",
    notes: "",
    image: "",
  };

  const validationSchema = Yup.object().shape({
    vaccine: Yup.string().required(requiredFieldMessage),
    notes: Yup.string().max(100, "Jo me shume se 100 karaktere"),
    image: Yup.string(),
  });

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current?.handleSubmit();
    }
  };

  // Submit function
  const onSubmit = async (values: any, { resetForm }: any) => {
    const addVaccineRequest = {
      title: values.vaccine,
      date: startDate,
      notes: values.notes,
      image: values.image,
      opCode: 123456,
      clinic: "Vet Clinic",
    };
    handleAddVaccine(addVaccineRequest);

    // await activatePet(externalId, activatePetRequest);
    resetForm();
    // router.replace(`/pet/${externalId}`);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <Grid container item justifyContent={"end"} padding={1}>
        <CancelIcon onClick={handleClose} />
      </Grid>
      {/* <DialogTitle>
        <Typography variant="h5" sx={{ fontFamily: "Product Sans" }}>
          <strong>Add New Vaccine</strong>
        </Typography>
      </DialogTitle> */}
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
            <strong>{t("addNewVaccine")}</strong>
          </Typography>
        </Grid>

        {/* FOMRIK  */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          innerRef={formRef}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            // isSubmitting,
          }) => {
            console.log("errors", errors);

            return (
              <Form
                noValidate
                style={{
                  width: "90%", // Fix IE 11 issue.
                  marginTop: 1,
                }}
              >
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
                    <strong>{t("vaccine")}</strong>
                  </Typography>
                </Grid>
                <StyledSelect
                  placeholder={"Vaccine"}
                  name="vaccine"
                  label={t("chooseVaccine")}
                  customStyles={{
                    backgroundColor: "rgba(168, 156, 255, 0.08)",
                    boxShadow: "",
                  }}
                  onChange={handleChange}
                  value={values.vaccine}
                  error={touched.vaccine && errors.vaccine}
                >
                  {vaccines.map((vaccine: string) => {
                    return (
                      <MenuItem
                        sx={{ marginLeft: -1 }}
                        value={vaccine}
                        key={vaccine}
                      >
                        {vaccine}
                      </MenuItem>
                    );
                  })}
                </StyledSelect>
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
                    <strong>{t("date")}</strong>
                  </Typography>
                </Grid>
                <Grid item container>
                  <DatePicker
                    dateFormat="dd MMMM yyyy"
                    selected={startDate}
                    minDate={new Date()}
                    onChange={(date) => setStartDate(date)}
                    name="date"
                    customInput={
                      <StyledInput
                        placeholder={"Date of vaccine"}
                        name="date"
                        customStyles={{
                          backgroundColor: "rgba(168, 156, 255, 0.08)",
                          boxShadow: "",
                        }}
                      />
                    }
                  />
                </Grid>
                <Grid
                  item
                  container
                  sx={{
                    justifyContent: "start",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontFamily: "Product Sans" }}>
                    <strong>{t("notes")}</strong>
                  </Typography>
                </Grid>
                <StyledInput
                  multiline
                  customStyles={{
                    minHeight: "60px",
                    backgroundColor: "rgba(168, 156, 255, 0.08)",
                    boxShadow: "",
                  }}
                  name="notes"
                  onChange={handleChange}
                  value={values.notes}
                  error={touched.notes && errors.notes}
                />
                <Grid
                  item
                  container
                  sx={{
                    justifyContent: "start",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontFamily: "Product Sans" }}>
                    <strong>{t("image")}</strong>
                  </Typography>
                </Grid>
                <Box
                  sx={{
                    borderRadius: "8px",
                    backgroundColor: "rgba(168, 156, 255, 0.08)",
                    padding: 2,
                    textAlign: "center",
                    minHeight: "60px",
                    justifyContent: "center",
                  }}
                  onClick={handleUploadClick}
                >
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  {selectedFile ? (
                    <Image
                      src={selectedFile}
                      alt="logo"
                      // layout="responsive"
                      width={200}
                      height={300}
                      style={{ objectFit: "scale-down" }}
                    />
                  ) : (
                    <UploadFile htmlColor="#5748C3" />
                  )}

                  {selectedFile ? (
                    <Typography
                      color="red"
                      sx={{ cursor: "pointer" }}
                      onClick={() => setSelectedFile(null)}
                    >
                      Remove{" "}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body1"
                      color="#5748C3"
                      sx={{ cursor: "pointer" }}
                    >
                      <strong>{t("chooseImage")}</strong>
                    </Typography>
                  )}
                </Box>
                <Button
                  fullWidth
                  onClick={handleSubmit}
                  disabled={!values?.vaccine}
                  sx={{
                    mt: 2,
                    borderRadius: 2,
                    textTransform: "none",
                    fontFamily: "Product Sans",
                    color: "whitesmoke",
                    maxHeight: "50px",
                    fontSize: "1.1rem",
                    paddingRight: "1.5rem",
                    paddingLeft: "1.5rem",
                    ":disabled": {
                      opacity: "0.6",
                      color: "whitesmoke",
                    },
                  }}
                  // onClick={handleFetchVaccines}
                  style={{
                    backgroundColor: "#2FD9A6",
                  }}
                >
                  {t("add")}
                </Button>
              </Form>
            );
          }}
        </Formik>

        {/* <Typography variant="h5">{t("helpFirstScan")}</Typography>
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
        </span> */}
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

export default AddVaccineModal;
