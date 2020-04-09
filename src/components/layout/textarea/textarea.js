import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './textarea.style.scss';

export const Textarea = (props) => {
  const { className: classNameProp, error, onChange, placeholder, shadow, valid, value } = props;

  const className = classnames(styles.root, classNameProp, {
    [styles.error]: error,
    [styles.shadow]: shadow,
    [styles.valid]: valid,
  });
  const handleOnChange = (event) => onChange(event.target.value);

  return (
    <div className={className}>
      <textarea placeholder={placeholder} value={value} onChange={handleOnChange} />
    </div>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  shadow: PropTypes.bool,
  valid: PropTypes.bool,
  value: PropTypes.string,
};

Textarea.defaultProps = {
  className: '',
  error: false,
  onChange: () => '',
  placeholder: 'enter a value...',
  shadow: false,
  valid: false,
  value: '',
};
