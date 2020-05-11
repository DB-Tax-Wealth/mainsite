import React, { Component } from 'react';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';

import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { ProcessWheel } from 'components/process-wheel/process-wheel';
import { Icon } from 'components/layout/icon/icon';
import HeroImage from 'images/person-holding-pen.jpg';
import { ROUTES } from 'constants/routes';
import { ScreenConnected } from 'components/layout/screen/screen.connected';
import { WealthProcessGoals } from './wealth-process-goals/wealth-process-goals';
import { WealthProcessTeam } from './wealth-process-team/wealth-process-team';
import { WealthProcessPlan } from './wealth-process-plan/wealth-process-plan';
import { WealthProcessMonitor } from './wealth-process-monitor/wealth-process-monitor';

export class WealthProcess extends Component {
  constructor(props) {
    super(props);
    this.state = { activeProcessIndex: 0 };
  }

  handleOnSectionClick(activeProcessIndex) {
    this.setState({ activeProcessIndex });
  }

  render() {
    const { activeProcessIndex } = this.state;

    const processes = [
      {
        content: <WealthProcessGoals />,
        icon: 'file-contract',
        label: '1) Understand Goals',
        message: 'Understand your goals and financial position',
        onClick: () => this.handleOnSectionClick(0),
      },
      {
        content: <WealthProcessTeam />,
        icon: 'users',
        label: '2) Prepare',
        message: 'Prepare to meet your team',
        onClick: () => this.handleOnSectionClick(1),
      },
      {
        content: <WealthProcessPlan />,
        icon: 'search',
        label: '3) Plan',
        message: 'Build financial plan',
        onClick: () => this.handleOnSectionClick(2),
      },
      {
        content: <WealthProcessMonitor />,
        icon: 'signal',
        label: '4) Monitor',
        message: 'Monitor and update your goals',
        onClick: () => this.handleOnSectionClick(3),
      },
    ];

    return (
      <ScreenConnected metaTitle={ROUTES.WEALTH_PROCESS.title} metaDescription={ROUTES.WEALTH.description}>
        <Hero title="Our Onboarding Process" subtitle="Wealth" image={HeroImage}>
          <p>
            At DB Tax & Wealth, we integrate tax information for a comprehensive picture. Our unique approach allows the
            advisors to peek around corners, find hidden opportunities, and provide maximum clarity. Explore our Wealth
            Wheel to learn more.
          </p>
        </Hero>
        <Section color="primary-light">
          <Grid className="padding--horizontal--none">
            <Row>
              <Column widthMd={5} className="margin--xs--bottom margin--md--bottom--none">
                <ProcessWheel sections={processes} activeIndex={activeProcessIndex} />
              </Column>
              <Column offsetMd={1} widthMd={6} className="display--flex">
                <div className="border-radius--all color-background--white padding--all shadow--primary">
                  <h3 className="margin--bottom--none">
                    <Icon name={processes[activeProcessIndex].icon} /> {processes[activeProcessIndex].label}
                  </h3>
                  <h5 className="margin--top--half">{processes[activeProcessIndex].message}</h5>
                  {processes[activeProcessIndex].content}
                </div>
              </Column>
            </Row>
          </Grid>
        </Section>
      </ScreenConnected>
    );
  }
}
