import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

export const Icon = props => {
  const { className: classNameProp, name } = props;
  const className = classnames(classNameProp, `fas fa-${name}`);

  return <i className={className} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
};

Icon.defaultProps = {
  className: '',
  name: 'bell'
};
