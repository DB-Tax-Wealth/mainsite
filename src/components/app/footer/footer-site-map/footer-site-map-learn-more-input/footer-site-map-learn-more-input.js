import React from 'react';
import { Input } from 'components/layout/input/input';
import PropTypes from 'prop-types';
import styles from './footer-site-map-learn-more-input.style.scss';

export const FooterSiteMapLearnMoreInput = props => {
  const { buttonOnClick, onChange, valid, value } = props;

  return (
    <Input
      buttonOnClick={buttonOnClick}
      className={styles.root}
      iconName="paper-plane"
      onChange={onChange}
      placeholder="enter your email address..."
      type="email"
      valid={valid}
      value={value}
    />
  );
};

FooterSiteMapLearnMoreInput.propTypes = {
  buttonOnClick: PropTypes.func,
  onChange: PropTypes.func,
  valid: PropTypes.bool,
  value: PropTypes.string
};

FooterSiteMapLearnMoreInput.defaultProps = {
  buttonOnClick: () => {},
  onChange: () => {},
  valid: false,
  value: ''
};
