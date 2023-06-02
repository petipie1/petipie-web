import {
  variants,
  weight as fontWeights,
} from './constants';
import * as PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { Typography } from '@mui/material';
import { isString } from 'lodash';

const buildColor = (color: string) => {
  if (color !== 'default') {
    return color;
  }
  return 'black';
};

export const StyledText = ({
  color,
  children,
  variant,
  weight,
  display,
  resizeSymbols,
  ...newProps
}: any) => {

  const output = useMemo(
    () =>
      React.Children.map(children, child => {
        if (isString(child)) {
          const newChild = child.replace(
            /®/g,
            `<span style="font-size: x-small; vertical-align: super">®</span>`,
          );
          return newChild;
        }
        return child;
      }),
    [children],
  );
  return resizeSymbols ? (
    <Typography
      sx={{
        color: buildColor(color),
        '&:disabled': {
          color: '#9f9f9f',
        },
        fontWeight: weight,
        display: display

      }}
      variant={variant}
      component="span"
      {...newProps}
      dangerouslySetInnerHTML={{ __html: output }}
    />
  ) : (
    <Typography
      sx={{
        color: buildColor(color),
        '&:disabled': {
          color: '#9f9f9f',
        },
        fontWeight: weight,
        display: display

      }}
      variant={variant}
      component="span"
      {...newProps}
    >
      {children}
    </Typography>
  );
};

StyledText.propTypes = {
  resizeSymbols: PropTypes.bool,
  color: PropTypes.string,
  variant: PropTypes.oneOf(variants),
  weight: PropTypes.oneOf(fontWeights),
  display: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

StyledText.defaultProps = {
  color: 'default',
  variant: 'body1',
  weight: 400,
  resizeSymbols: false,
};
