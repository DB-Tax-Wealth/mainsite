import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import { ROUTES } from 'constants/routes';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { NoMatch } from 'components/screens/no-match/no-match';
import { AppConnected } from 'components/app/app.connected';

// This is to filter out any external links so that we don't attempt to make
// application routes from them.
const APP_ROUTES = Object.keys(ROUTES)
  .map((key) => ROUTES[key])
  .filter(({ externalLink }) => !externalLink);

export const Root = (props) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppConnected>
          <Switch>
            {APP_ROUTES.map((route) => {
              const { component, exact, path, key: routeKey } = route;
              return <Route component={component} exact={exact} key={routeKey} path={path} />;
            })}
            <Route component={NoMatch} />
          </Switch>
        </AppConnected>
      </BrowserRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object,
};

Root.defaultProps = {
  store: null,
};
