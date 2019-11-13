import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Section } from 'components/layout/section/section';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { TEAM_MEMBERS } from 'constants/team-members';
import { Hero } from 'components/layout/hero/hero';
import { ROUTES } from 'constants/routes';
import { TeamMember } from './team-member/team-member';

const teamMembers = TEAM_MEMBERS.map(({ description, email, fax, id, img, name, phone, title }) => (
  <Column widthMd={6} key={name} className="margin--bottom display--flex">
    <TeamMember
      description={description}
      email={email}
      fax={fax}
      id={id}
      img={img}
      name={name}
      phone={phone}
      title={title}
    />
  </Column>
));

export const Team = () => {
  return (
    <Screen metaTitle={ROUTES.TEAM.title}>
      <Hero title="Meet the Team" subtitle={ROUTES.ABOUT.title}>
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
