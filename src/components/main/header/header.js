import React from 'react';
import PropTypes from 'prop-types';
import { ContactBar } from '../contact-bar/contact-bar';
import { Navigation } from '../navigation/navigation';
import styles from './header.style.scss';

export const Header = props => {
  const { onMobileNavigationToggleClick } = props;

  return (
    <div className={styles.root}>
      <ContactBar />
      <Navigation onMobileNavigationToggleClick={onMobileNavigationToggleClick} />
    </div>
  );
};

Header.propTypes = {
  onMobileNavigationToggleClick: PropTypes.func
};

Header.defaultProps = {
  onMobileNavigationToggleClick: null
};
