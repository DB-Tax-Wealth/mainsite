import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CarouselImages } from './carousel-images/carousel-images';
import styles from './carousel.style.scss';
import { CarouselTeasers } from './carousel-teasers/carousel-teasers';

export class Carousel extends Component {
  static propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    slides: [],
  };

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.carouselInterval = null;

    this.updateActiveIndex = this.updateActiveIndex.bind(this);
    this.increaseActiveIndex = this.increaseActiveIndex.bind(this);
  }

  componentDidMount() {
    this.initializeCarousel();
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  initializeCarousel() {
    this.carouselInterval = setInterval(this.increaseActiveIndex, 7000);
  }

  increaseActiveIndex() {
    const { slides } = this.props;
    const { activeIndex } = this.state;

    if (activeIndex < slides.length - 1) {
      this.setState({ activeIndex: activeIndex + 1 });
    } else {
      this.setState({ activeIndex: 0 });
    }
  }

  updateActiveIndex(activeIndex) {
    clearInterval(this.carouselInterval);
    this.setState({ activeIndex });
    this.initializeCarousel();
  }

  render() {
    const { slides } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className={styles.root}>
        <CarouselImages slides={slides} activeIndex={activeIndex} />
        <CarouselTeasers slides={slides} activeIndex={activeIndex} onTeaserClick={this.updateActiveIndex} />
      </div>
    );
  }
}
