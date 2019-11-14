import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Section } from 'components/layout/section/section';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { TEAM_MEMBERS } from 'constants/team-members';
import { Hero } from 'components/layout/hero/hero';
import { TeamMember } from './team-member/team-member';

const teamMembers = TEAM_MEMBERS.map(({ shortBio, id, img, name, title }) => (
  <Column widthMd={4} widthLg={3} key={name} className="margin--bottom display--flex">
    <TeamMember shortBio={shortBio} id={id} img={img} name={name} title={title} />
  </Column>
));

export const Team = () => {
  return (
    <Screen>
      <Hero title="Meet the Team" subtitle="About">
        <p>
          We believe our team oriented approach adds a broader perspective to all we do and provides increased benefits
          to our clients.
        </p>
      </Hero>
      <Section color="primary-light">
        <Grid className="padding--horizontal--none">
          <Row>{teamMembers}</Row>
        </Grid>
      </Section>
    </Screen>
  );
};
