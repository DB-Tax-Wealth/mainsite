import { HashRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import { ROUTES_CONFIG } from 'constants/routes';
import { Provider } from 'react-redux';
import { App } from 'components/app/app';
import PropTypes from 'prop-types';
import { NotFound } from 'components/screens/not-found/not-found';
import { RouteWithSubRoutes } from './route-with-sub-routes/route-with-sub-routes';

export const Root = props => {
  const { store } = props;

  return (
    <Provider store={store}>
      <HashRouter hashType="noslash">
        <App>
          <Switch>
            {Object.keys(ROUTES_CONFIG).map(key => {
              const route = ROUTES_CONFIG[key];
              const { component, exact, path, routes } = route;

              return (
                <RouteWithSubRoutes
                  component={component}
                  exact={exact}
                  key={key}
                  path={path}
                  routeKey={key}
                  routes={routes}
                />
              );
            })}
            <Route component={NotFound} />
          </Switch>
        </App>
      </HashRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object
};

Root.defaultProps = {
  store: null
};
