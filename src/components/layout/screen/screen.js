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
  const { children, className: classNameProp, metaTitle, metaDescription } = props;

  const className = classNames('animated', 'fadeIn', styles.root, classNameProp);
  const title = `${metaTitle ? `${metaTitle} | ` : ''}${COMPANY_NAME}`;

  return (
    <div className={className}>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={metaDescription} />

        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${PUBLIC_URL}${OpenGraphImage}`} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PUBLIC_URL} />

        <meta property="twitter:creator" content={TWITTER_HANDLE} />
        <meta property="twitter:site" content={TWITTER_HANDLE} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={`${PUBLIC_URL}${OpenGraphImage}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:url" content={PUBLIC_URL} />
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
  metaDescription:
    'We want to help you develop, implement, and monitor a strategy that’s designed to address your individual situation.',
  metaTitle: '',
};
