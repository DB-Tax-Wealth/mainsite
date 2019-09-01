import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import React from 'react';
import styles from './heading-with-subtitle.style.scss';

export const HeadingWithSubtitle = props => {
  const { children, subtitle, subtitleColor } = props;
  const subtitleExists = Boolean(subtitle);
  const subtitleClassName = classnames(styles.subtitle, { [`color--${subtitleColor}`]: subtitleColor });

  return (
    <div className={styles.root}>
      {subtitleExists && <div className={subtitleClassName}>{subtitle}</div>}
      <h1>{children}</h1>
    </div>
  );
};

HeadingWithSubtitle.propTypes = {
  children: CHILDREN_PROP_TYPE,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string
};

HeadingWithSubtitle.defaultProps = {
  children: null,
  subtitle: '',
  subtitleColor: 'secondary'
};
