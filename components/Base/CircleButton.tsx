import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';

const buildBorder = (isDisabled: boolean | undefined, hasBorder: boolean | undefined, borderColor: string | undefined) => {
  if (isDisabled === true && hasBorder) {
    return '1px solid #c5c5c5';
  }
  return hasBorder
    ? `1px solid ${borderColor}`
    : 'none';
};

interface CircleButtonProps {
  height?: number;
  width?: number;
  padding?: number;
  border?: boolean | undefined;
  borderColor?: string;
  disabled?: boolean;
  className?: string | undefined;
  children: any;
  sx: any;
  onClick: () => void;
  onKeyDown?: () => void;
}

const CircleButton = ({
  height,
  width,
  padding,
  border,
  borderColor,
  disabled,
  className,
  children,
  sx,
  ...props
}: CircleButtonProps) => {

  return (
    <IconButton
      disableTouchRipple
      disableRipple
      disabled={disabled}
      className={className}
      // sx={{
      //   height: height,
      //   width: width,
      //   padding: padding,
      //   // border: buildBorder(disabled, border, borderColor),
      //   ...sx
      // }}
      {...props}
    >
      {children}
    </IconButton>
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
  height: PropTypes.number,
  width: PropTypes.number,
  padding: PropTypes.number,
  border: PropTypes.bool,
  borderColor: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  sx: PropTypes.object
};

export default CircleButton;
