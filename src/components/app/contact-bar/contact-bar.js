import { ADDRESS } from 'constants/address';
import { Icon } from 'components/layout/icon/icon';
import { PHONE_NUMBER } from 'constants/phone-number';
import React from 'react';
import { convertPhoneNumberToTelLink } from 'util/convert-phone-number-to-tel-link/convert-phone-number-to-tel-link';
import styles from './contact-bar.style.scss';

const phoneLink = convertPhoneNumberToTelLink(PHONE_NUMBER);

export const ContactBar = () => (
  <div className={styles.root}>
    <div className="max-width--xl margin--horizontal--auto">
      <a className="animated fadeIn" href={phoneLink}>
        <Icon name="phone-alt" /> {PHONE_NUMBER}
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
