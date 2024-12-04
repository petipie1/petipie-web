// MissingPetCard.js
import React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import {
  Grid,
  Typography,
  // useMediaQuery,
  // useTheme,
  Tooltip,
} from "@mui/material";

const MissingPetCard = ({ image, title, phoneNumber, description }: any) => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    if (description) setOpen(true);
  };

  return (
    <Grid
      item
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: "0px 5px 6px 3px rgba(0, 0, 0, 0.1)",
        padding: 0.7,
        m: 1,
        width: "200px",
        height: "320px",
      }}
      onClick={handleTooltipOpen}
    >
      <Grid
        item
        container
        sx={{
          alignContent: "center",
          justifyContent: "center",
          height: "60%",
          overflow: "hidden", // Add this to ensure the image is within rounded corners
          borderRadius: 2, // Add this to set rounded corners
        }}
      >
        <img
          src={image}
          alt="Large"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover", // or 'contain' based on your preference
            borderRadius: "inherit",
          }}
        />
      </Grid>
      <Grid
        container
        display="flex"
        mt={2}
        justifyContent="space-between"
        alignContent={"center"}
        sx={{ alignItems: "center" }}
      >
        <Typography
          fontFamily={"Product Sans"}
          fontWeight={700}
          fontSize={15}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
        >
          {title}
        </Typography>
        <a href={`tel:${phoneNumber}`}>
          <Typography
            fontSize={15}
            fontFamily={"Product Sans"}
            fontWeight={700}
          >
            {phoneNumber}
          </Typography>
        </a>
      </Grid>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={
            <React.Fragment>
              <Typography color="inherit" variant="h6">
                {title}
              </Typography>
              {description}
              {/* <em style={{ fontSize: "0.9rem" }}>{description}</em> */}
            </React.Fragment>
          }
          sx={{ marginBottom: -3 }}
        >
          <Typography
            fontFamily={"Product Sans"}
            fontSize={12}
            mt={1}
            color="textSecondary"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
          >
            {description}
          </Typography>
        </Tooltip>
      </ClickAwayListener>
    </Grid>
  );
};

export default MissingPetCard;
