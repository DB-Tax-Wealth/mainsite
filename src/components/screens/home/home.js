import { GoogleMap } from 'components/screens/home/google-map/google-map';
import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { SectionWithTextAndImage } from 'components/layout/section-with-text-and-image/section-with-text-and-image';
import womanManFinancialConsulting from 'images/woman-man-financial-consulting.jpg';
import { ServiceList } from 'components/screens/home/service-list/service-list';
import { ServiceListItem } from 'components/screens/home/service-list/service-list-item/service-list-item';
import { Section } from 'components/layout/section/section';
import { HeadingWithSubtitle } from 'components/layout/heading-with-subtitle/heading-with-subtitle';
import { Hero } from 'components/layout/hero/hero';
import heroImage from 'images/woman-using-financial-app.jpg';
import { FloatSection } from 'components/layout/float-section/float-section';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { IconButton } from 'components/layout/icon-button/icon-button';
import { ROUTES } from 'constants/routes';

export const Home = () => {
  return (
    <Screen>
      <Hero
        image={heroImage}
        title="Don't buy the hype."
        subtitle="Client Resources"
        // eslint-disable-next-line no-console
        buttonOnClick={() => console.log('TODO')}
      >
        <p>There are a lot of misconceptions about Social Security. Here&apos;s the truth about three of them.</p>
      </Hero>
      <FloatSection spacerHeight="4rem" spacerColor="primary-light">
        <Grid className="padding--horizontal--none">
          <Row>
            <Column widthMd={4} className="margin--xs--bottom margin--md--bottom--none">
              <div className="display--flex">
                <IconButton iconName="bullseye" iconType="solid" />
                <div className="margin--left">
                  <strong>Once upon a goal...</strong>
                  <p className="margin--top--half">Do you know how to set up your financial goals for success?</p>
                </div>
              </div>
            </Column>
            <Column widthMd={4} className="margin--xs--bottom margin--md--bottom--none">
              <div className="display--flex">
                <IconButton iconName="list-ol" iconType="solid" color="secondary" />
                <div className="margin--left">
                  <strong>Your bucket list</strong>
                  <p className="margin--top--half">Do you know how to set up your financial goals for success?</p>
                </div>
              </div>
            </Column>
            <Column widthMd={4}>
              <div className="display--flex">
                <IconButton iconName="dollar-sign" iconType="solid" color="tertiary" />
                <div className="margin--left">
                  <strong>You&apos;ve got money!</strong>
                  <p className="margin--top--half">Do you know how to set up your financial goals for success?</p>
                </div>
              </div>
            </Column>
          </Row>
        </Grid>
      </FloatSection>
      <Section color="primary-light">
        <div className="max-width--sm margin--horizontal--auto text-align--center">
          <HeadingWithSubtitle subtitle="Services">
            We&apos;re here to help you reach your financial success
          </HeadingWithSubtitle>
          <p className="color--quaternary-light margin--bottom">
            We want to learn more about your personal situation, identify your dreams and goals, and understand your
            tolerance for risk.
          </p>
        </div>
        <ServiceList>
          <ServiceListItem iconName="coins" title="Taxes" to={ROUTES.TAX}>
            <p>
              We provide both businesses or persons with the professional taxation expertise and know how that they
              deserve year round.
            </p>
          </ServiceListItem>
          <ServiceListItem iconName="search-dollar" title="Wealth" to={ROUTES.WEALTH}>
            <p>We will ensure that your financial records are maintained correctly and accurately.</p>
          </ServiceListItem>
          <ServiceListItem iconName="money-check-alt" title="Accounting" to={ROUTES.ACCOUNTING}>
            <p>We provide our clients with value added accounting and outsourcing services for their businesses.</p>
          </ServiceListItem>
        </ServiceList>
      </Section>
      <FloatSection spacerHeight="2rem" shadowColor="primary-dark">
        <div className="display--flex">
          <IconButton iconName="check" iconType="solid" color="secondary" />
          <div className="margin--left" style={{ flex: 1 }}>
            <p className="margin--top--half">
              Investment and financial planning services are offered by Lisa Pugel through her affiliation with HD Vest
            </p>
          </div>
        </div>
      </FloatSection>
      <SectionWithTextAndImage
        image={womanManFinancialConsulting}
        subtitle="About"
        subtitleColor="white"
        title="Mission Statement"
      >
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
