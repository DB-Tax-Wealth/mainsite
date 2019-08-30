import React from 'react';
import { Screen } from 'components/screen/screen';
import { Hero } from 'components/hero/hero';
import heroImage from 'images/man-fishing.jpg';
import { Section } from 'components/section/section';
import { Grid } from 'components/grid/grid';
import { Row } from 'components/grid/row/row';
import { Column } from 'components/grid/column/column';
import { Icon } from 'components/icon/icon';
import { Image } from 'components/image/image';
import { CircularProgressIndicator } from 'components/circular-progress-indicator/circular-progress-indicator';
import { FloatSection } from 'components/float-section/float-section';
import { IconButton } from 'components/icon-button/icon-button';

const HIGHEST_GROSSING_MOVIES = [
  {
    rank: 1,
    peak: 1,
    title: 'Avatar',
    worldwideGross: '$2,787,965,087',
    year: 2009
  },
  {
    rank: 2,
    peak: 2,
    title: 'Avengers: Endgame',
    worldwideGross: '$2,238,487,456',
    year: 2019
  },
  {
    rank: 3,
    peak: 1,
    title: 'Titanic',
    worldwideGross: '$2,187,463,944',
    year: 1997
  },
  {
    rank: 4,
    peak: 3,
    title: 'Star Wars: The Force Awakens',
    worldwideGross: '$2,068,223,624',
    year: 2015
  },
  {
    rank: 5,
    peak: 4,
    title: 'Avengers: Infinity War',
    worldwideGross: '$2,048,359,754',
    year: 2018
  },
  {
    rank: 6,
    peak: 3,
    title: 'Jurassic World',
    worldwideGross: '$1,671,713,208',
    year: 2015
  },
  {
    rank: 7,
    peak: 3,
    title: 'The Avengers',
    worldwideGross: '$1,518,812,988',
    year: 2012
  },
  {
    rank: 8,
    peak: 4,
    title: 'Furious 7',
    worldwideGross: '$1,516,045,911',
    year: 2015
  },
  {
    rank: 9,
    peak: 5,
    title: 'Avengers: Age of Ultron',
    worldwideGross: '$1,405,403,694',
    year: 2015
  },
  {
    rank: 10,
    peak: 9,
    title: 'Black Panther',
    worldwideGross: '$1,346,913,161',
    year: 2018
  }
];

export const Demo = () => {
  const movieRows = HIGHEST_GROSSING_MOVIES.map(movie => {
    return (
      <tr key={movie.rank}>
        <td>{movie.rank}</td>
        <td>{movie.peak}</td>
        <td>{movie.title}</td>
        <td className="text-align--right">{movie.worldwideGross}</td>
        <td className="text-align--right">{movie.year}</td>
      </tr>
    );
  });

  return (
    <Screen>
      <Hero image={heroImage} title="Demonstration Content" subtitle="A Demonstration" subtitleColor="primary-dark">
        <p>
          This top section is a <strong>Hero</strong> component. It has props to support changing the color of the
          subtitle, as well as add an additional button.
        </p>
      </Hero>
      <Section>
        <Grid className="padding--horizontal--none">
          <h2 className="border--bottom padding--bottom--half margin--bottom">The Section</h2>
          <Row>
            <Column widthMd={8} className="margin--xs--bottom margin--md--bottom--none">
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
            </Column>
            <Column widthMd={4}>
              <div className="color-background--primary-light padding--all border-radius--all">
                <h4>
                  <Icon name="question-circle" type="outline" className="margin--right--half color--primary-dark" />
                  Helpful Hint
                </h4>
                <p>
                  The <strong>Section</strong> component has an optional <code>color</code> prop. The <code>color</code>{' '}
                  prop will change the background of the Section, as well as the color of it&apos;s content to fit with
                  the updated background color.
                </p>
                <p>
                  Check out the section below. It is a <strong>Section</strong> component with the <code>color</code>{' '}
                  prop set to <em>&quot;primary&quot;</em>.
                </p>
              </div>
            </Column>
          </Row>
        </Grid>
      </Section>
      <Section color="primary">
        <Grid className="padding--horizontal--none">
          <h2 className="border--bottom padding--bottom--half margin--bottom">A Section with Custom Color</h2>
          <Row>
            <Column widthMd={8} className="margin--xs--bottom margin--md--bottom--none">
              <p>
                This is also a <code>{'<Section />'}</code> component. But it&apos;s a different color. To adjust the
                color of the <strong>Section</strong>, simply change it&apos;s <code>color</code> prop to one of the
                values in the <strong>Color Options</strong> list. This particular Section has a color prop of{' '}
                <strong>&quot;primary&quot;</strong>.
              </p>
              <p>
                Note that there&apos;s more color options available than just the ones in the{' '}
                <strong>Color Options</strong> list; however, there&apos;s not as many use-cases for non-listed colors.
                If you&apos;re interested in seeing all available color options, check out the <code>$colors</code>{' '}
                object in <code>variables.scss</code>.
              </p>
            </Column>
            <Column widthMd={4}>
              <div className="color-background--white color--type padding--all border-radius--all">
                <h4 className="color--type">
                  <Icon name="fill-drip" className="color--primary-dark margin--right--half" />
                  Color Options
                </h4>
                <div>
                  <div
                    className="display--inline-block margin--right--half color-background--primary  border-radius--all"
                    style={{ height: '1rem', width: '1rem' }}
                  />{' '}
                  primary
                </div>
                <div>
                  <div
                    className="display--inline-block margin--right--half color-background--primary-light  border-radius--all"
                    style={{ height: '1rem', width: '1rem' }}
                  />{' '}
                  primary-light
                </div>
                <div>
                  <div
                    className="display--inline-block margin--right--half color-background--primary-dark  border-radius--all"
                    style={{ height: '1rem', width: '1rem' }}
                  />{' '}
                  primary-dark
                </div>
                <div>
                  <div
                    className="display--inline-block margin--right--half color-background--secondary border-radius--all"
                    style={{ height: '1rem', width: '1rem' }}
                  />{' '}
                  secondary
                </div>
                <div>
                  <div
                    className="display--inline-block margin--right--half color-background--tertiary border-radius--all"
                    style={{ height: '1rem', width: '1rem' }}
                  />{' '}
                  tertiary
                </div>
                <div>
                  <div
                    className="display--inline-block margin--right--half color-background--quaternary border-radius--all"
                    style={{ height: '1rem', width: '1rem' }}
                  />{' '}
                  quaternary
                </div>
              </div>
            </Column>
          </Row>
        </Grid>
      </Section>
      <FloatSection spacerHeight="2rem" shadowColor="primary" spacerColor="primary-light">
        <div className="display--flex">
          <IconButton iconName="check" iconType="solid" color="secondary" />
          <div className="margin--left" style={{ flex: 1 }}>
            <p className="margin--top--half">
              This is a <code>{'<FloatSection />'}</code> component. It doesn&apos;t really do anything, but kind of
              breaks up page content in an interesting way on the desktop.
            </p>
          </div>
        </div>
      </FloatSection>
      <Section color="primary-light">
        <h2 className="border--bottom padding--bottom--half margin--bottom">The Image</h2>
        <p>
          This project includes an <code>{'<Image />'}</code> to help make images act more consistently with layout
          without much effort. The <strong>Image</strong> component makes <code>{'<img />'}</code> elements
          automatically act like block elements, as well as applies a <code>border-radius</code> to make the images fit
          the branding style.
        </p>
        <p>
          <strong>Note:</strong> Remember to add an <code>alt</code> prop value to all <strong>Image</strong>{' '}
          components.
        </p>
        <Grid className="padding--horizontal--none">
          <Row>
            <Column widthMd={8} className="margin--xs--bottom margin--md--bottom--none">
              <Image
                src="https://fthmb.tqn.com/9n3YM4RVKSWyUWQ0JCl7BwHrl1U=/4288x2848/filters:fill(auto,1)/loaf-of-bread-182835505-58a7008c5f9b58a3c91c9a14.jpg"
                alt="Bread"
              />
            </Column>
            <Column widthMd={4}>
              <div className="color-background--white color--type padding--all border-radius--all">
                <h4 className="color--type">
                  <Icon name="image" className="color--primary-dark margin--right--half" />
                  Preloading
                </h4>
                <p>
                  By default, the <code>{'<Image />'}</code> component will show a{' '}
                  <code>{'<CircularProgressIndicator />'}</code> until the image has loaded.
                </p>
                <div>
                  <CircularProgressIndicator className="margin--horizontal--auto" />
                </div>
              </div>
            </Column>
          </Row>
        </Grid>
      </Section>
      <FloatSection spacerHeight="2rem" shadowColor="primary" spacerColor="white">
        <div className="display--flex">
          <IconButton iconName="check" iconType="solid" color="secondary" />
          <div className="margin--left" style={{ flex: 1 }}>
            <p className="margin--top--half">
              Here&apos;s another <strong>Float Section</strong> for fun. When implementing these be sure to pay
              attention to the <code>spacerHeight</code> and <code>spacerColor</code> props.
            </p>
          </div>
        </div>
      </FloatSection>
      <Section>
        <h2 className="border--bottom padding--bottom--half margin--bottom">The Grid</h2>
        <p>
          This <code>{'<Grid />'}</code>, <code>{'<Row />'}</code>, and <code>{'<Column />'}</code> components are based
          off of{' '}
          <a href="https://getbootstrap.com/docs/4.3/layout/grid/" target="_blank" rel="noreferrer noopener">
            Twitter Bootstrap&apos;s grid
          </a>
          .
        </p>
        <Grid className="padding--horizontal--none">
          <Row>
            <Column widthMd={8} className="margin--xs--bottom margin--md--bottom--none">
              <h3>Column 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus efficitur, accumsan sem eget,
                cursus ligula. Quisque eget nisl in elit semper suscipit eget eu risus. Integer at lectus eget lacus
                consectetur finibus ac ut libero. Quisque et arcu facilisis, dapibus eros et, fringilla turpis. Cras vel
                ipsum non leo pellentesque auctor non quis nulla. Quisque at bibendum augue, id tincidunt nulla.
              </p>
              <h4>This is a Table for Demo Purposes</h4>
              <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Peak</th>
                    <th>Title</th>
                    <th className="text-align--right">Worldwide Gross</th>
                    <th className="text-align--right">Year</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th colSpan="5">
                      Source:{' '}
                      <a
                        href="https://en.wikipedia.org/wiki/List_of_highest-grossing_films"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        wikipedia.org
                      </a>
                    </th>
                  </tr>
                </tfoot>
                <tbody>{movieRows}</tbody>
              </table>
              <h4>A Heading for Demo Purposes</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus efficitur, accumsan sem eget,
                cursus ligula. Quisque eget nisl in elit semper suscipit eget eu risus. Integer at lectus eget lacus
                consectetur finibus ac ut libero. Quisque et arcu facilisis, dapibus eros et, fringilla turpis. Cras vel
                ipsum non leo pellentesque auctor non quis nulla. Quisque at bibendum augue, id tincidunt nulla.
                Vestibulum sit amet mollis tortor. Curabitur hendrerit eget nisl sit amet ullamcorper. In turpis nunc,
                rutrum at eleifend at, commodo vel tellus. Aenean leo dui, rhoncus at elit sed, posuere volutpat erat.
                Quisque mi libero, imperdiet quis euismod nec, lobortis nec nunc. Vivamus at eros id elit mollis
                ultrices et ut massa.
              </p>
            </Column>
            <Column widthMd={4}>
              <h3>Column 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus efficitur, accumsan sem eget,
                cursus ligula. Quisque eget nisl in elit semper suscipit eget eu risus. Integer at lectus eget lacus
                consectetur finibus ac ut libero. Quisque et arcu facilisis, dapibus eros et, fringilla turpis. Cras vel
                ipsum non leo pellentesque auctor non quis nulla. Quisque at bibendum augue, id tincidunt nulla.
                Vestibulum sit amet mollis tortor. Curabitur hendrerit eget nisl sit amet ullamcorper.
              </p>
            </Column>
          </Row>
        </Grid>
      </Section>
    </Screen>
  );
};
