import { HashRouter, Route } from 'react-router-dom';

import { Main } from 'components/main/main';
import { ROUTES } from 'constants/routes';
import React from 'react';
import { Splash } from 'components/splash/splash';

export const Root = () => {
  return (
    <HashRouter hashType="noslash">
      <Main>
        <Route exact path={ROUTES.HOME} component={Splash} />
      </Main>
    </HashRouter>
  );
};
