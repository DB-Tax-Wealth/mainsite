import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Section } from 'components/layout/section/section';
import { Hero } from 'components/layout/hero/hero';
import heroImage from 'images/hand-with-glasses.jpg';
import { COMPANY_NAME } from 'constants/company-name';
import { ROUTES } from 'constants/routes';

export const Careers = () => {
  return (
    <Screen metaTitle={ROUTES.CAREERS.title}>
      <Hero image={heroImage} title="A Future With Us" subtitle={ROUTES.CAREERS.title}>
        <p>
          We are passionate about finding the best talent to join our organization and building long-term partnerships
          with those who come on board.
        </p>
      </Hero>
      <Section color="primary-light">
        <h2>Career Opportunities</h2>
        <p>
          <strong>{COMPANY_NAME}</strong> has a commitment to the recruitment and retention of top talent. We also
          strive to manage and grow our talent. We take time to find candidates with the right professional background
          who are a strong cultural fit for
          {COMPANY_NAME}. We are passionate about finding the best talent to join our organization and building
          long-term partnerships with those who come on board.
        </p>
      </Section>
      <Section color="primary">
        <h2>Current Job Openings</h2>
        <p>
          There are currently no job openings at <strong>{COMPANY_NAME}</strong>.
        </p>
      </Section>
    </Screen>
  );
};
