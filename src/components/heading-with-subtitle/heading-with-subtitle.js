import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './heading-with-subtitle.style.scss';

export const HeadingWithSubtitle = props => {
  const { children, subtitle } = props;
  const subtitleExists = Boolean(subtitle);

  return (
    <div className={styles.root}>
      {subtitleExists && <div className={styles.subtitle}>{subtitle}</div>}
      <h1>{children}</h1>
    </div>
  );
};

HeadingWithSubtitle.propTypes = {
  children: CHILDREN_PROP_TYPE,
  subtitle: PropTypes.string
};

HeadingWithSubtitle.defaultProps = {
  children: null,
  subtitle: ''
};
