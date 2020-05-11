import React from 'react';
import { Section } from 'components/layout/section/section';
import { Hero } from 'components/layout/hero/hero';
import { ROUTES } from 'constants/routes';
import { ScreenConnected } from 'components/layout/screen/screen.connected';

export const FeeSchedule = () => {
  return (
    <ScreenConnected metaTitle={ROUTES.FEE_SCHEDULE.title}>
      <Hero title="Fee Schedule" subtitle="About" />
      <Section>
        <h3>2019 Tax Preparation Fee Schedule </h3>
        <p>Form 1040 $ 195.00 (Includes WI form 1)</p>
        <p>Form 1040X $ 50.00</p>
        <p>Schedule C starting @ $ 75.00 (Compilation fees begin @ $125/hour)</p>
        <p>Most other forms range between $20 and $60</p>
        <h3>Accounting and Payroll Fee Schedule</h3>
        <p>Monthly fees will be determined after a full consult with one of our Accounting Team members.</p>
        <p>Hourly rate for services are $150/hr</p>
        <p>Setup fees vary by form/site</p>
        <p>POA form $75 (unless otherwise included)</p>
      </Section>
    </ScreenConnected>
  );
};
