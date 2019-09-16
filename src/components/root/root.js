import { HashRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import { ROUTES } from 'constants/routes';
import { Provider } from 'react-redux';
import { App } from 'components/app/app';
import PropTypes from 'prop-types';
import { NoMatch } from 'components/screens/no-match/no-match';

export const Root = props => {
  const { store } = props;

  return (
    <Provider store={store}>
      <HashRouter hashType="noslash">
        <App>
          <Switch>
            {Object.keys(ROUTES).map(key => {
              const route = ROUTES[key];
              const { component, exact, path, key: routeKey } = route;
              return <Route component={component} exact={exact} key={routeKey} path={path} />;
            })}
            <Route component={NoMatch} />
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
