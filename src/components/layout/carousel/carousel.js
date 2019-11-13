import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { slice } from 'lodash';
import { CarouselImages } from './carousel-images/carousel-images';
import styles from './carousel.style.scss';
import { FloatSection } from '../float-section/float-section';
import { Grid } from '../grid/grid';
import { Row } from '../grid/row/row';
import { Column } from '../grid/column/column';
import { IconButton } from '../icon-button/icon-button';

export class Carousel extends Component {
  static propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    slides: []
  };

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };

    this.updateActiveIndex = this.updateActiveIndex.bind(this);
  }

  getCarouselPreviews() {
    const { slides } = this.props;
    const { activeIndex } = this.state;

    const previews = slides.map((slide, index) => ({ ...slide, key: index }));
    const front = slice(previews, 0, activeIndex);
    const back = slice(previews, activeIndex);

    const orderedPreviews = [...back, ...front].filter(({ key }) => key !== activeIndex);

    return orderedPreviews.map(preview => {
      const { buttonColor, children, iconName, title, key } = preview;
      const onClick = () => this.updateActiveIndex(key);

      return (
        <Column widthMd={4} className="margin--xs--bottom margin--md--bottom--none" key={key}>
          <div className="display--flex">
            <IconButton iconName={iconName} onClick={onClick} color={buttonColor} />
            <div className="margin--left">
              <strong className="margin--bottom--half">{title}</strong>
              {children}
            </div>
          </div>
        </Column>
      );
    });
  }

  updateActiveIndex(activeIndex) {
    this.setState({ activeIndex });
  }

  render() {
    const { slides } = this.props;
    const { activeIndex } = this.state;

    const previews = this.getCarouselPreviews();

    return (
      <div className={styles.root}>
        <CarouselImages slides={slides} activeIndex={activeIndex} />
        <FloatSection spacerHeight="4rem" spacerColor="primary-light">
          <Grid className="padding--horizontal--none">
            <Row>{previews}</Row>
          </Grid>
        </FloatSection>
      </div>
    );
  }
}
