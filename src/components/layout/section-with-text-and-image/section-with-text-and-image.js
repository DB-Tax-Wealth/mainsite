import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import { HeadingWithSubtitle } from 'components/layout/heading-with-subtitle/heading-with-subtitle';
import PropTypes from 'prop-types';
import React from 'react';
import { Section } from 'components/layout/section/section';
import styles from './section-with-text-and-image.style.scss';

export const SectionWithTextAndImage = props => {
  const { children, image, subtitle, subtitleColor, title } = props;
  const imageExists = Boolean(image);

  return (
    <Section className={styles.root} color="primary">
      <div className={styles.content}>
        <div className={styles.primary}>
          <HeadingWithSubtitle subtitle={subtitle} subtitleColor={subtitleColor}>
            {title}
          </HeadingWithSubtitle>
          {children}
        </div>
        {imageExists && (
          <div className={styles.imageContainer}>
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
          </div>
        )}
      </div>
    </Section>
  );
};

SectionWithTextAndImage.propTypes = {
  children: CHILDREN_PROP_TYPE,
  image: PropTypes.node,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  title: PropTypes.string
};

SectionWithTextAndImage.defaultProps = {
  children: null,
  image: null,
  subtitle: '',
  subtitleColor: undefined,
  title: ''
};
