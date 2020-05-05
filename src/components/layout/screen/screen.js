import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { COMPANY_NAME } from 'constants/company-name';
import { TWITTER_HANDLE } from 'constants/twitter-handle';
import { PUBLIC_URL } from 'constants/public-url';
import styles from './screen.style.scss';
import OpenGraphImage from '../../../images/open-graph-image.png';

export const Screen = (props) => {
  const { children, className: classNameProp, metaTitle, metaDescription, url } = props;

  const className = classNames('animated', 'fadeIn', styles.root, classNameProp);
  const title = `${metaTitle ? `${metaTitle} | ` : ''}${COMPANY_NAME}`;

  return (
    <div className={className}>
      <Helmet>
        <title>{title}</title>
        {metaDescription && (
          <>
            <meta name="description" content={metaDescription} />
            <meta name="og:description" content={metaDescription} />
            <meta name="twitter:description" content={metaDescription} />
          </>
        )}
        {url && <meta name="og:url" content={PUBLIC_URL} />}
        <meta name="og:image" content={`${PUBLIC_URL}${OpenGraphImage}`} />
        <meta name="og:title" content={title} />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={TWITTER_HANDLE} />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={title} />
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
  url: PropTypes.string,
};

Screen.defaultProps = {
  children: null,
  className: '',
  metaDescription: '',
  metaTitle: '',
  url: '',
};
