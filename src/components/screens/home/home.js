/* eslint-disable no-console */
import { GoogleMap } from 'components/screens/home/google-map/google-map';
import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { SectionWithTextAndImage } from 'components/layout/section-with-text-and-image/section-with-text-and-image';
import womanManFinancialConsulting from 'images/woman-man-financial-consulting.jpg';
import { ServiceList } from 'components/screens/home/service-list/service-list';
import { ServiceListItem } from 'components/screens/home/service-list/service-list-item/service-list-item';
import { Section } from 'components/layout/section/section';
import { HeadingWithSubtitle } from 'components/layout/heading-with-subtitle/heading-with-subtitle';
import { FloatSection } from 'components/layout/float-section/float-section';
import { IconButton } from 'components/layout/icon-button/icon-button';
import { ROUTES } from 'constants/routes';
import { Carousel } from 'components/layout/carousel/carousel';
import heroImage1 from 'images/woman-using-financial-app.jpg';
import heroImage2 from 'images/person-writing-down-plan.jpg';

const SLIDES = [
  {
    buttonOnClick: () => console.log('TODO'),
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue venenatis erat, nec lacinia libero
        scelerisque id.
      </p>
    ),
    iconName: 'bullseye',
    image: heroImage1,
    subtitle: 'Slide 1',
    title: 'This is title 1'
  },
  {
    buttonColor: 'secondary',
    buttonOnClick: () => console.log('TODO'),
    children: <p>Donec et purus justo. Aenean vel ex consectetur, viverra lectus eu, feugiat augue.</p>,
    iconName: 'list-ol',
    image: heroImage2,
    subtitle: 'Slide 2',
    title: 'This is title 2'
  },
  {
    buttonColor: 'tertiary',
    buttonOnClick: () => console.log('TODO'),
    children: (
      <p>
        Aliquam in pharetra dolor, et interdum risus. Nullam eu ligula congue, imperdiet quam a, laoreet lacus. Nam et
        ornare nisl, nec consequat lacus.
      </p>
    ),
    iconName: 'dollar-sign',
    image: womanManFinancialConsulting,
    subtitle: 'Slide 3',
    title: 'This is title 3'
  },
  {
    buttonColor: 'primary-dark',
    buttonOnClick: () => console.log('TODO'),
    children: (
      <p>
        Aliquam in pharetra dolor, et interdum risus. Nullam eu ligula congue, imperdiet quam a, laoreet lacus. Nam et
        ornare nisl, nec consequat lacus.
      </p>
    ),
    iconName: 'bullseye',
    image: heroImage2,
    subtitle: 'Slide 4',
    title: 'This is title 4'
  }
];

export const Home = () => {
  return (
    <Screen>
      <Carousel slides={SLIDES} />
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
          <ServiceListItem iconName="coins" title="Taxes" to={ROUTES.TAX.path}>
            <p>
              We provide both businesses or persons with the professional taxation expertise and know how that they
              deserve year round.
            </p>
          </ServiceListItem>
          <ServiceListItem iconName="search-dollar" title="Wealth" to={ROUTES.WEALTH.path}>
            <p>We will ensure that your financial records are maintained correctly and accurately.</p>
          </ServiceListItem>
          <ServiceListItem iconName="money-check-alt" title="Accounting" to={ROUTES.ACCOUNTING.path}>
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
