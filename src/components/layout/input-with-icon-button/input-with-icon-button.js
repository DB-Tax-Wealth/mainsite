import { IconButton } from 'components/layout/icon-button/icon-button';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './input-with-icon-button.style.scss';

export const InputWithIconButton = props => {
  const { placeholder, iconName, className: classNameProp, buttonColor, buttonGlow, value } = props;
  const className = classnames(styles.root, classNameProp);

  return (
    <div className={className}>
      <input type="text" placeholder={placeholder} value={value} />
      <IconButton iconName={iconName} color={buttonColor} glow={buttonGlow} />
    </div>
  );
};

InputWithIconButton.propTypes = {
  buttonColor: PropTypes.string,
  buttonGlow: PropTypes.bool,
  className: PropTypes.string,
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

InputWithIconButton.defaultProps = {
  buttonColor: 'tertiary',
  buttonGlow: undefined,
  className: '',
  iconName: undefined,
  placeholder: 'enter a value...',
  value: ''
};
