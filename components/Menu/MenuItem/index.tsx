import React, { useCallback } from "react";
// import { StyledText } from 'components/BaseComponents/StyledText';
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";
// import StepCount from 'components/StepCount/Loadable';
// import { glide } from 'react-tiger-transition/esm/react-tiger-transition';
// import CSSTransition from 'react-transition-group/CSSTransition';
// import ConfirmationDialog from 'components/ConfirmationDialog/Loadable';
import StepCount from "../../StepCount";
import Image from "next/image";
// import ConfirmationDialog from '../../ConfirmationDialog';

// glide({
//   name: 'exitAnim',
//   direction: 'left',
//   exit: {
//     opacity: 0,
//     scale: 0.5,
//   },
// });

const MenuItem = ({
  name,
  imageUrl,
  index,
  quantity,
  price,
  onCountChange,
  // animationDelay,
  // description,
  // promoId,
  // discount,
  // addedByPromo,
}: any) => {

  // const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  // const classes = useStyles();
  const stepOnChangeHandler = useCallback(
    (newValue: number) => {
      onCountChange(newValue);
      // setRowPrice(newValue * price);
    },
    [onCountChange],
  );

  // const [rowPrice, setRowPrice] = useState(quantity * price);

  // const handleOnRemoveItem = useCallback((shouldRemove: boolean) => {
  //   if (shouldRemove) onCountChange(0);
  // }, []);

  // const productImage = imageUrl ||;

  const memoImage = React.useMemo(
    () =>
      <Grid item container sx={{
        backgroundColor: "#fff", borderRadius: 1.5,
        marginRight: 1, width: "80px", height: "80px",
        p: 0.5
      }}
        alignItems={"center"} justifyContent="center"
      >
        <Image alt="" src={imageUrl || "/apple-touch-icon.png"}
          width={"100%"} height={"100%"}
          objectFit='contain'
        />
      </Grid>
    ,
    [imageUrl],
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
          fontSize: "19px"
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
    <Grid paddingTop={1}
      paddingBottom={1}
      container direction="row">
      <Grid item container xs={3}
        sx={{
          justifyContent: "center",
          alignContent: "center",
        }}>
        {memoImage}
      </Grid>
      <Grid item container xs={5}
        direction={"column"}
        sx={{
          justifyContent: "center",
          alignContent: "start",
        }}>
        <Typography sx={{
          lineHeight: "20px", paddingBottom: "3px",
          fontSize: "21px"
        }}>
          {name}
        </Typography>
        {itemDetails}
      </Grid>
      <Grid item container xs={4}
        sx={{
          justifyContent: "end",
          alignContent: "center",
          alignItems: "center",
        }}>
        <StepCount
          idx={index}
          value={quantity}
          onStepValueChange={stepOnChangeHandler}
          enableDelete
        />
      </Grid>
    </Grid >);

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
  imageUrl: ""
};

export default React.memo(
  MenuItem,
  (curr, next) => curr.index === next.index && curr.name === next.quantity
);
