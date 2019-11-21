import React, { Component } from 'react';
import { FloatSection } from 'components/layout/float-section/float-section';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { slice } from 'lodash';
import { Column } from 'components/layout/grid/column/column';
import { IconButton } from 'components/layout/icon-button/icon-button';
import PropTypes from 'prop-types';

const BUTTON_COLORS = ['primary', 'secondary', 'tertiary'];

export class CarouselTeasers extends Component {
  static propTypes = {
    activeIndex: PropTypes.number,
    onTeaserClick: PropTypes.func,
    slides: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    activeIndex: 0,
    onTeaserClick: () => {},
    slides: []
  };

  getCarouselTeasers() {
    const { slides, activeIndex, onTeaserClick } = this.props;

    const previews = slides.map((slide, index) => ({ ...slide, key: index }));
    const front = slice(previews, 0, activeIndex);
    const back = slice(previews, activeIndex);

    const orderedPreviews = [...back, ...front].filter(({ key }) => key !== activeIndex);

    return orderedPreviews.map((preview, index) => {
      const { iconName, key, teaser, title } = preview;

      const onClick = () => onTeaserClick(key);
      const animationDelay = index * 0.2 + 1;

      return (
        <Column widthMd={4} className="margin--xs--bottom margin--md--bottom--none" key={index}>
          <div className="display--flex">
            <IconButton
              className="animated fadeIn"
              color={BUTTON_COLORS[index]}
              iconName={iconName}
              onClick={onClick}
              style={{ animationDelay: `${animationDelay}s` }}
            />
            <div className="margin--left animated fadeIn" style={{ animationDelay: `${animationDelay + 0.1}s` }}>
              <strong className="margin--bottom--half">{title}</strong>
              <div>{teaser}</div>
            </div>
          </div>
        </Column>
      );
    });
  }

  render() {
    const teasers = this.getCarouselTeasers();

    return (
      <FloatSection spacerHeight="4rem" spacerColor="primary-light">
        <Grid className="padding--horizontal--none">
          <Row>{teasers}</Row>
        </Grid>
      </FloatSection>
    );
  }
}
