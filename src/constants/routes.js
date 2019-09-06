import { Home } from 'components/screens/home/home';
import { Demo } from 'components/screens/demo/demo';
import { MissionStatement } from 'components/screens/mission-statement/mission-statement';
import { Team } from 'components/screens/team/team';

const ABOUT_ROUTES = {
  MISSION_STATEMENT: {
    component: MissionStatement,
    exact: true,
    path: '/mission-statement',
    title: 'Mission Statement'
  },
  TEAM: {
    component: Team,
    exact: true,
    path: '/team',
    title: 'Team'
  }
};

export const ROUTES = {
  HOME: { path: '/', title: 'Home', component: Home, exact: true },
  ABOUT: { path: '/about', title: 'About', component: Home, exact: true, routes: ABOUT_ROUTES },
  DEMO: { path: '/demo', title: 'Demo', component: Demo, exact: true }
};
