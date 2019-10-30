import React from 'react';
import { EMAIL } from 'constants/email';

export const WealthProcessGoals = () => (
  <div>
    <p>
      We want to understand your goals and objectives, and even your concerns. What’s keeping you up at night? What life
      events are you preparing to celebrate? In order for us to understand your financial priorities, reach out to
      schedule time to connect with each other.{' '}
      <strong>Let’s start with where you are today, we’ll help you with where you want to be tomorrow.</strong>
    </p>
    <p>
      You can reach out by calling our office or emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
    </p>
    <p>
      During your initial contact with our office, we will provide details on the next steps to working with our team,
      such as costs, time commitment and how to prepare for your first engagement with our advisory team.
    </p>
  </div>
);
