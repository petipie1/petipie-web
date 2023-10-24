import React, { useRef, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  Button,
  MenuItem,
  Typography,
  Grid,
  Avatar,
  Menu,
  Divider,
  Checkbox,
  Hidden,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Image from "next/image";
import libphonenumber from "google-libphonenumber";
import StyledInput from "../PetForm/StyledInput/intex";
import StyledSelect from "../PetForm/StyledSelect";
import {
  Breed,
  BreedIcons,
  Citites,
  PetImages,
  colors,
} from "common/constants";
import InfoDialog from "components/InfoDialog";
import { createOrder } from "services/apiClient";

import PhoneInputWithPrefix from "../PetForm/PhoneInputWithPrefix";
import OrderConfirmationModal from "components/OrderConfirmationModal";
import LoadingIndicator from "components/LoadingIndicator";

const requiredFieldMessage = "Ju lutem plotesoni fushen!";
const requiredSelectMessage = "Ju lutem zgjidhni fushen!";

const OrderForm = ({ data }: any) => {
  const [region, setRegion] = useState("");
  const [wpRegion, setWpRegion] = useState("");
  const [checked, setChecked] = useState(false);

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
  const [isLoading, setIsLoading] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);

  const formRef: React.Ref<any> = useRef();

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

    orderName: Yup.string()
      .required(requiredFieldMessage)
      .max(30, "Jo me shume se 30 karaktere"),

    orderPhone: Yup.object()
      .required(requiredFieldMessage)
      .test(
        "phone-validation",
        "Phone invalid!",
        function ({ parsedPhone }: any) {
          if (!parsedPhone) return false;
          return validatePhone(parsedPhone, region);
        }
      ),

    orderAddress: Yup.string()
      .required(requiredFieldMessage)
      .max(100, "Jo me shume se 100 karaktere"),
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

    // order info
    orderName: "",
    orderPhone: "",
    orderAddress: "",
  };

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current?.handleSubmit();
    }
    setIsDialogOpen(false);
  };

  const handleUseSameData = (checked: boolean, values: any, setValues: any) => {
    if (checked) {
      setValues({
        ...values,
        orderName: values.ownerName,
        orderPhone: values.ownerPhone,
        orderAddress: values.ownerAddress,
      });
    } else {
      setValues({ ...values, orderName: "", orderAddress: "", orderPhone: "" });
    }
    setChecked(checked);
  };

  // Submit function
  const onSubmit = async (values: any, { setValues }: any) => {
    setIsLoading(true);

    const { value, parsedPhone } = values.ownerWhatsapp;
    const { parsedPhone: phone } = values.ownerPhone;

    const orderRequest = {
      status: "New",
      name: values.orderName,
      phone: values.orderPhone?.parsedPhone,
      address: values.orderAddress,
      items: {
        name: values.petName,
        city: values.ownerCity,
        orderCode: "111",
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

    try {
      await createOrder(orderRequest);

      setConfirmDialogOpen(true);
      setValues(initialValues);
      setChecked(false);
    } catch (error) {
      setErrorDialogOpen(true);
    }

    setIsLoading(false);
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
    <>
      <LoadingIndicator isLoading={isLoading} title="Ju lutem prisni..." />
      <Grid
        id={"order-form"}
        container
        sx={{
          justifyContent: "center",
          marginBottom: 5,
          backgroundColor: "#F5F5F5",
        }}
      >
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
                  border: "5px solid white",
                  background: `linear-gradient(${color?.start}, ${color?.end})`,
                  boxShadow: "0px 5px 6px 3px rgba(0, 0, 0, 0.1)",
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
                    //   background: "white",
                    background: `linear-gradient(${color?.start}, ${color?.end})`,
                  }}
                >
                  <EditOutlinedIcon sx={{ width: "20px", height: "20px" }} />
                </IconButton>
              )}
            </div>
          </Grid>
        </Grid>
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
            setFieldTouched,
            // isSubmitting,
            setFieldValue,
            setValues,
          }) => {
            //   console.log("values: ", values);
            return (
              <Grid item container justifyContent="center" paddingBottom={10}>
                <Grid md={5.5} container justifyContent="center">
                  <Form
                    noValidate
                    style={{
                      width: "90%", // Fix IE 11 issue.
                      marginTop: 1,
                    }}
                  >
                    {/* Pet */}
                    <Typography
                      sx={{
                        margin: "30px 5px 5px 5px",
                        fontSize: "1rem",
                        fontFamily: "Cocon",
                      }}
                    >
                      1. Të dhënat e qenit/maces:
                    </Typography>
                    <StyledInput
                      icon={"/ic_dog.png"}
                      placeholder={"Emri i qenit/maces"}
                      name="petName"
                      capitalize
                      onChange={handleChange}
                      onFocus={() => setFieldTouched("petName")}
                      value={values.petName}
                      error={touched.petName && errors.petName}
                    />
                    <Grid item container>
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
                          onFocus={() => setFieldTouched("petBreed")}
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
                      <Grid item md={6} xs={12} sx={{ mt: -1 }}>
                        <StyledSelect
                          icon="/ic_gender.png"
                          label="Gjinia"
                          name="petGender"
                          onChange={handleChange}
                          onFocus={() => setFieldTouched("petGender")}
                          value={values.petGender}
                          error={touched.petGender && errors.petGender}
                        >
                          <MenuItem value="Mashkull">Mashkull</MenuItem>
                          <MenuItem value="Femer">Femer</MenuItem>
                        </StyledSelect>
                      </Grid>
                    </Grid>
                    <Grid sx={{ mt: -1 }}>
                      <StyledInput
                        icon={"/ic_info.png"}
                        placeholder={"Info/Pershkrim"}
                        name="petInfo"
                        capitalize
                        onChange={handleChange}
                        onFocus={() => setFieldTouched("petInfo")}
                        value={values.petInfo}
                        error={touched.petInfo && errors.petInfo}
                        // customStyles={{ minHeight: "80px" }}
                      />
                    </Grid>

                    {/* Owner */}
                    <Typography
                      sx={{
                        margin: "30px 5px 5px 5px",
                        fontFamily: "Cocon",
                        fontSize: "1rem",
                      }}
                    >
                      2.Të dhënat personale:
                    </Typography>

                    <StyledInput
                      icon={"/ic_name.png"}
                      placeholder={"Emri"}
                      isOwner
                      name="ownerName"
                      onChange={handleChange}
                      onFocus={() => setFieldTouched("ownerName")}
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
                          <MenuItem
                            sx={{ marginLeft: -1 }}
                            value={city}
                            key={city}
                          >
                            {city}
                          </MenuItem>
                        );
                      })}
                    </StyledSelect>
                    <StyledInput
                      icon={"/ic_address.png"}
                      placeholder={"Adresa (opsional)"}
                      isOwner
                      // capitalize
                      // customStyles={{ minHeight: "80px" }}
                      name="ownerAddress"
                      onChange={handleChange}
                      value={values.ownerAddress}
                    />
                    <PhoneInputWithPrefix
                      country={"al"}
                      isOwner
                      error={touched.ownerPhone && errors.ownerPhone}
                      onFocus={() => setFieldTouched("ownerPhone")}
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
                      onFocus={() => setFieldTouched("ownerEmail")}
                      value={values.ownerEmail}
                      error={touched.ownerEmail && errors.ownerEmail}
                    />
                    <PhoneInputWithPrefix
                      country={"al"}
                      isOwner
                      icon={"/ic_whatsapp.png"}
                      onFocus={() => setFieldTouched("ownerWhatsapp")}
                      error={touched.ownerWhatsapp && errors.ownerWhatsapp}
                      name="ownerWhatsapp"
                      placeholder="Whatsapp"
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
                  </Form>
                </Grid>
                <Hidden mdDown>
                  <Divider
                    orientation="vertical"
                    sx={{
                      width: "3px",
                      height: "100%",
                      border: "transparent",
                      mt: 5,
                      marginBottom: 5,
                      backgroundColor: "white",
                    }}
                  />
                </Hidden>

                <Grid md={5.5} container justifyContent="center">
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
                        fontFamily: "Cocon",
                      }}
                    >
                      Addresa (ku dergohet porosia):
                    </Typography>
                    <Grid
                      item
                      container
                      sx={{
                        justifyContent: "end",
                        position: "relative",
                        top: 28,
                        right: 20,
                        zIndex: 1,
                      }}
                    >
                      <Image
                        alt="menu item"
                        src={"/dog_2.png"}
                        width={"200px"}
                        height={"140px"}
                      />
                    </Grid>
                    <StyledInput
                      placeholder={"Emri"}
                      name="orderName"
                      // capitalize
                      onChange={handleChange}
                      onFocus={() => setFieldTouched("orderName")}
                      value={values.orderName}
                      error={touched.orderName && errors.orderName}
                    />
                    <PhoneInputWithPrefix
                      country={"al"}
                      placeholder="Tel"
                      error={touched.orderPhone && errors.orderPhone}
                      onFocus={() => setFieldTouched("orderPhone")}
                      name="orderPhone"
                      initialPhone={checked ? values.ownerPhone?.value : ""}
                      setRegion={setRegion}
                      customStyles={{ iconBg: "white" }}
                      clickPrefix
                      clickIcon
                      onChange={({ prefix, value }: any) =>
                        onWpPhoneChange(
                          {
                            name: "orderPhone",
                            prefix,
                            value,
                          },
                          setFieldValue
                        )
                      }
                    />
                    <StyledInput
                      placeholder={"Adresa"}
                      // capitalize
                      multiline
                      name="orderAddress"
                      onFocus={() => setFieldTouched("orderAddress")}
                      onChange={handleChange}
                      value={values.orderAddress}
                      error={touched.orderAddress && errors.orderAddress}
                      customStyles={{
                        boxShadow: "0px 5px 6px 3px rgba(0, 0, 0, 0.1)",
                      }}
                    />

                    {/* <StyledInput
                icon={"/ic_info.png"}
                placeholder={"Mesazhi (nese humb)"}
                name="petMissingMessage"
                onChange={handleChange}
                value={values.petMissingMessage}
                error={touched.petMissingMessage && errors.petMissingMessage}
              /> */}

                    <Grid item container sx={{ alignItems: "center" }}>
                      <Checkbox
                        checked={checked}
                        onChange={({ target }: any) =>
                          handleUseSameData(target.checked, values, setValues)
                        }
                        color="primary"
                      />
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: "Product Sans" }}
                      >
                        Perdor te njejtat te dhena per dergesen porosise?
                        {/* <span style={{ color: "grey", fontSize: "0.8rem" }}>
                        {" "}
                        (Te dhenat do te kopjohen nga )
                      </span> */}
                      </Typography>
                    </Grid>
                    {/* <StyledInput
                icon={"/ic_whatsapp.png"}
                placeholder={"Whatsapp (opsional)"}
                isOwner
                type="number"
                name="ownerWhatsapp"
                onChange={handleChange}
                value={values.ownerWhatsapp}
              /> */}
                    {/* <Image
                    alt="menu item"
                    src={"/paws.png"}
                    width={"100px"}
                    height={"170px"}
                  /> */}
                    {/* <Grid item container sx={{ mt: 5 }}>
                    <Image
                      alt="menu item"
                      src={"/paws.png"}
                      width={"100px"}
                      height={"220px"}
                    />
                  </Grid> */}
                    <Grid
                      item
                      container
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      {/* <Typography
                      sx={{
                        fontFamily: "Product sans",
                        fontSize: "1rem",
                        mt: "2rem",
                      }}
                    >
                      Ndihmoni miqte e vegjel te gjejen shtepine e tyre ne rast
                      se humbin. Petipie eshte platforma me e re qe iu vjen ne
                      ndihme kafsheve shtepiake te cilat humbasin çdo dite.
                    </Typography>
                    */}
                      <Grid
                        item
                        container
                        sx={{
                          justifyContent: "end",
                          position: "relative",
                          top: 60,
                          right: 30,
                          mt: -5,
                        }}
                      >
                        <Image
                          alt="menu item"
                          src={"/dog_1.png"}
                          width={"180px"}
                          height={"180px"}
                        />
                      </Grid>

                      <Button
                        fullWidth
                        sx={{
                          borderRadius: "3rem",
                          textTransform: "none",
                          fontFamily: "Product Sans",
                          color: "white",
                          maxHeight: "50px",
                          fontSize: "1.5rem",
                          paddingRight: "1.5rem",
                          paddingLeft: "1.5rem",
                        }}
                        onClick={() => setIsDialogOpen(true)}
                        style={{
                          background:
                            "linear-gradient(to right, #FFDC26, #E0AF00)",
                        }}
                      >
                        Porosit
                      </Button>
                      <Typography
                        sx={{
                          fontFamily: "Product sans",
                          fontSize: "1rem",
                          mt: "2rem",
                        }}
                      >
                        Ne momentin qe ju do te merrni varesen, ajo eshte e
                        aktivizuar dhe nuk ka nevoje per konfigurime shtese.
                      </Typography>
                    </Grid>
                  </Form>
                </Grid>
              </Grid>
            );
          }}
        </Formik>

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
        <OrderConfirmationModal
          success
          open={confirmDialogOpen}
          onClose={() => setConfirmDialogOpen(false)}
        />
        <OrderConfirmationModal
          open={errorDialogOpen}
          onClose={() => setErrorDialogOpen(false)}
        />
      </Grid>
    </>
  );
};

export default OrderForm;
