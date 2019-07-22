import { Link, NavLink } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import React from 'react';
import styles from './navigation.style.scss';

export const Navigation = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <Link to={ROUTES.HOME} className={styles.logo} />
      <nav className={styles.links}>
        <NavLink to={ROUTES.HOME}>About</NavLink>
        <NavLink to={ROUTES.HOME}>Services</NavLink>
        <NavLink to={ROUTES.HOME}>Client Resources</NavLink>
        <NavLink to={ROUTES.HOME}>Legal</NavLink>
      </nav>
    </div>
  </div>
);
