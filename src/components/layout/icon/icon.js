import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/brands.css';

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const TYPES = {
  brand: 'fab',
  solid: 'fas',
  outline: 'far',
};

export const Icon = (props) => {
  const { className: classNameProp, name, type: typeProp } = props;
  const type = TYPES[typeProp];
  const className = classnames(classNameProp, `${type} fa-${name}`);

  return <i className={className} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['brand', 'outline', 'solid']),
};

Icon.defaultProps = {
  className: '',
  name: 'bell',
  type: 'solid',
};
