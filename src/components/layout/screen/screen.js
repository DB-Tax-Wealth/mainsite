import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { COMPANY_NAME } from 'constants/company-name';
import styles from './screen.style.scss';

export const Screen = (props) => {
  const { children, className: classNameProp, metaTitle, metaDescription } = props;

  const className = classNames('animated', 'fadeIn', styles.root, classNameProp);

  return (
    <div className={className}>
      <Helmet>
        <title>
          {metaTitle ? `${metaTitle} | ` : ''}
          {COMPANY_NAME}
        </title>
        {metaDescription && <meta name="description" content={metaDescription} />}
      </Helmet>
      {children}
    </div>
  );
};

Screen.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  metaDescription: PropTypes.string,
  metaTitle: PropTypes.string,
};

Screen.defaultProps = {
  children: null,
  className: '',
  metaDescription: '',
  metaTitle: '',
};
