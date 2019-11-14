import React, { Component } from 'react';
import { Hero } from 'components/layout/hero/hero';
import PropTypes from 'prop-types';

export class CarouselImages extends Component {
  static propTypes = {
    activeIndex: PropTypes.number,
    slides: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    activeIndex: 0,
    slides: []
  };

  getSlides() {
    const { activeIndex, slides } = this.props;

    return slides.map((props, index) => {
      const active = index === activeIndex;
      const style = { display: active ? 'block' : 'none' };

      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Hero {...props} buttonColor="primary" key={index} style={style} />;
    });
  }

  render() {
    const slides = this.getSlides();

    return <>{slides}</>;
  }
}
