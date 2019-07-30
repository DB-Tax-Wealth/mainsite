import { HashRouter, Route } from 'react-router-dom';

import { Home } from 'components/home/home';
import { Main } from 'components/main/main';
import { ROUTES } from 'constants/routes';
import React from 'react';

export const Root = () => {
  return (
    <HashRouter hashType="noslash">
      <Main>
        <Route exact path={ROUTES.HOME} component={Home} />
      </Main>
    </HashRouter>
  );
};
