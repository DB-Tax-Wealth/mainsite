import React from 'react';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './float-section.style.scss';

export const FloatSection = props => {
  const { children, spacerHeight, spacerColor, shadowColor, className: classNameProp } = props;

  const rootClassNames = classnames(styles.root, `shadow--${shadowColor}`, classNameProp);
  const spacerStyles = { height: spacerHeight };
  const spacerClassNames = classnames(
    'display--xs--none',
    'display--xl--block',
    `color-background--${spacerColor}`,
    classNameProp
  );

  return (
    <>
      <div className={rootClassNames}>{children}</div>
      <div className={spacerClassNames} style={spacerStyles} />
    </>
  );
};

FloatSection.propTypes = {
  children: CHILDREN_PROP_TYPE,
  className: PropTypes.string,
  shadowColor: PropTypes.string,
  spacerColor: PropTypes.string,
  spacerHeight: PropTypes.string
};

FloatSection.defaultProps = {
  children: null,
  className: '',
  shadowColor: 'primary',
  spacerColor: 'primary',
  spacerHeight: ''
};
