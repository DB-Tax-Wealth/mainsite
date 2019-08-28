import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from 'constants/routes';
import React from 'react';
import classnames from 'classnames';
import logo from 'images/db-tax-logo-icon.png';
import { COMPANY_NAME } from 'constants/company-name';
import { Overlay } from '../../overlay/overlay';
import styles from './mobile-navigation.style.scss';
import { AccountAccessButton } from '../account-access-button/account-access-button';

export const MobileNavigation = props => {
  const { active, onCloseClick } = props;
  const className = classnames(styles.root, { [styles.active]: active });
  const links = Object.keys(ROUTES).map(key => {
    const route = ROUTES[key];
    const { path, title } = route;

    return (
      <NavLink to={path} key={key}>
        {title}
      </NavLink>
    );
  });

  return (
    <div className={className}>
      <Overlay active={active} onClick={onCloseClick} />
      <div className={styles.menu}>
        {links}
        <div className="padding--all">
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
