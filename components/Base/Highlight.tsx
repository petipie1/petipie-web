import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const Highlight = styled(Typography)({
  color: '#5F5F5F',
});

export default function HighlightComponent(props: any) {
  return <Highlight {...props}>{props.children}</Highlight>;
}

