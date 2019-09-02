import { Button } from 'components/layout/button/button';
import React from 'react';
import styles from './footer-call-to-action.style.scss';

export const FooterCallToAction = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      Whether you&apos;re facing retirement or looking to better understand investments, we can help you with money
      questions.
    </div>
    <div className={styles.action}>
      <Button className={styles.button} color="secondary">
        Get Started Today
      </Button>
    </div>
  </div>
);
