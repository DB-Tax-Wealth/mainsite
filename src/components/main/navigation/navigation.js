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
          <Link to={ROUTES.HOME} className="display--block">
            <img src={logo} alt={COMPANY_NAME} className={styles.logo} />
          </Link>
        </div>
        <nav className={styles.links}>
          <NavLink to={ROUTES.DEMO}>About</NavLink>
          <NavLink to={ROUTES.DEMO}>Services</NavLink>
          <NavLink to={ROUTES.DEMO}>Client Resources</NavLink>
          <NavLink to={ROUTES.DEMO}>Legal</NavLink>
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
