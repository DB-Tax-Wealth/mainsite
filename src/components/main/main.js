import { App } from 'components/app/app';
import { ContactBar } from '../contact-bar/contact-bar';
import PropTypes from 'prop-types';
import React from 'react';

export const Main = props => {
  const { children } = props;

  return (
    <App>
      <ContactBar />
      {children}
    </App>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Main.defaultProps = {
  children: null
};
