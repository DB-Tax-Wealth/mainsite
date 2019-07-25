import { Link, NavLink } from 'react-router-dom';

import { Button } from 'components/button/button';
import { COMPANY_NAME } from 'constants/company-name';
import { IconButton } from 'components/icon-button/icon-button';
import PropTypes from 'prop-types';
import { ROUTES } from 'constants/routes';
import React from 'react';
import logo from 'images/db-tax-logo.png';
import styles from './navigation.style.scss';

export const Navigation = props => {
  const { onMobileNavigationToggleClick } = props;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt={COMPANY_NAME} className={styles.logo} />
          </Link>
        </div>
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
