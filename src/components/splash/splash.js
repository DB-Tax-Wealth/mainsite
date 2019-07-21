import React from 'react';
import { Screen } from 'components/screen/screen';
import styles from './splash.style.scss';

export const Splash = () => {
  return (
    <Screen centerContent className={styles.root}>
      <div className={styles.primary}>
        <h1>
          <strong>DB</strong>Tax
        </h1>
        <p>This is test content.</p>
      </div>
    </Screen>
  );
};
