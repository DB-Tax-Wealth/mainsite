import PropTypes from 'prop-types';
import { ROUTES } from 'constants/routes';
import React from 'react';
import classnames from 'classnames';
import logo from 'images/db-tax-logo-icon.png';
import { COMPANY_NAME } from 'constants/company-name';
import { Overlay } from '../../overlay/overlay';
import styles from './mobile-navigation.style.scss';
import { AccountAccessButton } from '../account-access-button/account-access-button';
import { MobileNavigationLink } from './mobile-navigation-link/mobile-navigation-link';

export const MobileNavigation = props => {
  const { active, onCloseClick } = props;
  const className = classnames(styles.root, { [styles.active]: active });
  const links = Object.keys(ROUTES).map(key => {
    const route = ROUTES[key];
    const { path, title, routes } = route;

    return (
      <MobileNavigationLink
        active={active}
        key={key}
        onClick={onCloseClick}
        path={path}
        routes={routes}
        title={title}
      />
    );
  });

  return (
    <div className={className}>
      <Overlay active={active} onClick={onCloseClick} />
      <div className={styles.menu}>
        {links}
        <div className={styles.accountAccess} onClick={onCloseClick}>
          <AccountAccessButton style={{ width: '100%' }} />
        </div>
        <img src={logo} className={styles.logo} alt={COMPANY_NAME} />
      </div>
    </div>
  );
};

MobileNavigation.propTypes = {
  active: PropTypes.bool,
  onCloseClick: PropTypes.func
};

MobileNavigation.defaultProps = {
  active: false,
  onCloseClick: null
};