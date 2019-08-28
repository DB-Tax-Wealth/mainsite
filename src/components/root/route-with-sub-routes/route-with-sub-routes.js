import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RouteWithSubRoutes = props => {
  const { component, exact, routeKey, path, routes } = props;

  return (
    <>
      <Route component={component} exact={exact} key={routeKey} path={path} />
      {Object.keys(routes).map(childKey => {
        const route = routes[childKey];
        const { component: childComponent, exact: childExact, path: childPath, routes: childRoutes } = route;
        const combinedPath = `${path}${childPath}`;

        return (
          <RouteWithSubRoutes
            component={childComponent}
            exact={childExact}
            key={routeKey}
            routeKey={childKey}
            path={combinedPath}
            routes={childRoutes}
          />
        );
      })}
    </>
  );
};

RouteWithSubRoutes.propTypes = {
  component: PropTypes.func,
  exact: PropTypes.bool,
  routeKey: PropTypes.string,
  path: PropTypes.string,
  routes: PropTypes.object
};

RouteWithSubRoutes.defaultProps = {
  component: null,
  exact: false,
  routeKey: '',
  path: '',
  routes: {}
};