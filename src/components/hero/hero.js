import React from 'react';
import PropTypes from 'prop-types';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import { HeadingWithSubtitle } from 'components/heading-with-subtitle/heading-with-subtitle';
import { Button } from 'components/button/button';
import styles from './hero.style.scss';

export const Hero = props => {
  const { buttonColor, buttonLabel, children, image, subtitle, subtitleColor, title } = props;

  const titleExists = Boolean(title);
  const buttonExists = Boolean(buttonLabel);

  return (
    <div className={styles.root}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={styles.spacer} />
      <div className={styles.content}>
        <div className="max-width--sm">
          {titleExists && (
            <HeadingWithSubtitle subtitle={subtitle} subtitleColor={subtitleColor}>
              {title}
            </HeadingWithSubtitle>
          )}
          {children}
          {buttonExists && (
            <Button className={styles.button} color={buttonColor}>
              {buttonLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  buttonColor: PropTypes.string,
  buttonLabel: PropTypes.string,
  children: CHILDREN_PROP_TYPE,
  image: PropTypes.node,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  title: PropTypes.string
};

Hero.defaultProps = {
  buttonColor: undefined,
  buttonLabel: 'Learn More',
  children: null,
  image: null,
  subtitle: '',
  subtitleColor: 'primary',
  title: ''
};
