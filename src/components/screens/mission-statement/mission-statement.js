import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Section } from 'components/layout/section/section';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { Hero } from 'components/layout/hero/hero';

export const MissionStatement = () => {
  return (
    <Screen>
      <Hero title="Mission Statement" subtitle="About">
        <p>The client &amp; only the client in mind.</p>
      </Hero>
      <Section color="primary-light">
        <Grid className="padding--horizontal--none">
          <Row>
            <Column widthMd={8} widthLg={9} className="margin--xs--bottom margin--md--bottom--none">
              <p>
                At <strong>DB Tax &amp; Wealth</strong>, we have the client—and only the client—in mind.
              </p>
              <p>
                Our mission is to get to know and understand your needs, wants, and long-term goals. We want to help you
                develop, implement, and monitor a strategy that’s designed to address your individual situation.
              </p>
              <p>We understand the challenges families face today.</p>
              <p>
                From managing debt to saving for college to retirement, these personal finance challenges can be
                overwhelming. Our commitment is to utilize all of our resources to help you pursue your goals.
              </p>
              <p>
                We believe in thinking <em>&quot;out of the box&quot;</em> and we are not afraid to challenge
                conventional wisdom in our approach to investing and preserving wealth. All of our energy, commitment,
                and efforts are focused on you, the client, and your satisfaction.
              </p>
            </Column>
            <Column widthMd={4} widthLg={3}>
              <div className="border-radius--all color-background--white padding--all shadow--primary">
                <p>
                  Investment and financial planning services are offered by <strong>Lisa Pugel</strong> through her
                  affiliation with{' '}
                  <a href="https://www.hdvest.com/" target="_blank" rel="noopener noreferrer">
                    HD&nbsp;Vest
                  </a>
                  .
                </p>
              </div>
            </Column>
          </Row>
        </Grid>
      </Section>
    </Screen>
  );
};
