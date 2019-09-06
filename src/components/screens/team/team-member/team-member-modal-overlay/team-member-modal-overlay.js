import React from 'react';
import { ModalOverlay } from 'components/layout/modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import styles from './team-member-modal-overlay.style.scss';

export const TeamMemberModalOverlay = props => {
  const { active, img, name, onOverlayClick, description, title } = props;

  return (
    <ModalOverlay active={active} onOverlayClick={onOverlayClick}>
      <div className={styles.root}>
        <div className={styles.avatar}>
          <img src={img} alt={name} />
        </div>
        <div className={styles.content}>
          <div>
            <strong>{name}</strong>
          </div>
          <div className="border--bottom margin--bottom padding--bottom--half">{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </ModalOverlay>
  );
};

TeamMemberModalOverlay.propTypes = {
  active: PropTypes.bool,
  description: PropTypes.string,
  img: PropTypes.node,
  name: PropTypes.string,
  onOverlayClick: PropTypes.func,
  title: PropTypes.string
};

TeamMemberModalOverlay.defaultProps = {
  active: false,
  onOverlayClick: null,
  description: '',
  img: null,
  name: '',
  title: ''
};
