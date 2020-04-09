import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import styles from './alert.style.scss';

export const Alert = (props) => {
  const { children, color, title } = props;

  const className = classNames(styles.root, { [styles[color]]: color });
  const titleExists = Boolean(title);

  return (
    <div className={className}>
      {titleExists && <div className={styles.heading}>{titleExists && <h3 className={styles.title}>{title}</h3>}</div>}
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: CHILDREN_PROP_TYPE,
  color: PropTypes.oneOf(['danger', 'success']),
  title: PropTypes.string,
};

Alert.defaultProps = {
  children: null,
  color: '',
  title: '',
};
