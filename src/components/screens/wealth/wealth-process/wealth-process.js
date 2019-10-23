import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Hero } from 'components/layout/hero/hero';
import { Section } from 'components/layout/section/section';

import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import styles from './wealth-process.style.scss';

export const WealthProcess = () => {
  const strokeWidth = 20;
  const sections = 6;

  const diameter = 100;
  const radius = diameter / 2;
  const radiusAdjusted = radius - strokeWidth / 2;
  const circumferenceAdjusted = Math.PI * (radiusAdjusted * 2);
  const radiusShift = circumferenceAdjusted / sections;

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
          <Row className="margin--bottom">
            <Column>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Ut pretium egestas dolor, quis suscipit arcu luctus nec. Donec pulvinar, orci faucibus pellentesque
                sodales, arcu augue pulvinar nulla, sit amet sodales urna enim eu tortor. Donec convallis odio et
                vestibulum hendrerit. Ut viverra euismod posuere.
              </p>
            </Column>
          </Row>
          <Row>
            <Column widthMd={5} className="margin--xs--bottom margin--md--bottom--none">
              <div className={styles.root}>
                <svg viewBox="0 0 100 100" className={styles.circle}>
                  {[...Array(sections)].map((x, index) => {
                    const strokeDasharray = [radiusShift, circumferenceAdjusted];
                    const strokeDashoffset = -radiusShift * index;
                    const pathId = `path-${index}`;

                    return (
                      <>
                        {/* <svg viewBox="0 0 500 500"> */}
                        <path
                          id={pathId}
                          fill="transparent"
                          d="
                                M 50, 50
                                a 25,25 0 1,1 50,0
                                a 25,25 0 1,1 -50,0
                              "
                        />
                        <text>
                          <textPath xlinkHref={`#${pathId}`}>Process 1</textPath>
                        </text>
                        {/* </svg> */}
                        <circle
                          cx="50%"
                          className={styles.section}
                          key={pathId}
                          cy="50%"
                          fill="none"
                          r={radiusAdjusted}
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          strokeWidth={strokeWidth}
                        />
                      </>
                    );
                  })}
                </svg>
                {/* <svg viewBox="0 0 100 100">
                    {[...Array(sections)].map((x, index) => {
                      const strokeDasharray = [radiusShift, circumferenceAdjusted];
                      const strokeDashoffset = -radiusShift * index;

                      return (
                        <>
                          <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                          <text width="500">
                            <textPath alignmentBaseline="top" xlinkHref="#curve">
                              Dangerous Curves Ahead
                            </textPath>
                          </text>
                        </>
                      );
                    })}
                  </svg> */}
              </div>
            </Column>
            <Column offsetMd={1} widthMd={6} className="display--flex">
              <div className="border-radius--all color-background--white padding--all shadow--primary">
                <h3>Lorem ipsum dolor sit amet</h3>
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
        {/* <div className={styles.root}>
            <svg viewBox="0 0 500 500">
              <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
              <text>
                <textPath xlinkHref="#curve">Process 1</textPath>
                <textPath xlinkHref="#curve">Process 1</textPath>
                <textPath xlinkHref="#curve">Process 1</textPath>
                <textPath xlinkHref="#curve">Process 1</textPath>
              </text>
            </svg>
          </div> */}
      </Section>
    </Screen>
  );
};
