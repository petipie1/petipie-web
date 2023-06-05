import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(theme => {
//   const buildBorder = (isDisabled, hasBorder, borderColor) => {
//     if (isDisabled === true && hasBorder) {
//       return '1px solid #c5c5c5';
//     }
//     return hasBorder
//       ? `1px solid ${theme.palette.colors[borderColor]}`
//       : 'none';
//   };

//   return {
//     root: ({ height, width, padding, border, borderColor, disabled }) => ({
//       height: `${height}px`,
//       width: `${width}px`,
//       padding,
//       border: buildBorder(disabled, border, borderColor),
//     }),
//   };
// });

const CircleButton = ({
  // height,
  // width,
  // padding,
  // border,
  // borderColor,
  disabled,
  // className,
  ...props
}) => {
  // const classes = useStyles({
  //   height,
  //   width,
  //   padding,
  //   disabled,
  //   border,
  //   borderColor,
  // });

  return (
    <IconButton
      disableTouchRipple
      disableRipple
      disabled={disabled}
      // className={`h-${height} w-${width} p-${padding} 
      // border-1 border-solid border-[#c5c5c5] ${className}`}
      {...props}
    />
  );
};

CircleButton.defaultProps = {
  height: 40,
  width: 40,
  padding: 0,
  border: true,
  borderColor: 'black',
};

CircleButton.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  padding: PropTypes.number,
  border: PropTypes.bool,
  borderColor: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
};

export default CircleButton;
