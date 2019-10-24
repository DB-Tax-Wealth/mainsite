import React, { Component } from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';

import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { ProcessWheel } from 'components/process-wheel/process-wheel';
import { Icon } from 'components/layout/icon/icon';

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
        label: 'Review',
        message: 'Monitor the Plan',
        icon: 'file-contract',
        onClick: () => this.handleOnSectionClick(0)
      },
      {
        label: 'Engage',
        message: 'Define the Relationship',
        icon: 'users',
        onClick: () => this.handleOnSectionClick(1)
      },
      {
        label: 'Collect',
        message: 'Understand Client Goals',
        icon: 'search',
        onClick: () => this.handleOnSectionClick(2)
      },
      { label: 'Analyze', message: 'Analyze & Evaluate', icon: 'signal', onClick: () => this.handleOnSectionClick(3) },
      { label: 'Design', message: 'Create & Revise', icon: 'lightbulb', onClick: () => this.handleOnSectionClick(4) }
      // {
      //   label: 'Implement',
      //   message: 'Implement Client Decisions',
      //   icon: 'cogs',
      //   onClick: () => this.handleOnSectionClick(5)
      // }
    ];

    return (
      <Screen>
        <Hero title="Process" subtitle="Wealth">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus magna, venenatis ut ligula eu, lobortis
            consectetur orci.
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
                  <p>
                    Ut pretium egestas dolor, quis suscipit arcu luctus nec. Donec pulvinar, orci faucibus pellentesque
                    sodales, arcu augue pulvinar nulla, sit amet sodales urna enim eu tortor.
                  </p>
                  <p>Donec convallis odio et vestibulum hendrerit. Ut viverra euismod posuere.</p>
                  <p>
                    Integer imperdiet placerat luctus. Vivamus dignissim finibus est vel fermentum. Sed ut lobortis sem.
                    Etiam a iaculis urna, sed rutrum ligula. Mauris volutpat, lorem sit amet aliquam lobortis, nibh elit
                    interdum erat, sed consectetur sapien nibh a nibh
                  </p>
                </div>
              </Column>
            </Row>
          </Grid>
        </Section>
      </Screen>
    );
  }
}
