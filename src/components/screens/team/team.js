import React from 'react';
import { Section } from 'components/layout/section/section';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { TEAM_MEMBERS } from 'constants/team-members';
import { Hero } from 'components/layout/hero/hero';
import { Image } from 'components/layout/image/image';
import TeamPhoto from 'images/db-tax-family-team.jpg';
import { ROUTES } from 'constants/routes';
import { ScreenConnected } from 'components/layout/screen/screen.connected';
import { TeamMember } from './team-member/team-member';

const teamMembers = TEAM_MEMBERS.map(({ shortBio, id, img, name, title }) => (
  <Column widthMd={4} widthLg={3} key={name} className="margin--bottom display--flex">
    <TeamMember shortBio={shortBio} id={id} img={img} name={name} title={title} />
  </Column>
));

export const Team = () => {
  return (
    <ScreenConnected metaTitle={ROUTES.TEAM.title} metaDescription={ROUTES.TEAM.description}>
      <Hero title="Meet the Team" subtitle="About">
        <p>
          We believe our team oriented approach adds a broader perspective to all we do and provides increased benefits
          to our clients.
        </p>
      </Hero>
      <Section color="primary">
        <Grid>
          <Row>
            <Column widthMd={6} className="margin--xs--bottom margin--md--bottom--none">
              <h2>The DB Tax Family</h2>
              <p>
                We believe our team oriented approach adds a broader perspective to all we do and provides increased
                benefits to our clients.
              </p>
              <p>
                Our experienced professionals have helped many people just like you with similar issues and concerns. We
                specialize in creating an approach that is designed to address your individual situation.
              </p>
            </Column>
            <Column widthMd={6}>
              <Image src={TeamPhoto} />
            </Column>
          </Row>
        </Grid>
      </Section>
      <Section color="primary-light">
        <Grid className="padding--horizontal--none">
          <Row>{teamMembers}</Row>
        </Grid>
      </Section>
    </ScreenConnected>
  );
};
