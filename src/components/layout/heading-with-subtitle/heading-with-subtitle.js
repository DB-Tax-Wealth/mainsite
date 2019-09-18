import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import React from 'react';
import styles from './heading-with-subtitle.style.scss';

export const HeadingWithSubtitle = props => {
  const { animated, children, subtitle, subtitleColor, subtitleBackground } = props;
  const subtitleExists = Boolean(subtitle);
  const subtitleClassName = classnames(
    styles.subtitle,
    { 'animated fadeIn': animated },
    { [`color--${subtitleColor}`]: subtitleColor },
    { [styles.background]: subtitleBackground }
  );
  const headingClassName = classnames({ 'animated fadeIn': animated });

  return (
    <div className={styles.root}>
      {subtitleExists && (
        <div className={subtitleClassName} style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </div>
      )}
      <h1 className={headingClassName} style={{ animationDelay: '0.4s' }}>
        {children}
      </h1>
    </div>
  );
};

HeadingWithSubtitle.propTypes = {
  animated: PropTypes.bool,
  children: CHILDREN_PROP_TYPE,
  subtitleBackground: PropTypes.bool,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string
};

HeadingWithSubtitle.defaultProps = {
  animated: false,
  children: null,
  subtitleBackground: false,
  subtitle: '',
  subtitleColor: 'secondary'
};
