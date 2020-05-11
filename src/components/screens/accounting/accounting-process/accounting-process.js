import React, { Component } from 'react';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';

import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { ProcessWheel } from 'components/process-wheel/process-wheel';
import { Icon } from 'components/layout/icon/icon';
import HeroImage from 'images/magazine-in-hands.jpg';
import { AccountingProcessGoals } from 'components/screens/accounting/accounting-process/accounting-process-goals/accounting-process-goals';
import { AccountingProcessOrganize } from 'components/screens/accounting/accounting-process/accounting-process-organize/accounting-process-organize';
import { AccountingProcessWorkTogether } from 'components/screens/accounting/accounting-process/accounting-process-work-together/accounting-process-work-together';
import { AccountingProcessPlan } from 'components/screens/accounting/accounting-process/accounting-process-plan/accounting-process-plan';
import { ROUTES } from 'constants/routes';
import { ScreenConnected } from 'components/layout/screen/screen.connected';

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
        content: <AccountingProcessGoals />,
        icon: 'file-contract',
        label: '1) Contact Us',
        message: 'Own a business or starting a new one?',
        onClick: () => this.handleOnSectionClick(0),
      },
      {
        content: <AccountingProcessOrganize />,
        icon: 'users',
        label: '2) Organize',
        message: 'Get organized',
        onClick: () => this.handleOnSectionClick(1),
      },
      {
        content: <AccountingProcessWorkTogether />,
        icon: 'search',
        label: '3) Work Together',
        message: 'How we work together',
        onClick: () => this.handleOnSectionClick(2),
      },
      {
        content: <AccountingProcessPlan />,
        icon: 'signal',
        label: '4) Plan',
        message: 'Plan for the future',
        onClick: () => this.handleOnSectionClick(3),
      },
    ];

    return (
      <ScreenConnected metaTitle={ROUTES.ACCOUNTING_PROCESS.title} metaDescription={ROUTES.ACCOUNTING.description}>
        <Hero title="Our Onboarding Process" subtitle="Accounting" image={HeroImage}>
          <p>
            DB Tax & Wealth is a one-stop shop for your payroll, bookkeeping and accounting needs. Our experienced team
            understands and addresses the risks and opportunities of owning a small business. Our passion is to help you
            get your business on track. Explore our Accounting Wheel to learn more.
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
