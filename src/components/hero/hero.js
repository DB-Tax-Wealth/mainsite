import React from 'react';
import PropTypes from 'prop-types';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import { HeadingWithSubtitle } from 'components/heading-with-subtitle/heading-with-subtitle';
import { Button } from 'components/button/button';
import styles from './hero.style.scss';

export const Hero = props => {
  const { buttonColor, buttonLabel, buttonOnClick, children, image, subtitle, subtitleColor, title } = props;

  const titleExists = Boolean(title);
  const buttonExists = Boolean(buttonOnClick);

  return (
    <div className={styles.root}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={styles.spacer} />
      <div className={styles.content}>
        <div className="max-width--sm border-radius">
          {titleExists && (
            <HeadingWithSubtitle subtitle={subtitle} subtitleColor={subtitleColor}>
              {title}
            </HeadingWithSubtitle>
          )}
          {children}
          {buttonExists && (
            <Button onClick={buttonOnClick} className={styles.button} color={buttonColor}>
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
  buttonOnClick: PropTypes.func,
  children: CHILDREN_PROP_TYPE,
  image: PropTypes.node,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  title: PropTypes.string
};

Hero.defaultProps = {
  buttonColor: undefined,
  buttonLabel: 'Learn More',
  buttonOnClick: null,
  children: null,
  image: null,
  subtitle: '',
  subtitleColor: 'primary',
  title: ''
};
