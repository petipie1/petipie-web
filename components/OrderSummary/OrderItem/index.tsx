import React, { useCallback } from "react";
// import { StyledText } from 'components/BaseComponents/StyledText';
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";
// import StepCount from 'components/StepCount/Loadable';
// import { glide } from 'react-tiger-transition/esm/react-tiger-transition';
// import CSSTransition from 'react-transition-group/CSSTransition';
// import ConfirmationDialog from 'components/ConfirmationDialog/Loadable';
import StepCount from "../../StepCount";
// import ConfirmationDialog from '../../ConfirmationDialog';

// glide({
//   name: 'exitAnim',
//   direction: 'left',
//   exit: {
//     opacity: 0,
//     scale: 0.5,
//   },
// });

const OrderItem = ({
  name,
  imageUrl,
  index,
  quantity,
  price,
  onCountChange,
  // discount,
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

  const memoImage = React.useMemo(
    () =>
      <Grid item container sx={{
        backgroundColor: "#fff", borderRadius: 1.5,
        marginRight: 1, width: "70px", height: "70px"
      }}
        alignItems={"center"} justifyContent="center"
      >
        <img alt="" src={imageUrl} height={18} width={18} style={{ padding: 1, margin: 1 }}
        />
      </Grid>
    ,
    [imageUrl],
  );

  const itemDetails = React.useMemo(() => {
    const renderItemDetails = (caption: string) => (
      <Typography
        sx={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
          color: "black",
          lineHeight: "16px",
          fontWeight: 600,
          fontSize: "18px"
        }}
      >
        {caption} lek
      </Typography>
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
    <Grid padding={1} container direction="row">
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
        <Typography color="#515075" sx={{
          lineHeight: "20px", paddingBottom: "3px",
          fontSize: "20px"
        }}>
          {name}
        </Typography>
        {itemDetails}
      </Grid>
      <Grid item container xs={4}
        sx={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}>
        <StepCount
          idx={index}
          value={quantity}
          onStepValueChange={stepOnChangeHandler}
          enableDelete
        />
      </Grid>
    </Grid>);

  return (
    <>
      {content}
    </>
  );
};

OrderItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.any,
  onCountChange: PropTypes.func,
};

OrderItem.defaultProps = {
  animationDelay: 300,
  description: "",
  quantity: 0,
  imageUrl: "/coke.png"
};

export default React.memo(
  OrderItem,
  (curr, next) => curr.index === next.index && curr.quantity === next.quantity
);
