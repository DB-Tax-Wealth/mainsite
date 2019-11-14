import React from 'react';
import { EMAIL } from 'constants/email';

export const AccountingProcessGoals = () => (
  <div>
    <p>
      You can reach out by calling our office or emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
    </p>
    <p>
      During your initial contact with our office, we will provide details on the next steps to working with our team.
      We prefer an in person meeting meeting for our first engagement so we can identify your specific goals and
      objectives surrounding your business.
    </p>
  </div>
);
