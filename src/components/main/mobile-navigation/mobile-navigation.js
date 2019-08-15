import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from 'constants/routes';
import React from 'react';
import classnames from 'classnames';
import logo from 'images/db-tax-logo-icon.png';
import { COMPANY_NAME } from 'constants/company-name';
import { Overlay } from '../../overlay/overlay';
import styles from './mobile-navigation.style.scss';

export const MobileNavigation = props => {
  const { active, onCloseClick } = props;
  const className = classnames(styles.root, { [styles.active]: active });

  return (
    <div className={className}>
      <Overlay active={active} onClick={onCloseClick} />
      <div className={styles.menu}>
        <NavLink to={ROUTES.HOME} onClick={onCloseClick}>
          Home
        </NavLink>
        <NavLink to={ROUTES.HOME} onClick={onCloseClick}>
          About
        </NavLink>
        <NavLink to={ROUTES.HOME} onClick={onCloseClick}>
          Services
        </NavLink>
        <NavLink to={ROUTES.HOME} onClick={onCloseClick}>
          Client Resources
        </NavLink>
        <NavLink to={ROUTES.HOME} onClick={onCloseClick}>
          Legal
        </NavLink>
        <NavLink to={ROUTES.HOME} onClick={onCloseClick}>
          Account Access
        </NavLink>
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
