import { ADDRESS } from 'constants/address';
import { Icon } from 'components/icon/icon';
import { PHONE } from 'constants/phone-number';
import React from 'react';
import styles from './contact-bar.style.scss';

export const ContactBar = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <a href={`tel:+${PHONE.CALL}`} target="_blank" rel="noopener noreferrer">
        <Icon name="phone-alt" /> {PHONE.DISPLAY}
      </a>
      <a href={ADDRESS.GOOGLE_MAPS} className={styles.address} target="_blank" rel="noopener noreferrer">
        <Icon name="home" /> {ADDRESS.STREET}
        <span className={styles.city}>
          {' '}
          · {ADDRESS.CITY}, {ADDRESS.STATE}
        </span>{' '}
        · {ADDRESS.ZIP}
      </a>
    </div>
  </div>
);
