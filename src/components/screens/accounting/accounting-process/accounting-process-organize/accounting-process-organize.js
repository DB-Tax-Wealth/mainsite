import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

export const AccountingProcessOrganize = () => (
  <div>
    <p>
      Your business is unique and requires a personalized approach to planning. In order to deliver the best experience,
      we will <Link to={ROUTES.ACCOUNTING_QUICK_LINKS.path}>provide check-lists and tools</Link> to gather the necessary
      information for optimal results tailored to your needs. Not only will this process help satisfy your tax reporting
      requirements, it will also allow us to analyze and deliver recommendations on how to save taxes and protect your
      business.
    </p>
  </div>
);
