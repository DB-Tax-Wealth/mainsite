import { Home } from 'components/screens/home/home';
import { Demo } from 'components/screens/demo/demo';
import { MissionStatement } from 'components/screens/mission-statement/mission-statement';
import { Team } from 'components/screens/team/team';
import { About } from 'components/screens/about/about';

export const ROUTES = {
  ABOUT: '/about',
  DEMO: '/demo',
  HOME: '/',
  MISSION_STATEMENT: '/about/mission-statement',
  TEAM: '/about/team'
};

const ABOUT_ROUTES = {
  MISSION_STATEMENT: {
    component: MissionStatement,
    exact: true,
    path: ROUTES.MISSION_STATEMENT,
    title: 'Mission Statement'
  },
  TEAM: {
    component: Team,
    exact: true,
    path: ROUTES.TEAM,
    title: 'Team'
  }
};

export const ROUTES_CONFIG = {
  HOME: { path: ROUTES.HOME, title: 'Home', component: Home, exact: true },
  ABOUT: { path: ROUTES.ABOUT, title: 'About', component: About, exact: true, routes: ABOUT_ROUTES },
  DEMO: { path: ROUTES.DEMO, title: 'Demo', component: Demo, exact: true }
};
