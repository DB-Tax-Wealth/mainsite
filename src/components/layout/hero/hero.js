import React from 'react';
import PropTypes from 'prop-types';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import { HeadingWithSubtitle } from 'components/layout/heading-with-subtitle/heading-with-subtitle';
import { Button } from 'components/layout/button/button';
import classnames from 'classnames';
import { STYLE_PROP_TYPE } from 'constants/style-prop-type';
import styles from './hero.style.scss';

export const Hero = props => {
  const {
    animated,
    buttonColor,
    buttonLabel,
    buttonOnClick,
    children,
    image,
    style,
    subtitle,
    subtitleColor,
    title
  } = props;

  const imageExists = Boolean(image);
  const className = classnames(styles.root, { [styles.hasImage]: imageExists });

  const titleExists = Boolean(title);
  const buttonExists = Boolean(buttonOnClick);

  const childrenClassName = classnames('fadeIn margin--bottom margin--top--half', { animated });
  const buttonClassName = classnames(styles.button, { animated });

  return (
    <div className={className} style={style}>
      <div className={styles.container}>
        <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
        <div className={styles.spacer} />
        <div className={styles.content}>
          <div className="max-width--md border-radius">
            {titleExists && (
              <HeadingWithSubtitle
                animated={animated}
                subtitle={subtitle}
                subtitleBackground
                subtitleColor={subtitleColor}
              >
                {title}
              </HeadingWithSubtitle>
            )}
            <div className={childrenClassName} style={{ animationDelay: '0.6s' }}>
              {children}
            </div>
            {buttonExists && (
              <Button className={buttonClassName} color={buttonColor} onClick={buttonOnClick}>
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
  animated: PropTypes.bool,
  buttonColor: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonOnClick: PropTypes.func,
  children: CHILDREN_PROP_TYPE,
  image: PropTypes.node,
  style: STYLE_PROP_TYPE,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  title: PropTypes.string
};

Hero.defaultProps = {
  animated: true,
  buttonColor: undefined,
  buttonLabel: 'Learn More',
  buttonOnClick: null,
  children: null,
  image: null,
  style: null,
  subtitle: '',
  subtitleColor: 'primary',
  title: ''
};
