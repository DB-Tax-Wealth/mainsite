import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './screen.style.scss';

export const Screen = (props) => {
  const { children, className: classNameProp } = props;
  const className = classNames('animated', 'fadeIn', styles.root, classNameProp);

  return <div className={className}>{children}</div>;
};

Screen.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
};

Screen.defaultProps = {
  children: null,
  className: '',
};
