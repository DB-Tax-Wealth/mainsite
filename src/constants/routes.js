import { Home } from 'components/home/home';
import { Demo } from 'components/demo/demo';

const ABOUT_ROUTES = {
  MISSION_STATEMENT: { path: '/mission-statement', title: 'Mission Statement', component: Demo, exact: true },
  TEAM: { path: '/team', title: 'Team', component: Demo, exact: true }
};

export const ROUTES = {
  HOME: { path: '/', title: 'Home', component: Home, exact: true },
  ABOUT: { path: '/about', title: 'About', component: Home, exact: true, routes: ABOUT_ROUTES },
  DEMO: { path: '/demo', title: 'Demo', component: Demo, exact: true }
};
