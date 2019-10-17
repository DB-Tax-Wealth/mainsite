import React from 'react';

import { ADDRESS } from 'constants/address';
import { EMAIL } from 'constants/email';
import { FAX_NUMBER } from 'constants/fax-number';
import { PHONE_NUMBER } from 'constants/phone-number';

import { convertPhoneNumberToTelLink } from 'util/convert-phone-number-to-tel-link/convert-phone-number-to-tel-link';

import { Screen } from 'components/layout/screen/screen';
import { Section } from 'components/layout/section/section';
import { Hero } from 'components/layout/hero/hero';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { GoogleMap } from 'components/screens/home/google-map/google-map';
import { QuestionForm } from './question-form';

const phoneLink = convertPhoneNumberToTelLink(PHONE_NUMBER);
const faxLink = convertPhoneNumberToTelLink(FAX_NUMBER);

export const Contact = () => {
  return (
    <Screen>
      <Hero title="Get in Touch" subtitle="Contact">
        <p>
          Feel free to reach out anytime at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </Hero>
      <Section color="white">
        <Grid className="">
          <Row>
            <Column widthSm={12} widthMd={6} widthLg={8}>
              <Row>
                <Column widthMd={6}>
                  <div>
                    <h4>South Milwaukee Office</h4>
                    <p>
                      <strong>Address:</strong>
                      <br />
                      <a href={ADDRESS.GOOGLE_MAPS} target="_blank" rel="noopener noreferrer">
                        {ADDRESS.STREET}
                        <br />
                        {ADDRESS.CITY}, {ADDRESS.STATE} · {ADDRESS.ZIP}
                      </a>
                      <br />
                      <strong>Phone:</strong> <a href={phoneLink}>{PHONE_NUMBER}</a>
                      <br />
                      <strong>Fax:</strong> <a href={faxLink}>{FAX_NUMBER}</a>
                    </p>
                    <table>
                      <tbody>
                        <tr>
                          <td>Monday</td>
                          <td>8AM–4PM</td>
                        </tr>
                        <tr>
                          <td>Tuesday</td>
                          <td>8AM–4PM</td>
                        </tr>
                        <tr>
                          <td>Wednesday</td>
                          <td>8AM–4PM</td>
                        </tr>
                        <tr>
                          <td>Thursday</td>
                          <td>8AM–4PM</td>
                        </tr>
                        <tr>
                          <td>Friday</td>
                          <td>8AM–4PM</td>
                        </tr>
                        <tr>
                          <td>Saturday</td>
                          <td>Closed</td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>Closed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Column>
                <Column widthMd={6}>
                  <GoogleMap showAddress={false} />
                </Column>
              </Row>
            </Column>
            <Column widthSm={12} widthMd={6} widthLg={4} className="padding--xs--vertical padding--sm--vertical--none">
              <QuestionForm />
            </Column>
          </Row>
        </Grid>
      </Section>
    </Screen>
  );
};
