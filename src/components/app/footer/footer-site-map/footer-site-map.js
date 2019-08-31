import { ADDRESS } from 'constants/address';
import { EMAIL } from 'constants/email';
import { InputWithIconButton } from 'components/input-with-icon-button/input-with-icon-button';
import { Link } from 'react-router-dom';
import { PHONE } from 'constants/phone-number';
import React from 'react';
import { ROUTES } from 'constants/routes';
import styles from './footer-site-map.style.scss';

export const FooterSiteMap = () => {
  const links = Object.keys(ROUTES).map(key => {
    const route = ROUTES[key];
    const { path, title } = route;

    return (
      <div key={key}>
        <Link to={path}>{title}</Link>
      </div>
    );
  });

  return (
    <div className={styles.root}>
      <div className={styles.section}>
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
      <div className={styles.section}>
        <h3>Hours</h3>
        <div className={styles.content}>
          <div className="display--flex">
            <div className={styles.day}>Sun.</div>
            <div>Closed</div>
          </div>
          <div className="display--flex">
            <div className={styles.day}>Mon.</div>
            <div>9am-7pm</div>
          </div>
          <div className="display--flex">
            <div className={styles.day}>Tues.</div>
            <div>9am-7pm</div>
          </div>
          <div className="display--flex">
            <div className={styles.day}>Wed.</div>
            <div>9am-7pm</div>
          </div>
          <div className="display--flex">
            <div className={styles.day}>Thurs.</div>
            <div>9am-7pm</div>
          </div>
          <div className="display--flex">
            <div className={styles.day}>Fri.</div>
            <div>9am-7pm</div>
          </div>
          <div className="display--flex">
            <div className={styles.day}>Sat.</div>
            <div>10am-5pm</div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h3>Links</h3>
        <div className={styles.content}>{links}</div>
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
};
