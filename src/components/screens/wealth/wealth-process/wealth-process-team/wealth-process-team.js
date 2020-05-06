/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

export const WealthProcessTeam = () => (
  <div>
    <p>
      Your financial story is unique. In order to build a snapshot of your financial picture help our team understand
      your situation. You will <Link to={ROUTES.WEALTH_DOCUMENTS.path}>provide the following documents</Link> prior to
      your next meeting. These items are necessary to design your financial plan.
    </p>
    <p>See relevant documents:</p>
    <ul>
      <li> Income and Expenses</li>
      <li> Personal Info (SSN, DOB, DL#, Bank Info/CheckBook/Void Check, Beneficiary info w/SSN and DOB)</li>
    </ul>
  </div>
);
