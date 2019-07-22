import { App } from 'components/app/app';
import { ContactBar } from 'components/contact-bar/contact-bar';
import { Navigation } from 'components/navigation/navigation';
import PropTypes from 'prop-types';
import React from 'react';

export const Main = props => {
  const { children } = props;

  return (
    <App>
      <ContactBar />
      <Navigation />
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
