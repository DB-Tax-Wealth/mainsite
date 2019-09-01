import { Home } from 'components/screens/home/home';
import { Demo } from 'components/screens/demo/demo';
import { MissionStatement } from 'components/screens/mission-statement/mission-statement';

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
