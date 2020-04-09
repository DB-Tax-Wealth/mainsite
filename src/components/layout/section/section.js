import React from 'react';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { STYLE_PROP_TYPE } from 'constants/style-prop-type';
import styles from './section.style.scss';

export const Section = (props) => {
  const { children, color, className: classNameProp, style } = props;
  const className = classnames(styles.root, classNameProp, { [styles[color]]: color });

  return (
    <div className={className} style={style}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

Section.propTypes = {
  children: CHILDREN_PROP_TYPE,
  className: PropTypes.string,
  color: PropTypes.string,
  style: STYLE_PROP_TYPE,
};

Section.defaultProps = {
  children: null,
  className: '',
  color: undefined,
  style: null,
};
