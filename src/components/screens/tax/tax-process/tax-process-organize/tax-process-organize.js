import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

export const TaxProcessOrganize = () => (
  <div>
    <p>
      Your tax situation is unique. In order to provide the best experience, we will need you to gather important
      information in advance. You will <Link to={ROUTES.TAX_DOCUMENTS.path}>provide the following documents</Link> for
      our intake process by using one of the following: secure digital drop, in person during a private consultation,
      express drop, fax, US Mail, or private carrier.
    </p>
  </div>
);
