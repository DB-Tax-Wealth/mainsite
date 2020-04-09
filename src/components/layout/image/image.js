import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { COMPANY_NAME } from 'constants/company-name';
import styles from './image.style.scss';

export const Image = (props) => {
  const { alt, className: classNameProp, src } = props;
  const className = classnames(styles.root, classNameProp);

  return (
    <div className={className}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.node,
};

Image.defaultProps = {
  alt: COMPANY_NAME,
  className: '',
  src: PropTypes.node,
};
