import { Button } from 'components/button/button';
import { Icon } from 'components/icon/icon';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './icon-button.style.scss';

export const IconButton = props => {
  const { className: classNameProp, iconName, onClick, iconType } = props;
  const className = classnames(styles.root, classNameProp);

  return (
    <Button className={className} onClick={onClick}>
      <Icon name={iconName} type={iconType} />
    </Button>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  onClick: PropTypes.func
};

IconButton.defaultProps = {
  className: '',
  iconName: undefined,
  iconType: undefined,
  onClick: null
};
