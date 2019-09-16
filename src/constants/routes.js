import { Home } from 'components/screens/home/home';
import { MissionStatement } from 'components/screens/mission-statement/mission-statement';
import { Team } from 'components/screens/team/team';
import { About } from 'components/screens/about/about';
import { TeamMemberDetail } from 'components/screens/team/team-member/team-member-detail/team-member-detail';
import { UnderConstruction } from 'components/screens/under-construction/under-construction';
import { Careers } from 'components/screens/careers/careers';
import { Demo } from 'components/screens/demo/demo';

export const ROUTES = {
  ABOUT: { component: About, exact: true, key: 'about', path: '/about', title: 'About' },
  ACCOUNTING: {
    component: UnderConstruction,
    exact: true,
    key: 'accounting',
    path: '/services/accounting',
    title: 'Accounting'
  },
  CAREERS: { component: Careers, exact: true, key: 'careers', path: '/careers', title: 'Careers' },
  CONTACT: { component: UnderConstruction, exact: true, key: 'contact', path: '/contact', title: 'Contact' },
  DEMO: { component: Demo, exact: true, key: 'demo', path: '/demo', title: 'Demo' },
  HOME: { component: Home, exact: true, key: 'home', path: '/', title: 'Home' },
  MISSION_STATEMENT: {
    component: MissionStatement,
    exact: true,
    key: 'mission-statement',
    path: '/about/mission-statement',
    title: 'Mission Statement'
  },
  SERVICES: { component: UnderConstruction, exact: true, key: 'services', path: '/services', title: 'Services' },
  TAX: { component: UnderConstruction, exact: true, key: 'tax', path: '/services/tax', title: 'Tax' },
  TEAM: { component: Team, exact: true, key: 'team', path: '/about/team', title: 'Team' },
  TEAM_MEMBER: {
    component: TeamMemberDetail,
    exact: true,
    key: 'team-member',
    path: '/about/team/:id',
    title: 'Team Member'
  },
  WEALTH: { component: UnderConstruction, exact: true, key: 'wealth', path: '/services/wealth', title: 'Wealth' }
};
const TEAM_ROUTES = [ROUTES.TEAM_MEMBER];

const ABOUT_ROUTES = [ROUTES.MISSION_STATEMENT, { ...ROUTES.TEAM, routes: TEAM_ROUTES }];
const SERVICES_ROUTES = [ROUTES.TAX, ROUTES.WEALTH, ROUTES.ACCOUNTING];

export const NAVIGATION = [
  ROUTES.HOME,
  { ...ROUTES.ABOUT, routes: ABOUT_ROUTES },
  { ...ROUTES.SERVICES, routes: SERVICES_ROUTES },
  ROUTES.CAREERS,
  ROUTES.CONTACT
];
