import React from 'react';

import PropTypes from 'prop-types';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import classNames from 'classnames';
import { STYLE_PROP_TYPE } from 'constants/style-prop-type';
import styles from './grid.style.scss';

export const Grid = (props) => {
  const { children, style, className: classNameProp, maxWidth } = props;
  const className = classNames(classNameProp, styles.root, {
    [styles.maxWidth]: maxWidth,
  });

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: CHILDREN_PROP_TYPE,
  className: PropTypes.string,
  maxWidth: PropTypes.bool,
  style: STYLE_PROP_TYPE,
};

Grid.defaultProps = {
  children: null,
  className: '',
  maxWidth: false,
  style: null,
};
