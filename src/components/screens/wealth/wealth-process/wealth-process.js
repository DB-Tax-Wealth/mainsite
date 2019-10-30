import React, { Component } from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';

import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { ProcessWheel } from 'components/process-wheel/process-wheel';
import { Icon } from 'components/layout/icon/icon';
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
        label: 'Understand Goals',
        message: 'Know Your Financial Position',
        onClick: () => this.handleOnSectionClick(0)
      },
      {
        content: <WealthProcessTeam />,
        icon: 'users',
        label: 'Meet Your Team',
        message: 'Define the Relationship',
        onClick: () => this.handleOnSectionClick(1)
      },
      {
        content: <WealthProcessPlan />,
        icon: 'search',
        label: 'Build a Plan',
        message: 'Understand Client Goals',
        onClick: () => this.handleOnSectionClick(2)
      },
      {
        content: <WealthProcessMonitor />,
        icon: 'signal',
        label: 'Monitor',
        message: 'Update Your Goals',
        onClick: () => this.handleOnSectionClick(3)
      }
    ];

    return (
      <Screen>
        <Hero title="Process" subtitle="Wealth">
          <p>
            A solid financial strategy can help you pursue financial independence. But to be truly effective, any
            financial strategy must be customized to your unique situation.
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
