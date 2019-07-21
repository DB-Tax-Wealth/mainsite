import { App } from 'components/app/app';
import PropTypes from 'prop-types';
import React from 'react';

export const Main = props => {
  const { children } = props;

  return <App>{children}</App>;
};

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Main.defaultProps = {
  children: null
};
