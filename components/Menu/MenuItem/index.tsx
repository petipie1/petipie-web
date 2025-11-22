import React, { useCallback } from "react";
// import { StyledText } from 'components/BaseComponents/StyledText';
import PropTypes from "prop-types";
import { Grid, Typography, styled } from "@mui/material";
// import StepCount from 'components/StepCount/Loadable';
// import { glide } from 'react-tiger-transition/esm/react-tiger-transition';
// import CSSTransition from 'react-transition-group/CSSTransition';
// import ConfirmationDialog from 'components/ConfirmationDialog/Loadable';
import StepCount from "../../StepCount";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
// import ConfirmationDialog from '../../ConfirmationDialog';

// glide({
//   name: 'exitAnim',
//   direction: 'left',
//   exit: {
//     opacity: 0,
//     scale: 0.5,
//   },
// });

const StyledDescription = styled(Typography)({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "300",
  marginBottom: "5px",
  fontSize: "0.85rem",
  color: "#545454",
  opacity: 0.6,
  maxLines: 1,
  textOverflow: "ellipsis",
  "-webkit-line-clamp": 1,
  "-webkit-box-orient": "horizontal",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  wordBreak: "break-word",
  lineHeight: "16px",
});

const MenuItem = ({
  name,
  description,
  imageUrl,
  index,
  quantity,
  price,
  onCountChange,
  orderingEnabled,
  readonly,
}: // animationDelay,
// promoId,
// discount,
// addedByPromo,
any) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  // const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  // const classes = useStyles();
  const stepOnChangeHandler = useCallback(
    (newValue: number) => {
      onCountChange(newValue);
      // setRowPrice(newValue * price);
    },
    [onCountChange]
  );

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    if (description) setOpen(true);
  };

  // const [rowPrice, setRowPrice] = useState(quantity * price);

  // const handleOnRemoveItem = useCallback((shouldRemove: boolean) => {
  //   if (shouldRemove) onCountChange(0);
  // }, []);

  // const productImage = imageUrl ||;

  const memoImage = React.useMemo(
    () => (
      <Grid
        item
        container
        sx={{
          backgroundColor: "#fff",
          borderRadius: 1.5,
          marginRight: 1,
          width: "80px",
          height: "80px",
        }}
        alignItems={"center"}
        justifyContent="center"
      >
        <Image
          alt=""
          src={imageUrl || "/placeholder.png"}
          width={100}
          height={100}
          objectFit="contain"
          style={{ borderRadius: "8%" }}
        />
      </Grid>
    ),
    [imageUrl]
  );

  // const isPromotionItem = false; // !!promoId || !!addedByPromo || promoComponents?.length >= 1;

  const itemDetails = React.useMemo(() => {
    const renderItemDetails = (caption: string) => (
      // <Grid item>
      //   <>
      <Typography
        sx={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
          color: "black",
          lineHeight: "16px",
          fontWeight: 600,
          fontSize: "19px",
        }}
      >
        {caption} lek
      </Typography>
      //   </>
      // </Grid>
    );

    return <>{renderItemDetails(price)}</>;
  }, [price]);

  // const discountedTotal = () => (
  //   <>
  //     <Highlight variant="h4">
  //       {price === 0 ? 'FREE' : `Lek ${price.toFixed(2)}`}
  //     </Highlight>
  //     <Typography variant="h3" className={styles.originalPrice}>
  //       {`Lek ${(price + discount).toFixed(2)}`}
  //     </Typography>
  //   </>
  // );

  const content = (
    <Grid paddingTop={1} paddingBottom={1} container direction="row">
      <Grid
        item
        container
        xs={3}
        sx={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {memoImage}
      </Grid>
      <Grid
        item
        container
        xs={5}
        direction={"column"}
        sx={{
          justifyContent: "center",
          alignContent: "start",
        }}
      >
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
                  {t(`${name}`)}
                </Typography>
                <em style={{ fontSize: "0.9rem" }}>{t(`${description}`)}</em>
              </React.Fragment>
            }
            sx={{ marginBottom: -3 }}
          >
            <Typography
              sx={{
                lineHeight: "20px",
                paddingBottom: "3px",
                fontSize: "20px",
                maxLines: 2,
                textOverflow: "ellipsis",
                "-webkit-line-clamp": 2,
                "-webkit-box-orient": "vertical",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
              onClick={handleTooltipOpen}
            >
              {t(`${name}`)}
            </Typography>
          </Tooltip>
        </ClickAwayListener>
        {description && (
          <StyledDescription>{t(`${description}`)}</StyledDescription>
        )}
        {itemDetails}
      </Grid>
      {orderingEnabled && !readonly && (
        <Grid
          item
          container
          xs={4}
          sx={{
            justifyContent: "end",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <StepCount
            idx={index}
            value={quantity}
            onStepValueChange={stepOnChangeHandler}
            enableDelete
          />
        </Grid>
      )}
    </Grid>
  );

  return (
    <>
      {content}
      {/* {productCard} */}
      {/* {content} */}
    </>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.any,
  onCountChange: PropTypes.func,
  animationDelay: PropTypes.number,
  // promoId: PropTypes.number,
  discount: PropTypes.number,
  // addedByPromo: PropTypes.bool,
};

MenuItem.defaultProps = {
  animationDelay: 300,
  description: "",
  quantity: 0,
  imageUrl: "",
  readonly: false,
};

export default React.memo(
  MenuItem,
  (curr, next) => curr.index === next.index && curr.name === next.quantity
);
