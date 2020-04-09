import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navigation-link.style.scss';

export const NavigationLink = (props) => {
  const { path, title, routes, externalLink } = props;

  const hasChildRoutes = Boolean(routes.length);

  return (
    <div className={styles.root}>
      {externalLink ? (
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      ) : (
        <>
          <NavLink to={path} className={styles.primary}>
            {title}
          </NavLink>
          {hasChildRoutes && (
            <div className={styles.children}>
              {routes.map((route) => {
                const { path: childPath, title: childTitle, key, externalLink: childExternalLink } = route;

                if (childExternalLink) {
                  return (
                    <a href={childExternalLink} target="_blank" rel="noopener noreferrer" key={key}>
                      {childTitle}
                    </a>
                  );
                }

                return (
                  <NavLink to={childPath} key={key}>
                    {childTitle}
                  </NavLink>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

NavigationLink.propTypes = {
  path: PropTypes.string,
  externalLink: PropTypes.string,
  title: PropTypes.string,
  routes: PropTypes.array,
};

NavigationLink.defaultProps = {
  path: '',
  title: '',
  routes: [],
  externalLink: null,
};
