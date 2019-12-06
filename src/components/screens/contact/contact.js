import React from 'react';

import { ADDRESS } from 'constants/address';
import { EMAIL } from 'constants/email';
import { FAX_NUMBER } from 'constants/fax-number';
import { PHONE_NUMBER } from 'constants/phone-number';
import PropTypes from 'prop-types';
import { convertPhoneNumberToTelLink } from 'util/convert-phone-number-to-tel-link/convert-phone-number-to-tel-link';
import { Screen } from 'components/layout/screen/screen';
import { Section } from 'components/layout/section/section';
import { Hero } from 'components/layout/hero/hero';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { GoogleMap } from 'components/screens/home/google-map/google-map';
import { Button } from 'components/layout/button/button';
import HeroImage from 'images/write-message.jpg';
import { ROUTES } from 'constants/routes';

const phoneLink = convertPhoneNumberToTelLink(PHONE_NUMBER);
const faxLink = convertPhoneNumberToTelLink(FAX_NUMBER);

export const Contact = props => {
  const { onHeroButtonClick } = props;

  return (
    <Screen metaTitle={ROUTES.CONTACT.title}>
      <Hero
        buttonLabel="Get in touch now"
        buttonOnClick={onHeroButtonClick}
        image={HeroImage}
        subtitle={ROUTES.CONTACT.title}
        title="Get in Touch"
      >
        <p>
          Feel free to reach out anytime at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </Hero>
      <Section color="white">
        <Grid className="padding--horizontal--none">
          <Row>
            <Column widthMd={6} widthLg={5} className="margin--xs--bottom margin--md--bottom--none">
              <div>
                <h2>South Milwaukee Office</h2>
                <Grid className="padding--horizontal--none margin--bottom">
                  <Row>
                    <Column widthMd={6} className="margin--xs--bottom margin--md--bottom--none">
                      <strong>Address:</strong>
                      <br />
                      <a href={ADDRESS.GOOGLE_MAPS} target="_blank" rel="noopener noreferrer">
                        {ADDRESS.STREET}
                        <br />
                        {ADDRESS.CITY}, {ADDRESS.STATE} · {ADDRESS.ZIP}
                      </a>
                    </Column>
                    <Column widthMd={6}>
                      <Grid className="padding--horizontal--none margin--bottom">
                        <Row>
                          <Column width={3}>
                            <strong>Phone:</strong>
                          </Column>
                          <Column width={9}>
                            <a href={phoneLink}>{PHONE_NUMBER}</a>
                          </Column>
                        </Row>
                        <Row>
                          <Column width={3}>
                            <strong>Fax:</strong>
                          </Column>
                          <Column width={9}>
                            <a href={faxLink}>{FAX_NUMBER}</a>
                          </Column>
                        </Row>
                      </Grid>
                    </Column>
                  </Row>
                </Grid>
                <Button style={{ width: '100%' }} onClick={onHeroButtonClick} color="secondary">
                  Email Us
                </Button>
                <h4>Hours</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>Sunday</td>
                      <td>Closed</td>
                    </tr>
                    <tr>
                      <td>Monday</td>
                      <td>8am–4pm</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>8am–4pm</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>8am–4pm</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>8am–4pm</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>8am–4pm</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Column>
            <Column widthMd={6} widthLg={7}>
              <GoogleMap />
            </Column>
          </Row>
        </Grid>
      </Section>
    </Screen>
  );
};

Contact.propTypes = {
  onHeroButtonClick: PropTypes.func
};

Contact.defaultProps = {
  onHeroButtonClick: null
};
