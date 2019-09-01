import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { STYLE_PROP_TYPE } from 'constants/style-prop-type';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import styles from './row.style.scss';

export const Row = props => {
  const { children, className: classNameProp, style } = props;
  const className = classNames(styles.root, classNameProp);

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: CHILDREN_PROP_TYPE,
  className: PropTypes.string,
  style: STYLE_PROP_TYPE
};

Row.defaultProps = {
  children: null,
  className: '',
  style: null
};
