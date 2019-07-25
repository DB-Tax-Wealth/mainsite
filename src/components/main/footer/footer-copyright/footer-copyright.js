import { COMPANY_NAME } from 'constants/company-name';
import { IconButton } from 'components/icon-button/icon-button';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import React from 'react';
import logo from 'images/db-tax-logo-dark.png';
import styles from './footer-copyright.style.scss';

export const FooterCopyright = () => (
  <div className={styles.root}>
    <div className={styles.logoContainer}>
      <Link to={ROUTES.HOME}>
        <img src={logo} alt={COMPANY_NAME} className={styles.logo} />
      </Link>
    </div>
    <div className={styles.copyright}>© 2019 DB Tax & Financial Services, Inc. All Rights Reserved.</div>
    <div className={styles.social}>
      <IconButton iconName="facebook-f" iconType="brand" />
    </div>
  </div>
);
