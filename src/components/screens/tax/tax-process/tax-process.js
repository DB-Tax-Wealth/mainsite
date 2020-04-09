import React, { Component } from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';

import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { ProcessWheel } from 'components/process-wheel/process-wheel';
import { Icon } from 'components/layout/icon/icon';
import HeroImage from 'images/person-writing-down-plan.jpg';
import { TaxProcessGoals } from 'components/screens/tax/tax-process/tax-process-goals/tax-process-goals';
import { TaxProcessOrganize } from 'components/screens/tax/tax-process/tax-process-organize/tax-process-organize';
import { TaxProcessWorkTogether } from 'components/screens/tax/tax-process/tax-process-work-together/tax-process-work-together';
import { TaxProcessPlan } from 'components/screens/tax/tax-process/tax-process-plan/tax-process-plan';

export class TaxProcess extends Component {
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
        content: <TaxProcessGoals />,
        icon: 'file-contract',
        label: '1) File',
        message: 'It is time to file your taxes',
        onClick: () => this.handleOnSectionClick(0),
      },
      {
        content: <TaxProcessOrganize />,
        icon: 'users',
        label: '2) Organize',
        message: 'Get organized',
        onClick: () => this.handleOnSectionClick(1),
      },
      {
        content: <TaxProcessWorkTogether />,
        icon: 'search',
        label: '3) Work Together',
        message: 'How we work together',
        onClick: () => this.handleOnSectionClick(2),
      },
      {
        content: <TaxProcessPlan />,
        icon: 'signal',
        label: '4) Plan',
        message: 'Plan for the future',
        onClick: () => this.handleOnSectionClick(3),
      },
    ];

    return (
      <Screen>
        <Hero title="Our Onboarding Process" subtitle="Tax" image={HeroImage}>
          <p>
            Our approach helps clients minimize one of life&apos;s most complicated and costly expenses: taxes. DB Tax &
            Wealth is equipped with tools, processes and platforms to accurately and efficiently combine tax planning
            and wealth management strategies to help optimize a clients&apos; financial success. Explore our Tax Wheel
            to learn more.
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
