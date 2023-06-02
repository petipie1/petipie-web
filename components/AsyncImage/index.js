import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import OctoPlaceholder from 'images/icon-512x512.png';
import InfinityLoader from 'images/Infinity_loader.svg';

// const calculate = ({ responsive, value, responsiveValue }) => {
//   if (value !== null) return responsive ? responsiveValue : `${value}px`;
//   return responsive ? '100%' : null;
// };

/*const useStyles = makeStyles(() => ({
  image: props => ({
    height: calculate({
      responsive: props.responsive,
      value: props.height,
      responsiveValue: 'fit-content',
    }),
    width: calculate({
      responsive: props.responsive,
      value: props.width,
      responsiveValue: '100%',
    }),
    maxWidth: props.responsive ? `${props.width}px` : null,
    maxHeight: props.responsive ? `${props.height}px` : null,
    objectFit: 'contain',
    mixBlendMode: 'multiply',
    filter: props.disabled ? 'grayscale(100%)' : undefined,
  }),
}));*/

const AsyncImage = ({
  src,
  style,
  height,
  alt,
  width,
  // responsive,
  overflow,
  // disabled,
}) => {
  // const classes = useStyles({ height, width, responsive, disabled, style });

  const Image = () => (
    <Image
      style={style}
      // className={classes.image}
      height={height}
      width={width}
      src={src}
      alt={alt}
      onError={e => {
        // eslint-disable-next-line no-param-reassign
        e.target.onerror = null;
        // eslint-disable-next-line no-param-reassign
        e.target.src = OctoPlaceholder; // replacement image imported above
      }}
    />
  );

  return (
    <LazyLoadImage
      style={{
        display: 'inline',
      }}
      height={height}
      resize
      offset={100}
      once
      debounce={300}
      scroll
      placeholder={
        <Image height={height} width={width} src={InfinityLoader} alt="loader" />
      }
      overflow={overflow}
    >
      <Image alt={'picture'} />
    </LazyLoadImage>
  );
};

AsyncImage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
  style: PropTypes.object,
  alt: PropTypes.string,
  responsive: PropTypes.bool,
  overflow: PropTypes.bool,
  disabled: PropTypes.bool,
};

AsyncImage.defaultProps = {
  width: null,
  height: null,
  alt: 'Image',
  responsive: false,
  overflow: false,
  disabled: false,
};

export default memo(
  AsyncImage,
  (prev, next) =>
    prev.src === next.src &&
    prev.width === next.width &&
    prev.height === next.height &&
    prev.disabled === next.disabled,
);
