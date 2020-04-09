import React from 'react';
import { Hero } from 'components/layout/hero/hero';
import PropTypes from 'prop-types';

export const CarouselImages = (props) => {
  const { activeIndex, slides } = props;

  return slides.map((slideProps, index) => {
    const active = index === activeIndex;
    const style = { display: active ? 'block' : 'none' };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Hero {...slideProps} buttonColor="primary" key={index} style={style} />;
  });
};

CarouselImages.propTypes = {
  activeIndex: PropTypes.number,
  slides: PropTypes.arrayOf(PropTypes.object),
};

CarouselImages.defaultProps = {
  activeIndex: 0,
  slides: [],
};
