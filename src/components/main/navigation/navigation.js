import { Link, NavLink } from 'react-router-dom';

import { Button } from 'components/button/button';
import { IconButton } from 'components/icon-button/icon-button';
import PropTypes from 'prop-types';
import { ROUTES } from 'constants/routes';
import React from 'react';
import styles from './navigation.style.scss';

export const Navigation = props => {
  const { onMobileNavigationToggleClick } = props;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Link to={ROUTES.HOME} className={styles.logo} />
        <nav className={styles.links}>
          <NavLink to={ROUTES.HOME}>About</NavLink>
          <NavLink to={ROUTES.HOME}>Services</NavLink>
          <NavLink to={ROUTES.HOME}>Client Resources</NavLink>
          <NavLink to={ROUTES.HOME}>Legal</NavLink>
        </nav>
        <div className={styles.accountAccess}>
          <Button className={styles.button}>Account Access</Button>
        </div>
        <div className={styles.mobileToggle}>
          <IconButton iconName="bars" onClick={onMobileNavigationToggleClick} />
        </div>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  onMobileNavigationToggleClick: PropTypes.func
};

Navigation.defaultProps = {
  onMobileNavigationToggleClick: null
};
