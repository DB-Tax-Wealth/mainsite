import { HashRouter } from 'react-router-dom';

import { Main } from 'components/main/main';
import React from 'react';
import { ROUTES } from 'constants/routes';
import { RouteWithSubRoutes } from './route-with-sub-routes/route-with-sub-routes';

export const Root = () => {
  return (
    <HashRouter hashType="noslash">
      <Main>
        {Object.keys(ROUTES).map(key => {
          const route = ROUTES[key];
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
      </Main>
    </HashRouter>
  );
};
