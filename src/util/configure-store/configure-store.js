import { applyMiddleware, createStore, compose } from 'redux';

import thunk from 'redux-thunk';
import { reducers } from 'store/reducers';

export const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  if (module.hot) {
    module.hot.accept('../../store/reducers', () => {
      // eslint-disable-next-line global-require
      const nextReducers = require('../../store/reducers');
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};
