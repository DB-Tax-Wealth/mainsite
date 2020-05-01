import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Section } from 'components/layout/section/section';
import { HeadingWithSubtitle } from 'components/layout/heading-with-subtitle/heading-with-subtitle';
import { TEAM_MEMBERS } from 'constants/team-members';
import { find, get } from 'lodash';
import { convertPhoneNumberToTelLink } from 'util/convert-phone-number-to-tel-link/convert-phone-number-to-tel-link';
import { Icon } from 'components/layout/icon/icon';
import styles from './team-member-detail.style.scss';

export const TeamMemberDetail = (props) => {
  const id = parseInt(get(props, 'match.params.id'));
  const teamMember = find(TEAM_MEMBERS, { id });
  const { description, email, fax, img, name, phone, title } = teamMember;

  const phoneLink = convertPhoneNumberToTelLink(phone);
  const phoneExists = Boolean(phone);
  const emailExists = Boolean(email);
  const faxExists = Boolean(fax);
  const imageExists = Boolean(img);

  return (
    <Screen className={styles.root} metaTitle={name}>
      <Section>
        <div className="display--flex">
          {imageExists && (
            <div className={styles.avatar} style={{ flex: 1 }}>
              <img src={img} alt={name} />
            </div>
          )}
          <div style={{ flex: 4 }}>
            <HeadingWithSubtitle subtitle="Team" subtitleColor="primary">
              {name}
            </HeadingWithSubtitle>
            <div className="margin--top--none max-width--sm">
              <span>{title}</span>
              {phoneExists && (
                <div>
                  <a href={phoneLink} style={{ textDecoration: 'none' }}>
                    <Icon name="phone-alt" /> {phone}
                  </a>
                </div>
              )}
              {emailExists && (
                <div>
                  <a href={`mailto:${email}`} style={{ textDecoration: 'none' }}>
                    <Icon name="envelope" /> {email}
                  </a>
                </div>
              )}
              {faxExists && (
                <div>
                  <Icon name="fax" /> {fax}
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
      <Section color="primary-light">
        <h2>About</h2>
        <div style={{ whiteSpace: 'pre-line' }}>{description}</div>
      </Section>
    </Screen>
  );
};
