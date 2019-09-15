import { COMPANY_NAME } from 'constants/company-name';
import { IconButton } from 'components/layout/icon-button/icon-button';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from 'images/db-tax-logo-dark.png';
import moment from 'moment';
import { ROUTES } from 'constants/routes';
import styles from './footer-copyright.style.scss';

export const FooterCopyright = () => {
  const year = moment().format('YYYY');

  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt={COMPANY_NAME} className={styles.logo} />
        </Link>
      </div>
      <div className={styles.copyright}>
        ©{year} {COMPANY_NAME}. All Rights Reserved.
      </div>
      <div className={styles.social}>
        <IconButton iconName="facebook-f" iconType="brand" />
      </div>
    </div>
  );
};
