import { Home } from 'components/screens/home/home';
// import { Demo } from 'components/screens/demo/demo';
import { MissionStatement } from 'components/screens/mission-statement/mission-statement';
import { Team } from 'components/screens/team/team';
import { About } from 'components/screens/about/about';
import { TeamMemberDetail } from 'components/screens/team/team-member/team-member-detail/team-member-detail';
import { UnderConstruction } from 'components/screens/under-construction/under-construction';

export const ROUTES = {
  ABOUT: '/about',
  ACCOUNTING: '/services/accounting',
  CAREERS: '/careers',
  CONTACT: '/contact',
  DEMO: '/demo',
  HOME: '/',
  MISSION_STATEMENT: '/about/mission-statement',
  SERVICES: '/services',
  TAX: '/services/tax',
  TEAM: '/about/team',
  TEAM_MEMBER: '/about/team/:id',
  WEALTH: '/services/wealth'
};

const SERVICES_ROUTES = {
  TAX: { path: ROUTES.TAX, title: 'Tax', component: UnderConstruction, exact: true },
  WEALTH: { path: ROUTES.WEALTH, title: 'Wealth', component: UnderConstruction, exact: true },
  ACCOUNTING: { path: ROUTES.ACCOUNTING, title: 'Accounting', component: UnderConstruction, exact: true }
};

const TEAM_ROUTES = {
  TEAM_MEMBER: { component: TeamMemberDetail, exact: true, path: ROUTES.TEAM_MEMBER }
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
    title: 'Team',
    routes: TEAM_ROUTES
  }
};

export const ROUTES_CONFIG = {
  HOME: { path: ROUTES.HOME, title: 'Home', component: Home, exact: true },
  ABOUT: { path: ROUTES.ABOUT, title: 'About', component: About, exact: true, routes: ABOUT_ROUTES },
  SERVICES: {
    component: UnderConstruction,
    exact: true,
    path: ROUTES.SERVICES,
    routes: SERVICES_ROUTES,
    title: 'Services'
  },
  CAREERS: { path: ROUTES.CAREERS, title: 'Careers', component: UnderConstruction, exact: true },
  CONTACT: { path: ROUTES.CONTACT, title: 'Contact', component: UnderConstruction, exact: true }
  // DEMO: { path: ROUTES.DEMO, title: 'Demo', component: Demo, exact: true }
};
