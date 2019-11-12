import React, { Component } from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';

import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { ProcessWheel } from 'components/process-wheel/process-wheel';
import { Icon } from 'components/layout/icon/icon';
import HeroImage from 'images/magazine-in-hands.jpg';
import { WealthProcessGoals } from 'components/screens/wealth/wealth-process/wealth-process-goals/wealth-process-goals';
import { WealthProcessTeam } from 'components/screens/wealth/wealth-process/wealth-process-team/wealth-process-team';
import { WealthProcessPlan } from 'components/screens/wealth/wealth-process/wealth-process-plan/wealth-process-plan';
import { WealthProcessMonitor } from 'components/screens/wealth/wealth-process/wealth-process-monitor/wealth-process-monitor';

export class AccountingProcess extends Component {
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
        message: 'Know Your Financial Position',
        onClick: () => this.handleOnSectionClick(0)
      },
      {
        content: <WealthProcessTeam />,
        icon: 'users',
        label: '2) Meet Your Team',
        message: 'Define the Relationship',
        onClick: () => this.handleOnSectionClick(1)
      },
      {
        content: <WealthProcessPlan />,
        icon: 'search',
        label: '3) Build a Plan',
        message: 'Understand Client Goals',
        onClick: () => this.handleOnSectionClick(2)
      },
      {
        content: <WealthProcessMonitor />,
        icon: 'signal',
        label: '4) Monitor',
        message: 'Update Your Goals',
        onClick: () => this.handleOnSectionClick(3)
      }
    ];

    return (
      <Screen>
        <Hero title="Our Onboarding Process" subtitle="Accounting" image={HeroImage}>
          <p>
            <strong>Becoming an Accounting Client</strong> Accounting can often be complex wheather you have many vast
            and varied assets, or just a few. We aim to streamline the process so that you can comfortably weigh your
            options and make the most appropriate decisions.
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
      </Screen>
    );
  }
}
