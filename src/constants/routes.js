import { About } from 'components/screens/about/about';
import { Careers } from 'components/screens/careers/careers';
import { Contact } from 'components/screens/contact/contact';
import { Demo } from 'components/screens/demo/demo';
import { Home } from 'components/screens/home/home';
import { MissionStatement } from 'components/screens/mission-statement/mission-statement';
import { Team } from 'components/screens/team/team';
import { TeamMemberDetail } from 'components/screens/team/team-member/team-member-detail/team-member-detail';
import { UnderConstruction } from 'components/screens/under-construction/under-construction';
import { WealthProcess } from 'components/screens/wealth/wealth-process/wealth-process';
import { DB_WEALTH_LINK } from './db-wealth-link';

export const ROUTES = {
  ABOUT: { component: About, exact: true, key: 'about', path: '/about', title: 'About' },
  CAREERS: { component: Careers, exact: true, key: 'careers', path: '/careers', title: 'Careers' },
  CONTACT: { component: Contact, exact: true, key: 'contact', path: '/contact', title: 'Contact' },
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
  TEAM: { component: Team, exact: true, key: 'team', path: '/about/team', title: 'Team' },
  TEAM_MEMBER: {
    component: TeamMemberDetail,
    exact: true,
    key: 'team-member',
    path: '/about/team/:id',
    title: 'Team Member'
  },
  /**
   * Tax Pages
   */
  TAX: { component: UnderConstruction, exact: true, key: 'tax', path: '/services/tax/process', title: 'Tax' },
  TAX_PROCESS: {
    component: UnderConstruction,
    exact: true,
    key: 'tax-process',
    path: '/services/tax/process',
    title: 'Process'
  },
  TAX_DOCUMENTS: {
    component: UnderConstruction,
    exact: true,
    key: 'tax-documents',
    path: '/services/tax/documents',
    title: 'Documents'
  },
  TAX_DB_DOCUSHARE: {
    component: UnderConstruction,
    exact: true,
    key: 'tax-db-docushare',
    path: '/services/tax/db-docushare',
    title: 'DB DocuShare'
  },
  /**
   * Wealth Pages
   */
  WEALTH: {
    component: WealthProcess,
    exact: true,
    key: 'wealth',
    path: '/services/wealth/process',
    title: 'Wealth'
  },
  WEALTH_PROCESS: {
    component: WealthProcess,
    exact: true,
    key: 'wealth-process',
    path: '/services/wealth/process',
    title: 'Process'
  },
  WEALTH_DOCUMENTS: {
    component: UnderConstruction,
    exact: true,
    key: 'wealth-documents',
    path: '/services/wealth/documents',
    title: 'Documents'
  },
  WEALTH_DB_MONEY: {
    key: 'wealth-db-money',
    externalLink: DB_WEALTH_LINK,
    title: 'DB Money'
  },
  /**
   * Accounting Pages
   */
  ACCOUNTING: {
    component: UnderConstruction,
    exact: true,
    key: 'accounting',
    path: '/services/accounting/process',
    title: 'Accounting'
  },
  ACCOUNTING_PROCESS: {
    component: UnderConstruction,
    exact: true,
    key: 'accounting-process',
    path: '/services/accounting/process',
    title: 'Process'
  },
  ACCOUNTING_QUICK_LINKS: {
    component: UnderConstruction,
    exact: true,
    key: 'accounting-quick-links',
    path: '/services/accounting/quick-links',
    title: 'Quick Links'
  }
};

const TEAM_ROUTES = [ROUTES.TEAM_MEMBER];

const ABOUT_ROUTES = [
  {
    ...ROUTES.ABOUT,
    routes: [ROUTES.MISSION_STATEMENT, ROUTES.CAREERS, { ...ROUTES.TEAM, routes: TEAM_ROUTES }]
  }
];

const SERVICES_ROUTES = [
  {
    ...ROUTES.TAX,
    routes: [ROUTES.TAX_PROCESS, ROUTES.TAX_DOCUMENTS, ROUTES.TAX_DB_DOCUSHARE]
  },
  {
    ...ROUTES.WEALTH,
    routes: [ROUTES.WEALTH_PROCESS, ROUTES.WEALTH_DOCUMENTS, ROUTES.WEALTH_DB_MONEY]
  },
  {
    ...ROUTES.ACCOUNTING,
    routes: [ROUTES.ACCOUNTING_PROCESS, ROUTES.ACCOUNTING_QUICK_LINKS]
  }
];

export const NAVIGATION = [ROUTES.HOME, ...ABOUT_ROUTES, ...SERVICES_ROUTES, ROUTES.CONTACT];
