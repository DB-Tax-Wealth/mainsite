import React from 'react';
import { Button } from 'components/layout/button/button';
import { STYLE_PROP_TYPE } from 'constants/style-prop-type';
import styles from './account-access-button.style.scss';

export const AccountAccessButton = props => {
  const { style } = props;

  return (
    <Button className={styles.root} color="primary-light" style={style}>
      Account Access
    </Button>
  );
};

AccountAccessButton.propTypes = {
  style: STYLE_PROP_TYPE
};

AccountAccessButton.defaultProps = {
  style: null
};
