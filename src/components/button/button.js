import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './button.style.scss';

export const Button = props => {
  const { children, onClick, className: classNameProp } = props;
  const className = classnames(styles.root, classNameProp);

  return (
    <button onClick={onClick} type="button" className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: CHILDREN_PROP_TYPE,
  onClick: PropTypes.func
};

Button.defaultProps = {
  className: '',
  children: null,
  onClick: null
};
