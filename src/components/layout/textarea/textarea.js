import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './textarea.style.scss';

export const Textarea = props => {
  const { className: classNameProp, onChange, placeholder, shadow, value } = props;

  const className = classnames(styles.root, classNameProp, { [styles.shadow]: shadow });
  const handleOnChange = event => onChange(event.target.value);

  return (
    <div className={className}>
      <textarea placeholder={placeholder} value={value} onChange={handleOnChange} />
    </div>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  shadow: PropTypes.bool,
  value: PropTypes.string
};

Textarea.defaultProps = {
  className: '',
  onChange: () => '',
  placeholder: 'enter a value...',
  shadow: false,
  value: ''
};
