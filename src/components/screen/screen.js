import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Screen = props => {
  const { children, className: classNameProp } = props;
  const className = classNames('animated', 'fadeIn', classNameProp);

  return <div className={className}>{children}</div>;
};

Screen.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string
};

Screen.defaultProps = {
  children: null,
  className: ''
};
