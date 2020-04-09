import { COMPANY_NAME } from 'constants/company-name';
import { IconButton } from 'components/layout/icon-button/icon-button';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from 'images/db-tax-logo-dark.png';
import moment from 'moment';
import { ROUTES } from 'constants/routes';
import { goToFacebook } from 'util/go-to-facebook/go-to-facebook';
import { goToLinkedIn } from 'util/go-to-linked-in/go-to-linked-in';
import { goToTwitter } from 'util/go-to-twitter/go-to-twitter';
import { goToInstagram } from 'util/go-to-instagram/go-to-instagram';
import styles from './footer-copyright.style.scss';

export const FooterCopyright = () => {
  const year = moment().format('YYYY');

  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <Link to={ROUTES.HOME.path}>
          <img src={logo} alt={COMPANY_NAME} className={styles.logo} />
        </Link>
      </div>
      <div className={styles.copyright}>
        ©{year} {COMPANY_NAME}. All Rights Reserved.
      </div>
      <div className={styles.social}>
        <div>
          <IconButton iconName="facebook-f" iconType="brand" onClick={goToFacebook} />
        </div>
        <div className="margin--left--half">
          <IconButton iconName="linkedin-in" iconType="brand" onClick={goToLinkedIn} />
        </div>
        <div className="margin--left--half">
          <IconButton iconName="twitter" iconType="brand" onClick={goToTwitter} />
        </div>
        <div className="margin--left--half">
          <IconButton iconName="instagram" iconType="brand" onClick={goToInstagram} />
        </div>
      </div>
    </div>
  );
};
