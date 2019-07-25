import { IconButton } from 'components/icon-button/icon-button';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './input-with-icon-button.style.scss';

export const InputWithIconButton = props => {
  const { placeholder, iconName, className: classNameProp, value } = props;
  const className = classnames(styles.root, classNameProp);
  return (
    <div className={className}>
      <input type="text" placeholder={placeholder} value={value} />
      <IconButton iconName={iconName} />
    </div>
  );
};

InputWithIconButton.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

InputWithIconButton.defaultProps = {
  className: '',
  iconName: undefined,
  placeholder: 'enter a value...',
  value: ''
};
