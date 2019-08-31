import { ADDRESS } from 'constants/address';
import { Icon } from 'components/icon/icon';
import { PHONE } from 'constants/phone-number';
import React from 'react';
import styles from './contact-bar.style.scss';

export const ContactBar = () => (
  <div className={styles.root}>
    <div className="max-width--xl margin--horizontal--auto">
      <a className="animated fadeIn" href={`tel:+${PHONE.CALL}`} target="_blank" rel="noopener noreferrer">
        <Icon name="phone-alt" /> {PHONE.DISPLAY}
      </a>
      <a
        className="animated fadeIn margin--left--half"
        href={ADDRESS.GOOGLE_MAPS}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon name="home" /> {ADDRESS.STREET}
        <span className="display--xs--none display--sm--inline-block">
          {' '}
          · {ADDRESS.CITY}, {ADDRESS.STATE} · {ADDRESS.ZIP}
        </span>
      </a>
    </div>
  </div>
);
