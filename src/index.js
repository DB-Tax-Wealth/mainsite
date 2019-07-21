import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { Root } from './components/root/root';
import { render } from 'react-dom';

const init = Component =>
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );

init(Root);

if (module.hot) {
  module.hot.accept('./components/root/root', () => {
    // eslint-disable-next-line global-require
    const nextRoot = require('./components/root/root').Root;
    init(nextRoot);
  });
}
