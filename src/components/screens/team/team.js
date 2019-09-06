import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Section } from 'components/layout/section/section';
import { HeadingWithSubtitle } from 'components/layout/heading-with-subtitle/heading-with-subtitle';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { TEAM_MEMBERS } from 'constants/team-members';
import { TeamMember } from './team-member/team-member';

const teamMembers = TEAM_MEMBERS.map(({ description, email, fax, img, name, phone, title }) => (
  <Column widthMd={6} key={name} className="margin--bottom display--flex">
    <TeamMember description={description} email={email} fax={fax} img={img} name={name} phone={phone} title={title} />
  </Column>
));

export const Team = () => {
  return (
    <Screen>
      <Section>
        <HeadingWithSubtitle subtitle="About" subtitleColor="primary">
          Meet the Team
        </HeadingWithSubtitle>
        <p className="margin--top--none max-width--sm">
          We believe our team oriented approach adds a broader perspective to all we do and provides increased benefits
          to our clients.
        </p>
      </Section>
      <Section color="primary-light">
        <Grid className="padding--horizontal--none">
          <Row>{teamMembers}</Row>
        </Grid>
      </Section>
    </Screen>
  );
};
