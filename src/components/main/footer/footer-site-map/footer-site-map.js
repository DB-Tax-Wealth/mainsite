import { ADDRESS } from 'constants/address';
import { EMAIL } from 'constants/email';
import { InputWithIconButton } from 'components/input-with-icon-button/input-with-icon-button';
import { Link } from 'react-router-dom';
import { PHONE } from 'constants/phone-number';
import { ROUTES } from 'constants/routes';
import React from 'react';
import styles from './footer-site-map.style.scss';

export const FooterSiteMap = () => (
  <div className={styles.root}>
    <div className={styles.contact}>
      <h3>Contact</h3>
      <div className={styles.content}>
        <div>
          <a href={`mailto:+${PHONE.DISPLAY}`}>{PHONE.DISPLAY}</a>
        </div>
        <div>
          <a href={ADDRESS.GOOGLE_MAPS} target="_blank" rel="noopener noreferrer">
            {ADDRESS.STREET}
            <br />
            {ADDRESS.CITY}, {ADDRESS.STATE} · {ADDRESS.ZIP}
          </a>
        </div>
        <div>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
    </div>
    <div className={styles.links}>
      <h3>Links</h3>
      <div className={styles.content}>
        <div>
          <Link to={ROUTES.HOME}>About</Link>
        </div>
        <div>
          <Link to={ROUTES.HOME}>Services</Link>
        </div>
        <div>
          <Link to={ROUTES.HOME}>Client Resources</Link>
        </div>
        <div>
          <Link to={ROUTES.HOME}>Legal</Link>
        </div>
        <div>
          <Link to={ROUTES.HOME}>Account Access</Link>
        </div>
      </div>
    </div>
    <div className={styles.learnMore}>
      <h3>Want to Know More?</h3>
      <div>We&apos;ll reach out via email to set up a call.</div>
      <div>
        <InputWithIconButton
          placeholder="enter your email address..."
          iconName="paper-plane"
          className={styles.email}
        />
      </div>
    </div>
  </div>
);
