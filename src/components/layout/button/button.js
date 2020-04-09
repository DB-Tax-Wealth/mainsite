import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { STYLE_PROP_TYPE } from 'constants/style-prop-type';
import styles from './button.style.scss';

export const Button = (props) => {
  const { children, className: classNameProp, color, disabled, glow, onClick, style } = props;
  const className = classnames(
    styles.root,
    { [styles[color]]: color, [styles.glow]: glow, [styles.disabled]: disabled },
    classNameProp
  );

  return (
    <button onClick={onClick} type="button" disabled={disabled} className={className} style={style}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: CHILDREN_PROP_TYPE,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  glow: PropTypes.bool,
  onClick: PropTypes.func,
  style: STYLE_PROP_TYPE,
};

Button.defaultProps = {
  children: null,
  className: '',
  color: 'primary',
  disabled: false,
  glow: false,
  onClick: null,
  style: null,
};
