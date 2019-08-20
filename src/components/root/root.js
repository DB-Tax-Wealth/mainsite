import { HashRouter, Route } from 'react-router-dom';

import { Home } from 'components/home/home';
import { Main } from 'components/main/main';
import { ROUTES } from 'constants/routes';
import React from 'react';
import { Demo } from 'components/demo/demo';

export const Root = () => {
  return (
    <HashRouter hashType="noslash">
      <Main>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.DEMO} component={Demo} />
      </Main>
    </HashRouter>
  );
};
