import React from 'react';
import PropTypes from 'prop-types';
import { CHILDREN_PROP_TYPE } from 'constants/children-prop-type';
import styles from './hero.style.scss';

export const Hero = props => {
  const { image, children } = props;

  return (
    <div className={styles.root}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={styles.spacer} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

Hero.propTypes = {
  children: CHILDREN_PROP_TYPE,
  image: PropTypes.node
};

Hero.defaultProps = {
  children: null,
  image: null
};
