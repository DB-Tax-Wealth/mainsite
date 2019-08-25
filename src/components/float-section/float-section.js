import React from 'react';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './float-section.style.scss';

export const FloatSection = props => {
  const { children, spacerHeight, spacerColor, shadowColor } = props;

  const rootClassNames = classnames(styles.root, { [styles[shadowColor]]: shadowColor });
  const spacerStyles = { height: spacerHeight };
  const spacerClassNames = classnames('display--xs--none', 'display--lg--block', `color-background--${spacerColor}`);

  return (
    <>
      <div className={rootClassNames}>{children}</div>
      <div className={spacerClassNames} style={spacerStyles} />
    </>
  );
};

FloatSection.propTypes = {
  children: CHILDREN_PROP_TYPE,
  shadowColor: PropTypes.string,
  spacerColor: PropTypes.string,
  spacerHeight: PropTypes.string
};

FloatSection.defaultProps = {
  children: null,
  shadowColor: 'primary',
  spacerColor: 'primary',
  spacerHeight: ''
};
