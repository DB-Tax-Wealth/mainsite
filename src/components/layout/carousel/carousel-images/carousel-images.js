import React, { Component } from 'react';
import { Hero } from 'components/layout/hero/hero';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './carousel-images.style.scss';

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
      const className = classNames(styles.slide, { [styles.active]: active });

      return (
        // eslint-disable-next-line react/jsx-key
        <div className={className}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Hero {...props} animated={active} />
        </div>
      );
    });
  }

  render() {
    const slides = this.getSlides();

    return (
      <div className={styles.root}>
        {slides}
        <div className={styles.placeholder}>
          <Hero image="placeholder" />
        </div>
      </div>
    );
  }
}
