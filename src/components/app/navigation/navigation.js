import { Link } from 'react-router-dom';

import { COMPANY_NAME } from 'constants/company-name';
import { IconButton } from 'components/layout/icon-button/icon-button';
import PropTypes from 'prop-types';
import { ROUTES } from 'constants/routes';
import React from 'react';
import logo from 'images/db-tax-logo.png';
import styles from './navigation.style.scss';
import { NavigationLink } from './navigation-link/navigation-link';
import { AccountAccessButton } from '../account-access-button/account-access-button';

export const Navigation = props => {
  const { onMobileNavigationToggleClick } = props;

  const links = Object.keys(ROUTES)
    .filter(key => key !== 'HOME')
    .map(key => {
      const route = ROUTES[key];
      const { path, routes, title } = route;

      return <NavigationLink key={key} routes={routes} title={title} path={path} />;
    });

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Link to={ROUTES.HOME.path} className="display--block">
            <img src={logo} alt={COMPANY_NAME} className={styles.logo} />
          </Link>
        </div>
        <nav className={styles.links}>{links}</nav>
        <div className={styles.accountAccess}>
          <AccountAccessButton />
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
