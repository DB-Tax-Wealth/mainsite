import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navigation-link.style.scss';

export const NavigationLink = props => {
  const { path, title, routes } = props;

  const childRouteKeys = Object.keys(routes);
  const hasChildRoutes = Boolean(childRouteKeys.length);

  return (
    <div className={styles.root}>
      <NavLink to={path} className={styles.primary}>
        {title}
      </NavLink>
      {hasChildRoutes && (
        <div className={styles.children}>
          {childRouteKeys.map(key => {
            const route = routes[key];
            const { path: childPath, title: childTitle } = route;

            return (
              <NavLink to={childPath} key={key}>
                {childTitle}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

NavigationLink.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  routes: PropTypes.object
};

NavigationLink.defaultProps = {
  path: '',
  title: '',
  routes: {}
};
