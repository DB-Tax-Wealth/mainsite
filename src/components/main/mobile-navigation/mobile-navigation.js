import { NavLink } from 'react-router-dom';
import { Overlay } from '../../overlay/overlay';
import PropTypes from 'prop-types';
import { ROUTES } from 'constants/routes';
import React from 'react';
import classnames from 'classnames';
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
