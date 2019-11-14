import React from 'react';
import { EMAIL } from 'constants/email';

export const TaxProcessGoals = () => (
  <div>
    <p>
      You can reach out by calling our office or emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
    </p>
    <p>
      During your initial contact with our office, we will provide details on the next steps to working with our team,
      such as costs, time commitment, and how to prepare for your first engagement. This will include a brief interview
      to verify or collect information.
    </p>
  </div>
);
