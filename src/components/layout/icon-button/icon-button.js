import { Button } from 'components/layout/button/button';
import { Icon } from 'components/layout/icon/icon';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { STYLE_PROP_TYPE } from 'constants/style-prop-type';
import styles from './icon-button.style.scss';

export const IconButton = props => {
  const { className: classNameProp, color, glow, iconName, iconType, onClick, style } = props;
  const className = classnames(styles.root, classNameProp);

  return (
    <Button className={className} onClick={onClick} color={color} glow={glow} style={style}>
      <Icon name={iconName} type={iconType} />
    </Button>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  glow: PropTypes.bool,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  onClick: PropTypes.func,
  style: STYLE_PROP_TYPE
};

IconButton.defaultProps = {
  className: '',
  color: undefined,
  glow: undefined,
  iconName: undefined,
  iconType: undefined,
  onClick: null,
  style: null
};
