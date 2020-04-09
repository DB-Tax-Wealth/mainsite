import React from 'react';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import styles from './service-list.style.scss';

export const ServiceList = (props) => {
  const { children } = props;
  return <div className={styles.root}>{children}</div>;
};

ServiceList.propTypes = {
  children: CHILDREN_PROP_TYPE,
};

ServiceList.defaultProps = {
  children: null,
};
