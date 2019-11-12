import { IconButton } from 'components/layout/icon-button/icon-button';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './input.style.scss';

export const Input = props => {
  const {
    buttonColor,
    buttonGlow,
    buttonOnClick,
    className: classNameProp,
    iconName,
    onChange,
    placeholder,
    shadow,
    value
  } = props;

  const className = classnames(styles.root, classNameProp, { [styles.shadow]: shadow });
  const showButton = Boolean(buttonOnClick);
  const handleOnChange = event => onChange(event.target.value);

  return (
    <div className={className}>
      <input type="text" placeholder={placeholder} value={value} onChange={handleOnChange} />
      {showButton && <IconButton iconName={iconName} color={buttonColor} glow={buttonGlow} onClick={buttonOnClick} />}
    </div>
  );
};

Input.propTypes = {
  buttonColor: PropTypes.string,
  buttonGlow: PropTypes.bool,
  buttonOnClick: PropTypes.func,
  className: PropTypes.string,
  iconName: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  shadow: PropTypes.bool,
  value: PropTypes.string
};

Input.defaultProps = {
  buttonColor: 'tertiary',
  buttonGlow: undefined,
  buttonOnClick: null,
  className: '',
  iconName: undefined,
  onChange: () => '',
  placeholder: 'enter a value...',
  shadow: false,
  value: ''
};
