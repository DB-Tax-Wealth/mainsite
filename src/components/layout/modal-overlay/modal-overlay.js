import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import styles from './modal-overlay.style.scss';
import { Overlay } from '../overlay/overlay';

export const ModalOverlay = (props) => {
  const { active, children, onOverlayClick, className: classNameProp } = props;
  const className = classnames(styles.root, classNameProp, { [styles.active]: active });

  return (
    <div className={className}>
      <Overlay active={active} onClick={onOverlayClick} />
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

ModalOverlay.propTypes = {
  active: PropTypes.bool,
  children: CHILDREN_PROP_TYPE,
  className: PropTypes.string,
  onOverlayClick: PropTypes.func,
};

ModalOverlay.defaultProps = {
  active: false,
  children: null,
  className: '',
  onOverlayClick: null,
};
