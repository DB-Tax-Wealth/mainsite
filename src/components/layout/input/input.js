import { IconButton } from 'components/layout/icon-button/icon-button';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './input.style.scss';

export const Input = (props) => {
  const {
    buttonColor,
    buttonGlow,
    buttonOnClick,
    className: classNameProp,
    error,
    errorMessage,
    iconName,
    onBlur,
    onChange,
    placeholder,
    shadow,
    type,
    valid,
    value,
  } = props;

  const className = classnames(styles.root, classNameProp, {
    [styles.error]: error,
    [styles.shadow]: shadow,
    [styles.valid]: valid,
  });
  const showButton = Boolean(buttonOnClick);
  const handleOnChange = (event) => onChange(event.target.value);

  return (
    <>
      <div className={className}>
        <input type={type} placeholder={placeholder} value={value} onChange={handleOnChange} onBlur={onBlur} />
        {showButton && <IconButton iconName={iconName} color={buttonColor} glow={buttonGlow} onClick={buttonOnClick} />}
      </div>
      {error && Boolean(errorMessage) && <div className={styles.errorMessage}>{errorMessage}</div>}
    </>
  );
};

Input.propTypes = {
  buttonColor: PropTypes.string,
  buttonGlow: PropTypes.bool,
  buttonOnClick: PropTypes.func,
  className: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  iconName: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  shadow: PropTypes.bool,
  type: PropTypes.string,
  valid: PropTypes.bool,
  value: PropTypes.string,
};

Input.defaultProps = {
  buttonColor: 'tertiary',
  buttonGlow: undefined,
  buttonOnClick: null,
  className: '',
  error: false,
  errorMessage: '',
  iconName: undefined,
  onBlur: null,
  onChange: () => '',
  placeholder: 'enter a value...',
  shadow: false,
  type: 'text',
  valid: false,
  value: '',
};
