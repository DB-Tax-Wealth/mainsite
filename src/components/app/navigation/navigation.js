import { Link } from 'react-router-dom';

import { COMPANY_NAME } from 'constants/company-name';
import { IconButton } from 'components/layout/icon-button/icon-button';
import PropTypes from 'prop-types';
import { ROUTES, NAVIGATION } from 'constants/routes';
import React from 'react';
import logo from 'images/db-tax-logo.png';
import styles from './navigation.style.scss';
import { NavigationLink } from './navigation-link/navigation-link';
import { AccountAccessButtonConnected } from '../account-access-button/account-access-button.connected';

export const Navigation = props => {
  const { onMobileNavigationToggleClick } = props;

  const links = NAVIGATION.filter(route => route.key !== 'home').map(route => {
    const { path, routes, title, key: routeKey } = route;
    return <NavigationLink key={routeKey} routes={routes} title={title} path={path} />;
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
          <AccountAccessButtonConnected />
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
