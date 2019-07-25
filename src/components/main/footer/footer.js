import { FooterCallToAction } from 'components/main/footer/footer-call-to-action/footer-call-to-action';
import { FooterCopyright } from './footer-copyright/footer-copyright';
import { FooterSiteMap } from 'components/main/footer/footer-site-map/footer-site-map';
import React from 'react';
import styles from 'components/main/footer/footer.style.scss';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <FooterCallToAction />
        <FooterSiteMap />
        <FooterCopyright />
      </div>
    </div>
  );
};
