import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { COMPANY_NAME } from 'constants/company-name';
import { CircularProgressIndicator } from 'components/circular-progress-indicator/circular-progress-indicator';
import styles from './image.style.scss';

export const Image = props => {
  const { alt, className: classNameProp, preloaderColor, showPreloader, src } = props;
  const className = classnames(styles.root, classNameProp);

  return (
    <div className={className}>
      {showPreloader && <CircularProgressIndicator className={styles.preloader} color={preloaderColor} />}
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  preloaderColor: PropTypes.string,
  showPreloader: PropTypes.bool,
  src: PropTypes.node
};

Image.defaultProps = {
  alt: COMPANY_NAME,
  className: '',
  preloaderColor: 'white',
  showPreloader: true,
  src: PropTypes.node
};
