import React from 'react';
import PropTypes from 'prop-types';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import { Icon } from 'components/icon/icon';
import { Link } from 'react-router-dom';
import styles from './service-list-item.style.scss';

export const ServiceListItem = props => {
  const { children, iconName, title, to } = props;
  const titleExists = Boolean(title);

  return (
    <Link className={styles.root} to={to}>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} name={iconName} />
      </div>
      {titleExists && <h4 className="color--type">{title}</h4>}
      {children}
    </Link>
  );
};

ServiceListItem.propTypes = {
  children: CHILDREN_PROP_TYPE,
  iconName: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string
};

ServiceListItem.defaultProps = {
  children: null,
  iconName: undefined,
  title: '',
  to: ''
};
