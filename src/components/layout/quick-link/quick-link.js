import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '../icon-button/icon-button';

export const QuickLink = (props) => {
  const { name, link } = props;

  const linkExists = Boolean(link);
  const onClick = () => window.open(link, '_blank');

  return (
    <div
      className="border-radius--all color-background--white padding--all shadow--primary-dark display--flex margin--bottom--half"
      style={{ alignItems: 'center' }}
    >
      <div className="margin--right" style={{ flex: 1 }}>
        <h4 className="color--type">{name}</h4>
      </div>
      {linkExists && <IconButton color="secondary" iconName="chevron-right" onClick={onClick} />}
    </div>
  );
};

QuickLink.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

QuickLink.defaultProps = {
  name: 'Link',
  link: '',
};
