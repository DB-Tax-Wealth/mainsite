// import { Careers } from 'components/screens/careers/careers';
import { About } from 'components/screens/about/about';
import { AccountingProcess } from 'components/screens/accounting/accounting-process/accounting-process';
import { ContactConnected } from 'components/screens/contact/contact.connected';
import { Demo } from 'components/screens/demo/demo';
import { EngagementPolicy } from 'components/screens/about/engagement-policy';
import { FeeSchedule } from 'components/screens/about/fee-schedule';
import { Home } from 'components/screens/home/home';
import { MissionStatement } from 'components/screens/mission-statement/mission-statement';
import { TaxDocuments } from 'components/screens/tax/tax-documents/tax-documents';
import { TaxProcess } from 'components/screens/tax/tax-process/tax-process';
import { Team } from 'components/screens/team/team';
import { TeamMemberDetail } from 'components/screens/team/team-member/team-member-detail/team-member-detail';
import { UnderConstruction } from 'components/screens/under-construction/under-construction';
import { WealthDocuments } from 'components/screens/wealth/wealth-documents/wealth-documents';
import { WealthProcess } from 'components/screens/wealth/wealth-process/wealth-process';

import { AccountingQuickLinks } from 'components/screens/accounting/accounting-quick-links/accounting-quick-links';
import { DB_WEALTH_LINK } from './db-wealth-link';

export const ROUTES = {
  ABOUT: {
    component: About,
    exact: true,
    key: 'about',
    path: '/about',
    title: 'About',
    description:
      'To date, the firm has processed more than 60,000 Personal Income Tax, Corporate, Partnership, Proprietorship, and Fiduciary Tax Returns. We not only prepare these returns, but we stand behind them with 100% accuracy guarantee.',
  },
  // CAREERS: { component: Careers, exact: true, key: 'careers', path: '/careers', title: 'Careers' },
  CONTACT: {
    component: ContactConnected,
    exact: true,
    key: 'contact',
    path: '/contact',
    title: 'Contact',
    description: '414-764-7330 . 1125 Milwaukee Ave. South Milwaukee, WI · 53172',
  },
  DEMO: { component: Demo, exact: true, key: 'demo', path: '/demo', title: 'Demo' },
  ENGAGEMENT_POLICY: {
    component: EngagementPolicy,
    exact: true,
    key: 'engagement-policy',
    path: '/about/engagement-policy',
    title: 'Engagement Policy',
  },
  FEE_SCHEDULE: {
    component: FeeSchedule,
    exact: true,
    key: 'fee-schedule',
    path: '/about/fee-schedule',
    title: 'Fee Schedule',
  },
  HOME: {
    component: Home,
    exact: true,
    key: 'home',
    path: '/',
    title: 'Home',
    description: 'At DB Tax & Wealth, we have the client—and only the client—in mind.',
  },
  MISSION_STATEMENT: {
    component: MissionStatement,
    exact: true,
    key: 'mission-statement',
    path: '/about/mission-statement',
    title: 'Mission Statement',
    description:
      'Our mission is to get to know and understand your needs, wants, and long-term goals. We want to help you develop, implement, and monitor a strategy that’s designed to address your individual situation.',
  },
  SERVICES: { component: UnderConstruction, exact: true, key: 'services', path: '/services', title: 'Services' },
  TEAM: {
    component: Team,
    exact: true,
    key: 'team',
    path: '/about/team',
    title: 'Team',
    description:
      'We believe our team oriented approach adds a broader perspective to all we do and provides increased benefits to our clients.',
  },
  TEAM_MEMBER: {
    component: TeamMemberDetail,
    exact: true,
    key: 'team-member',
    path: '/about/team/:id',
    title: 'Team Member',
  },
  /**
   * Tax Pages
   */
  TAX: {
    component: TaxProcess,
    exact: true,
    key: 'tax',
    path: '/services/tax/process',
    title: 'Tax',
    description: 'Our approach helps clients minimize one of life’s most complicated and costly expenses: taxes.',
  },
  TAX_PROCESS: {
    component: TaxProcess,
    exact: true,
    key: 'tax-process',
    path: '/services/tax/process',
    title: 'Tax Process',
  },
  TAX_DOCUMENTS: {
    component: TaxDocuments,
    exact: true,
    key: 'tax-documents',
    path: '/services/tax/documents',
    title: 'Tax Documents',
    description: 'Documents to help you with your taxes.',
  },
  TAX_DB_DOCUSHARE: {
    key: 'tax-db-docushare',
    externalLink: DB_WEALTH_LINK,
    title: 'DB DocuShare',
  },
  /**
   * Accounting Pages
   */
  ACCOUNTING: {
    component: AccountingProcess,
    exact: true,
    key: 'accounting',
    path: '/services/accounting/process',
    title: 'Accounting',
    description: 'DB Tax & Wealth is a one-stop shop for your payroll, bookkeeping and accounting needs.',
  },
  ACCOUNTING_PROCESS: {
    component: AccountingProcess,
    exact: true,
    key: 'accounting-process',
    path: '/services/accounting/process',
    title: 'Accounting Process',
  },
  ACCOUNTING_QUICK_LINKS: {
    component: AccountingQuickLinks,
    exact: true,
    key: 'accounting-quick-links',
    path: '/services/accounting/quick-links',
    title: 'Accounting Quick Links',
    description: 'Documents and links to help you with your accounting.',
  },
  /**
   * Wealth Pages
   */
  WEALTH: {
    component: WealthProcess,
    exact: true,
    key: 'wealth',
    path: '/services/wealth/process',
    title: 'Wealth',
    description: 'At DB Tax & Wealth, we integrate tax information for a comprehensive picture.',
  },
  WEALTH_PROCESS: {
    component: WealthProcess,
    exact: true,
    key: 'wealth-process',
    path: '/services/wealth/process',
    title: 'Wealth Process',
  },
  WEALTH_DOCUMENTS: {
    component: WealthDocuments,
    exact: true,
    key: 'wealth-documents',
    path: '/services/wealth/documents',
    title: 'Wealth Documents',
    description: 'Documents to help you manage your wealth and assets.',
  },
  WEALTH_DB_MONEY: {
    key: 'wealth-db-money',
    externalLink: DB_WEALTH_LINK,
    title: 'DB Money',
  },
};

const TEAM_ROUTES = [ROUTES.TEAM_MEMBER];

const ABOUT_ROUTES = [
  {
    ...ROUTES.ABOUT,
    routes: [
      ROUTES.MISSION_STATEMENT,
      { ...ROUTES.TEAM, routes: TEAM_ROUTES },
      ROUTES.FEE_SCHEDULE,
      ROUTES.ENGAGEMENT_POLICY,
    ],
  },
];

const SERVICES_ROUTES = [
  {
    ...ROUTES.TAX,
    routes: [ROUTES.TAX_PROCESS, ROUTES.TAX_DOCUMENTS, ROUTES.TAX_DB_DOCUSHARE],
  },
  {
    ...ROUTES.WEALTH,
    routes: [ROUTES.WEALTH_PROCESS, ROUTES.WEALTH_DOCUMENTS, ROUTES.WEALTH_DB_MONEY],
  },
  {
    ...ROUTES.ACCOUNTING,
    routes: [ROUTES.ACCOUNTING_PROCESS, ROUTES.ACCOUNTING_QUICK_LINKS],
  },
];

export const NAVIGATION = [ROUTES.HOME, ...ABOUT_ROUTES, ...SERVICES_ROUTES, ROUTES.CONTACT];
