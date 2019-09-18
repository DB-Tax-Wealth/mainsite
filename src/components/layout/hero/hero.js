import React from 'react';
import PropTypes from 'prop-types';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import { HeadingWithSubtitle } from 'components/layout/heading-with-subtitle/heading-with-subtitle';
import { Button } from 'components/layout/button/button';
import classnames from 'classnames';
import styles from './hero.style.scss';

export const Hero = props => {
  const { buttonColor, buttonLabel, buttonOnClick, children, image, subtitle, subtitleColor, title } = props;

  const imageExists = Boolean(image);
  const className = classnames(styles.root, { [styles.hasImage]: imageExists });

  const titleExists = Boolean(title);
  const buttonExists = Boolean(buttonOnClick);

  return (
    <div className={className}>
      <div className={styles.container}>
        <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
        <div className={styles.spacer} />
        <div className={styles.content}>
          <div className="max-width--sm border-radius">
            {titleExists && (
              <HeadingWithSubtitle animated subtitle={subtitle} subtitleColor={subtitleColor} subtitleBackground>
                {title}
              </HeadingWithSubtitle>
            )}
            <div className="animated fadeIn margin--bottom margin--top--half" style={{ animationDelay: '0.6s' }}>
              {children}
            </div>
            {buttonExists && (
              <Button
                onClick={buttonOnClick}
                className={styles.button}
                color={buttonColor}
                style={{ animationDelay: '0.8s' }}
              >
                {buttonLabel}
              </Button>
            )}
          </div>
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
