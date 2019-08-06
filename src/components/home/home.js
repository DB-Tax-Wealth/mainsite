import { GoogleMap } from 'components/google-map/google-map';
import React from 'react';
import { Screen } from 'components/screen/screen';
import { SectionWithTextAndImage } from 'components/section-with-text-and-image/section-with-text-and-image';
import womanManFinancialConsulting from 'images/woman-man-financial-consulting.jpg';

export const Home = () => {
  return (
    <Screen>
      <SectionWithTextAndImage subtitle="About" title="Mission Statement" image={womanManFinancialConsulting}>
        <p>
          Our mission is to get to know and understand your needs, wants, and long-term goals. We want to help you
          develop, implement, and monitor a strategy that’s designed to address your individual situation.
        </p>
        <p>We understand the challenges families face today.</p>
        <p>
          From managing debt to saving for college to retirement, these personal finance challenges can be overwhelming.
          Our commitment is to utilize all of our resources to help you pursue your goals.
        </p>
        <p>
          We believe in thinking “out of the box” and we are not afraid to challenge conventional wisdom in our approach
          to investing and preserving wealth. All of our energy, commitment, and efforts are focused on you, the client,
          and your satisfaction.
        </p>
      </SectionWithTextAndImage>
      <GoogleMap />
    </Screen>
  );
};
