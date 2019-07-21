import { BrowserRouter, Route } from 'react-router-dom';

import { Main } from 'components/main/main';
import { ROUTES } from 'constants/routes';
import React from 'react';
import { Splash } from 'components/splash/splash';

export const Root = () => {
  return (
    <BrowserRouter>
      <Main>
        <Route exact path={ROUTES.SPLASH} component={Splash} />
      </Main>
    </BrowserRouter>
  );
};
