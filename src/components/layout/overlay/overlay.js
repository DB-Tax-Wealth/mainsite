import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './overlay.style.scss';

export const Overlay = props => {
  const { active, onClick } = props;
  const className = classnames(styles.root, { [styles.active]: active });

  return <div className={className} onClick={onClick} />;
};

Overlay.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func
};

Overlay.defaultProps = {
  active: false,
  onClick: null
};
