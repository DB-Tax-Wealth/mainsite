import React from 'react';
import { Screen } from 'components/screen/screen';
import { Hero } from 'components/hero/hero';
import heroImage from 'images/man-fishing.jpg';
import { Section } from 'components/section/section';
import { Grid } from 'components/grid/grid';
import { Row } from 'components/grid/row/row';
import { Column } from 'components/grid/column/column';

export const Demo = () => {
  return (
    <Screen>
      <div className="color-background--white">
        <Hero image={heroImage} title="Demonstration Content" subtitle="A Demonstration">
          <p>This is a demonstration of all the different content options.</p>
        </Hero>
        <Section>
          <h2>The Section</h2>
          <p>
            This is a <code>{'<Section />'}</code> component. It&apos;s designed to a be a simpler container for
            content.
          </p>
          <h3>Max-Width</h3>
          <p>
            The <strong>Section</strong> component will automatically limit it&apos;s children content to the
            project&apos; <code>max-width</code> variable. Not only will this help keep content consistent across
            screens, but also prevent content from obnoxiously spanning across the entire screen on larger devices.
          </p>
          <h3>Padding</h3>
          <p>
            In addition to limiting the <code>max-width</code>, the Section component will wrap it&apos; children
            content with the project&apos;s standard <code>padding</code> variable.
          </p>
        </Section>
        <Section color="primary">
          <h2>A Section with a custom Color</h2>
          <p>
            This is also a <code>{'<Section />'}</code> component. But it&apos;s a different color. To adjust the color
            of the <strong>Section</strong>, simply change it&apos;s <code>color</code> prop to one of the values set in{' '}
            <code>variables.scss</code>. This particular Section has a color prop of{' '}
            <strong>&quot;primary&quot;</strong>.
          </p>
        </Section>
        <Section>
          <h2>The Grid</h2>
          <p>
            This <code>{'<Grid />'}</code>, <code>{'<Row />'}</code>, and <code>{'<Column />'}</code> components are
            based off of{' '}
            <a href="https://getbootstrap.com/docs/4.3/layout/grid/" target="_blank" rel="noreferrer noopener">
              Twitter Bootstrap&apos;s grid
            </a>
            .
          </p>
          <Grid className="padding--horizontal--none">
            <Row>
              <Column widthMd={8} className="margin--xs--bottom margin--md--bottom--none">
                <h4>Column 1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus efficitur, accumsan sem eget,
                  cursus ligula. Quisque eget nisl in elit semper suscipit eget eu risus. Integer at lectus eget lacus
                  consectetur finibus ac ut libero. Quisque et arcu facilisis, dapibus eros et, fringilla turpis. Cras
                  vel ipsum non leo pellentesque auctor non quis nulla. Quisque at bibendum augue, id tincidunt nulla.
                </p>
                <h5>Heading</h5>
                <p>
                  Vestibulum sit amet mollis tortor. Curabitur hendrerit eget nisl sit amet ullamcorper. In turpis nunc,
                  rutrum at eleifend at, commodo vel tellus. Aenean leo dui, rhoncus at elit sed, posuere volutpat erat.
                  Quisque mi libero, imperdiet quis euismod nec, lobortis nec nunc. Vivamus at eros id elit mollis
                  ultrices et ut massa.
                </p>
                <h5>Heading</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus efficitur, accumsan sem eget,
                  cursus ligula. Quisque eget nisl in elit semper suscipit eget eu risus. Integer at lectus eget lacus
                  consectetur finibus ac ut libero. Quisque et arcu facilisis, dapibus eros et, fringilla turpis. Cras
                  vel ipsum non leo pellentesque auctor non quis nulla. Quisque at bibendum augue, id tincidunt nulla.
                  Vestibulum sit amet mollis tortor. Curabitur hendrerit eget nisl sit amet ullamcorper. In turpis nunc,
                  rutrum at eleifend at, commodo vel tellus. Aenean leo dui, rhoncus at elit sed, posuere volutpat erat.
                  Quisque mi libero, imperdiet quis euismod nec, lobortis nec nunc. Vivamus at eros id elit mollis
                  ultrices et ut massa.
                </p>
              </Column>
              <Column widthMd={4}>
                <h4>Column 2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus efficitur, accumsan sem eget,
                  cursus ligula. Quisque eget nisl in elit semper suscipit eget eu risus. Integer at lectus eget lacus
                  consectetur finibus ac ut libero. Quisque et arcu facilisis, dapibus eros et, fringilla turpis. Cras
                  vel ipsum non leo pellentesque auctor non quis nulla. Quisque at bibendum augue, id tincidunt nulla.
                  Vestibulum sit amet mollis tortor. Curabitur hendrerit eget nisl sit amet ullamcorper. In turpis nunc,
                  rutrum at eleifend at, commodo vel tellus. Aenean leo dui, rhoncus at elit sed, posuere volutpat erat.
                  Quisque mi libero, imperdiet quis euismod nec, lobortis nec nunc. Vivamus at eros id elit mollis
                  ultrices et ut massa.
                </p>
              </Column>
            </Row>
          </Grid>
        </Section>
      </div>
    </Screen>
  );
};
