import PropTypes from 'prop-types';
import { NAVIGATION } from 'constants/routes';
import React from 'react';
import classnames from 'classnames';
import logo from 'images/db-tax-logo-icon.png';
import { COMPANY_NAME } from 'constants/company-name';
import { Overlay } from '../../layout/overlay/overlay';
import styles from './mobile-navigation.style.scss';
import { MobileNavigationLink } from './mobile-navigation-link/mobile-navigation-link';
import { AccountAccessButtonConnected } from '../account-access-button/account-access-button.connected';

export const MobileNavigation = props => {
  const { active, onCloseClick } = props;
  const className = classnames(styles.root, { [styles.active]: active });
  const links = NAVIGATION.map(route => {
    const { path, title, routes, key } = route;

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
          <AccountAccessButtonConnected style={{ width: '100%' }} />
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
