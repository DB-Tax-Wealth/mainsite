import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Section } from 'components/layout/section/section';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { Hero } from 'components/layout/hero/hero';

export const About = () => {
  return (
    <Screen>
      <Hero title="Our Story" subtitle="About">
        <p>When you have a great story, share it.</p>
      </Hero>
      <Section color="primary-light">
        <h2>The Beginning</h2>
        <p>
          Established in 1989 by its founders <strong>Larry & Diane Burger</strong>. After many years of dedicated
          service with the Wisconsin Air National Guard – 128th Air Refueling Wing in Milwaukee, WI, Larry and Diane
          retired from the military and ventured into small business entrepreneurship. After its establishment and
          continued growth, <Link to={ROUTES.TEAM.path}>new staff was hired</Link>, more office space was added, and the
          firm began to accomplish what most small businesses envy – that is growth, dedicated clients, quality service,
          and an excellent reputation in a great community. In 1989, Diane and Larry retired and their daughter{' '}
          <strong>Lisa Pugel</strong>, began actively managing the <strong>South Milwaukee</strong> location.
        </p>
        <p>
          Lisa brought new services to the firm which included comprehensive financial and tax planning, payroll and
          small business bookkeeping, insurance services, education planning and estate planning. All of these services
          are still provided today by a dedicated staff with decades of experience.
        </p>
      </Section>
      <Section color="primary-dark">
        <h2>Today</h2>
        <p>
          To date, the firm has processed more than{' '}
          <strong>60,000 Personal Income Tax, Corporate, Partnership, Proprietorship, and Fiduciary Tax Returns</strong>
          . We not only prepare these returns, but we stand behind them with 100% accuracy guarantee. No additional
          insurance is required to be purchased because DB Tax &amp; Wealth provides this guarantee at no extra cost to
          our clients. We have Enrolled Agents on staff to represent clients in any situation. Our staff has either
          begun the process or passed the <strong>IRS Special Enrollment Examination (SEE)</strong> process to become an
          Enrolled Agent. This 3 part examinations provides us the privilege of practicing (representing taxpayers)
          before the Internal Revenue Service. Enrolled agents, like attorneys and{' '}
          <strong>certified public accountants (CPAs)</strong>, are unrestricted as to which taxpayers they can
          represent, what types of tax matters they can handle, and which IRS offices they can practice before.
        </p>
        <p>
          After being in business for more than 25 years, we find{' '}
          <Link to={ROUTES.MISSION_STATEMENT.path}>our mission</Link> remains maintaining superior client relationships
          while giving our clients the confidence they need to provide us with quality referrals. To those existing
          clients, thank you for your continued support. For those looking to build a new relationship, we would love to
          have the opportunity to work with you!
        </p>
      </Section>
    </Screen>
  );
};
