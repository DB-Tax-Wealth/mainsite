import React from 'react';
import { Button } from 'components/layout/button/button';
import { STYLE_PROP_TYPE } from 'constants/style-prop-type';
import PropTypes from 'prop-types';
import styles from './account-access-button.style.scss';

export const AccountAccessButton = props => {
  const { onClick, style } = props;

  return (
    <Button onClick={onClick} className={styles.root} color="primary-light" style={style}>
      Account Access
    </Button>
  );
};

AccountAccessButton.propTypes = {
  onClick: PropTypes.func,
  style: STYLE_PROP_TYPE
};

AccountAccessButton.defaultProps = {
  onClick: null,
  style: null
};
