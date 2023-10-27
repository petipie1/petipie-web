import React, { useRef, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  Container,
  Button,
  MenuItem,
  Typography,
  Grid,
  Avatar,
  Menu,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Image from "next/image";
import libphonenumber from "google-libphonenumber";
import StyledInput from "./StyledInput/intex";
import StyledSelect from "./StyledSelect";
import {
  Breed,
  BreedIcons,
  Citites,
  PetImages,
  colors,
} from "common/constants";
import InfoDialog from "components/InfoDialog";
import { activatePet } from "services/apiClient";
import { useRouter } from "next/router";
import PhoneInputWithPrefix from "./PhoneInputWithPrefix";

const requiredFieldMessage = "Ju lutem plotesoni fushen!";
const requiredSelectMessage = "Ju lutem zgjidhni fushen!";

const PetForm = ({ data, externalId }: any) => {
  const [region, setRegion] = useState("");
  const [wpRegion, setWpRegion] = useState("");
  const [avatar, setAvatar] = useState<string>(
    data?.breed ? PetImages[data?.breed] : "/ProfilePicStandard.png"
  );

  const [color, setColor] = useState(
    data?.styles?.avatarBg
      ? colors.find((color) => color.name === data?.styles?.avatarBg)
      : { name: "Sweet Morning", start: "#FF5F6D", end: "#FFC371" }
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef: React.Ref<any> = useRef();
  const router = useRouter();

  const handleEditClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditClose = (color: any) => {
    setAnchorEl(null);
    setColor(color);
  };

  function validatePhone(value: string, regionCode: string) {
    if (!value) {
      return false; // Allow empty values, you can customize this behavior
    }

    const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
    try {
      const parsedPhoneNumber = phoneUtil.parse(value, regionCode);
      const isValid = phoneUtil.isValidNumber(parsedPhoneNumber);
      return isValid;
    } catch (error) {
      return false;
    }
  }

  const validateEmail = (email: string | undefined): boolean => {
    if (!email) return true;

    const isValid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    return Boolean(isValid);
  };

  const validationSchema = Yup.object().shape({
    petName: Yup.string()
      .required(requiredFieldMessage)
      .max(30, "Jo me shume se 30 karaktere"),
    petBreed: Yup.string().required(requiredSelectMessage),
    petGender: Yup.string().required(requiredSelectMessage),
    petInfo: Yup.string().max(50, "Jo me shume se 50 karaktere"),
    // petMissingMessage: Yup.string().max(100, "Jo me shume se 100 karaktere"),
    ownerName: Yup.string().required(requiredFieldMessage),
    ownerCity: Yup.string(),
    ownerAddress: Yup.string().max(50, "Jo me shume se 50 karaktere"),
    ownerPhone: Yup.object()
      .required(requiredFieldMessage)
      .test(
        "phone-validation",
        "Phone invalid!",
        function ({ parsedPhone }: any) {
          if (!parsedPhone) return false;
          return validatePhone(parsedPhone, region);
        }
      ),
    ownerInstagram: Yup.string().max(30, "Jo me shume se 30 karaktere"),
    ownerWhatsapp: Yup.object().test(
      "wp-validation",
      "Phone invalid!",
      function (data: any) {
        if (!data?.value) return true;
        return validatePhone(data.parsedPhone, wpRegion);
      }
    ),
    ownerEmail: Yup.string().test(
      "email-validation",
      "Email invalid!",
      (email) => validateEmail(email)
    ),
    ownerFacebook: Yup.string().max(30, "Jo me shume se 30 karaktere"),
  });

  // Initial form values
  const initialValues = {
    petName: "",
    petBreed: "",
    petGender: "",
    petInfo: "",
    // petMissingMessage: "",
    ownerName: "",
    ownerCity: "",
    ownerAddress: "",
    ownerPhone: "",
    ownerInstagram: "",
    ownerWhatsapp: "",
    ownerEmail: "",
    ownerFacebook: "",
  };

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current?.handleSubmit();
    }
    setIsDialogOpen(false);
  };

  // Submit function
  const onSubmit = async (values: any /* , { resetForm }: any */) => {
    const { value, parsedPhone } = values.ownerWhatsapp;
    const { parsedPhone: phone } = values.ownerPhone;

    const activatePetRequest = {
      status: "Active",
      data: {
        name: values.petName,
        city: values.ownerCity,
        orderCode: "ORD123",
        contactUsIntead: false,
        missingMessage: "Ju lutem kontaktoni sa me shpejte nese e gjeni!",
        info: values.petInfo,
        breed: values.petBreed,
        gender: values.petGender,
        ownerInfo: {
          name: values.ownerName,
          contact: {
            phone,
            whatsapp: value ? parsedPhone : "",
            instagram: values.ownerInstagram,
            email: values.ownerEmail,
          },
          address: values.ownerAddress,
        },
        styles: {
          avatarBg: color?.name || "Sweet Morning",
        },
      },
    };

    await activatePet(externalId, activatePetRequest);
    // resetForm();
    router.replace(`/pet/${externalId}`);
  };

  const onChangeCustomHandler = (data: any, setFieldValue: any) => {
    setFieldValue(data.name, data.value);
    setAvatar(PetImages[data.value]);
  };

  const onWpPhoneChange = (data: any, setFieldValue: any) => {
    const { prefix, value } = data;
    const parsedPhone = prefix + value;
    setFieldValue(data.name, { value, parsedPhone });
  };

  return (
    <Container maxWidth="sm" sx={{ justifyContent: "center", marginBottom: 5 }}>
      {/* Avatar */}
      <Grid container justifyContent="center">
        <Grid item sx={{ marginTop: 5 }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Avatar
              alt="Profile Avatar"
              src={avatar}
              sx={{
                width: 180,
                height: 180,
                border: "3px solid whitesmoke",
                background: `linear-gradient(${color?.start}, ${color?.end})`,
                padding: 3,
              }}
            />

            {/* Edit icon */}
            {!data?.breed && (
              <IconButton
                onClick={handleEditClick}
                style={{
                  position: "absolute",
                  border: "2px solid white",
                  width: "32px",
                  height: "32px",
                  bottom: "4px",
                  right: "12px",
                  color: "white",
                  background: `linear-gradient(${color?.start}, ${color?.end})`,
                }}
              >
                <EditOutlinedIcon sx={{ width: "20px", height: "20px" }} />
              </IconButton>
            )}
          </div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
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
            setFieldValue,
          }) => {
            return (
              <Form
                noValidate
                style={{
                  width: "90%", // Fix IE 11 issue.
                  marginTop: 1,
                }}
              >
                {/* Pet */}
                <Typography
                  variant="h6"
                  sx={{
                    margin: "30px 5px 5px 5px",
                    fontWeight: 400,
                    color: "white",
                    fontFamily: "Cocon",
                  }}
                >
                  Të dhënat e qenit/maces:
                </Typography>
                <StyledInput
                  icon={"/ic_dog.png"}
                  placeholder={"Emri i qenit/maces"}
                  name="petName"
                  capitalize
                  onChange={handleChange}
                  value={values.petName}
                  error={touched.petName && errors.petName}
                />
                <Grid item container>
                  <Grid md={6} xs={12} sx={{ mt: -1 }}>
                    <StyledSelect
                      icon="/ic_gender.png"
                      label="Gjinia"
                      name="petGender"
                      onChange={handleChange}
                      value={values.petGender}
                      error={touched.petGender && errors.petGender}
                    >
                      <MenuItem value="Mashkull">Mashkull</MenuItem>
                      <MenuItem value="Femer">Femer</MenuItem>
                    </StyledSelect>
                  </Grid>
                  <Grid item md={6} xs={12} sx={{ mt: -1 }}>
                    <StyledSelect
                      icon="/ic_breed.png"
                      label="Rraca"
                      name="petBreed"
                      readOnly={!!data?.breed}
                      onChange={({ target }: any) =>
                        onChangeCustomHandler(
                          { name: "petBreed", value: target.value },
                          setFieldValue
                        )
                      }
                      value={data?.breed || values.petBreed}
                      error={touched.petBreed && errors.petBreed}
                    >
                      {Object.values(Breed).map((key: string, idx) => {
                        return (
                          <MenuItem
                            sx={{ marginLeft: -1 }}
                            value={key}
                            key={key}
                          >
                            <Grid>
                              {idx === 0 && (
                                <Typography
                                  variant="h6"
                                  sx={{
                                    margin: "30px 5px 5px 5px",
                                    fontWeight: 700,
                                  }}
                                >
                                  Qen 🐶
                                </Typography>
                              )}
                              {idx === 19 && (
                                <Typography
                                  variant="h6"
                                  sx={{
                                    margin: "30px 5px 5px 5px",
                                    fontWeight: 700,
                                  }}
                                >
                                  Mace 🐱
                                </Typography>
                              )}
                              <Grid container alignItems="center">
                                <Grid item sx={{ margin: 1 }}>
                                  <Image
                                    alt="menu item"
                                    src={BreedIcons[key]}
                                    width={40}
                                    height={40}
                                  />
                                </Grid>
                                <Grid item xs>
                                  {key}
                                </Grid>
                              </Grid>
                            </Grid>
                          </MenuItem>
                        );
                      })}
                    </StyledSelect>
                  </Grid>
                </Grid>
                <StyledInput
                  icon={"/ic_info.png"}
                  placeholder={"Info/Pershkrim"}
                  name="petInfo"
                  capitalize
                  onChange={handleChange}
                  value={values.petInfo}
                  error={touched.petInfo && errors.petInfo}
                />
                {/* <StyledInput
                icon={"/ic_info.png"}
                placeholder={"Mesazhi (nese humb)"}
                name="petMissingMessage"
                onChange={handleChange}
                value={values.petMissingMessage}
                error={touched.petMissingMessage && errors.petMissingMessage}
              /> */}

                {/* Owner */}
                <Typography
                  variant="h6"
                  sx={{
                    margin: "30px 5px 5px 5px",
                    fontWeight: 400,
                    color: "whitesmoke",
                    fontFamily: "Cocon",
                  }}
                >
                  Të dhënat personale:
                </Typography>
                <StyledInput
                  icon={"/ic_name.png"}
                  placeholder={"Emri"}
                  isOwner
                  capitalize
                  name="ownerName"
                  onChange={handleChange}
                  value={values.ownerName}
                  error={touched.ownerName && errors.ownerName}
                />
                <StyledSelect
                  icon="/ic_city.png"
                  label="Qyteti (opsional)"
                  name="ownerCity"
                  isOwner
                  optional
                  onChange={handleChange}
                  value={values.ownerCity}
                >
                  {Citites.map((city: string) => {
                    return (
                      <MenuItem sx={{ marginLeft: -1 }} value={city} key={city}>
                        {city}
                      </MenuItem>
                    );
                  })}
                </StyledSelect>
                <StyledInput
                  icon={"/ic_address.png"}
                  placeholder={"Adresa (opsional)"}
                  isOwner
                  capitalize
                  name="ownerAddress"
                  onChange={handleChange}
                  value={values.ownerAddress}
                />
                {/* <PhoneInput
                  country={"al"}
                  isOwner
                  value={values.ownerPhone}
                  error={touched.ownerPhone && errors.ownerPhone}
                  name="ownerPhone"
                  placeholder={"Tel"}
                  onChange={handleChange}
                  setRegion={setRegion}
                  setFieldValue={setFieldValue}
                /> */}
                <PhoneInputWithPrefix
                  country={"al"}
                  isOwner
                  error={touched.ownerPhone && errors.ownerPhone}
                  name="ownerPhone"
                  setRegion={setRegion}
                  clickPrefix
                  clickIcon
                  onChange={({ prefix, value }: any) =>
                    onWpPhoneChange(
                      {
                        name: "ownerPhone",
                        prefix,
                        value,
                      },
                      setFieldValue
                    )
                  }
                />
                <StyledInput
                  icon={"/ic_mail.png"}
                  placeholder={"Email (opsional)"}
                  isOwner
                  name="ownerEmail"
                  onChange={handleChange}
                  value={values.ownerEmail}
                  error={touched.ownerEmail && errors.ownerEmail}
                />
                <PhoneInputWithPrefix
                  country={"al"}
                  isOwner
                  icon={"/ic_whatsapp.png"}
                  error={touched.ownerWhatsapp && errors.ownerWhatsapp}
                  name="ownerWhatsapp"
                  label="Whatsapp"
                  clickPrefix
                  setRegion={setWpRegion}
                  onChange={({ prefix, value }: any) =>
                    onWpPhoneChange(
                      {
                        name: "ownerWhatsapp",
                        prefix,
                        value,
                      },
                      setFieldValue
                    )
                  }
                />
                {/* <div style={{ marginTop: "-10px" }}>
                  <Checkbox
                    checked={false}
                    onChange={() => {}}
                    color="primary"
                    sx={{ color: "whitesmoke" }}
                  />
                  <Typography variant="caption" color={"whitesmoke"}>
                    Perdor te njejtin numer?
                  </Typography>
                </div> */}
                {/* <StyledInput
                icon={"/ic_whatsapp.png"}
                placeholder={"Whatsapp (opsional)"}
                isOwner
                type="number"
                name="ownerWhatsapp"
                onChange={handleChange}
                value={values.ownerWhatsapp}
              /> */}
                <StyledInput
                  icon={"/ic_instagram.png"}
                  placeholder={"Instagram (opsional)"}
                  isOwner
                  name="ownerInstagram"
                  onChange={handleChange}
                  value={values.ownerInstagram}
                />
                <Button
                  fullWidth
                  sx={{
                    mt: 3,
                    borderRadius: "3rem",
                    textTransform: "none",
                    fontFamily: "Product Sans",
                    color: "white",
                    maxHeight: "50px",
                    fontSize: "1.1rem",
                    paddingRight: "1.5rem",
                    paddingLeft: "1.5rem",
                  }}
                  onClick={() => setIsDialogOpen(true)}
                  style={{
                    // background: "linear-gradient(to right, #FFDC26, #E0AF00)",
                    backgroundColor: "#00A6A3",
                  }}
                >
                  Perfundo
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Grid>

      {/* Colors menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {colors.map((color) => (
          <MenuItem
            sx={{ marginLeft: -1 }}
            value={color.name}
            key={color.name}
            onClick={() => handleEditClose(color)}
          >
            <Grid container sx={{}}>
              <Grid item sx={{ marginRight: 1 }}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: `linear-gradient(${color.start}, ${color.end})`,
                  }}
                />
              </Grid>
              <Grid item xs>
                {color.name}
              </Grid>
            </Grid>
          </MenuItem>
        ))}
      </Menu>
      <InfoDialog
        title={"Konfirmoni te dhenat?"}
        message={`Jeni te sigurt te vazhdoni?
                 Pas ketij hapi te dhenat nuk mund te ndryshohen nga ju por duhet te kontaktoni suportin: +355686284516`}
        isOpen={isDialogOpen}
        handleConfirm={handleSubmit}
        handleCancel={() => setIsDialogOpen(false)}
      />
    </Container>
  );
};

export default PetForm;
