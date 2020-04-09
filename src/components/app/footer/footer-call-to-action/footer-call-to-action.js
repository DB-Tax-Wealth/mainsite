import { Button } from 'components/layout/button/button';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer-call-to-action.style.scss';

export const FooterCallToAction = (props) => {
  const { onClick } = props;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        Whether you&apos;re facing retirement or looking to better understand investments, we can help you with money
        questions.
      </div>
      <div className={styles.action}>
        <Button className={styles.button} color="secondary" onClick={onClick}>
          Get Started Today
        </Button>
      </div>
    </div>
  );
};

FooterCallToAction.propTypes = {
  onClick: PropTypes.func,
};

FooterCallToAction.defaultProps = {
  onClick: null,
};
