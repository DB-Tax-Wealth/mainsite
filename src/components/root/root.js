import { HashRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import { ROUTES } from 'constants/routes';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { NoMatch } from 'components/screens/no-match/no-match';
import { AppConnected } from 'components/app/app.connected';

export const Root = (props) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <HashRouter hashType="noslash">
        <AppConnected>
          <Switch>
            {Object.keys(ROUTES).map((key) => {
              const route = ROUTES[key];
              const { component, exact, path, key: routeKey } = route;
              return <Route component={component} exact={exact} key={routeKey} path={path} />;
            })}
            <Route component={NoMatch} />
          </Switch>
        </AppConnected>
      </HashRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object,
};

Root.defaultProps = {
  store: null,
};
