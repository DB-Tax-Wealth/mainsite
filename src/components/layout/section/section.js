import React from 'react';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './section.style.scss';

export const Section = props => {
  const { children, color, className: classNameProp } = props;
  const className = classnames(styles.root, classNameProp, { [styles[color]]: color });

  return (
    <div className={className}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: CHILDREN_PROP_TYPE,
  color: PropTypes.string
};

Section.defaultProps = {
  className: '',
  children: null,
  color: undefined
};
