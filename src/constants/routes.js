import { Home } from 'components/home/home';
import { Demo } from 'components/demo/demo';
import { MissionStatement } from 'components/mission-statement/mission-statement';

const ABOUT_ROUTES = {
  MISSION_STATEMENT: {
    path: '/mission-statement',
    title: 'Mission Statement',
    component: MissionStatement,
    exact: true
  }
};

export const ROUTES = {
  HOME: { path: '/', title: 'Home', component: Home, exact: true },
  ABOUT: { path: '/about', title: 'About', component: Home, exact: true, routes: ABOUT_ROUTES },
  DEMO: { path: '/demo', title: 'Demo', component: Demo, exact: true }
};
