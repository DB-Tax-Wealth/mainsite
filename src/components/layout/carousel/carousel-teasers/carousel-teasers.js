import React, { Component } from 'react';
import { FloatSection } from 'components/layout/float-section/float-section';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { slice } from 'lodash';
import { Column } from 'components/layout/grid/column/column';
import { IconButton } from 'components/layout/icon-button/icon-button';
import PropTypes from 'prop-types';

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

    return orderedPreviews.map(preview => {
      const { buttonColor, children, iconName, title, key } = preview;
      const onClick = () => onTeaserClick(key);

      return (
        <Column widthMd={4} className="margin--xs--bottom margin--md--bottom--none" key={key}>
          <div className="display--flex">
            <IconButton iconName={iconName} onClick={onClick} color={buttonColor} />
            <div className="margin--left">
              <strong className="margin--bottom--half">{title}</strong>
              <div>{children}</div>
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
