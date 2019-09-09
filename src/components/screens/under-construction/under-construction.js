import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Icon } from 'components/layout/icon/icon';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

export const UnderConstruction = () => {
  return (
    <Screen>
      <div
        className="display--flex text-align--center padding--all"
        style={{ alignItems: 'center', justifyContent: 'center', minHeight: '20rem' }}
      >
        <div className="max-width--sm">
          <h1>
            <Icon name="exclamation-triangle" className="color--warning" />
            <div>Under Construction</div>
          </h1>
          <p>
            This page is currently under construction. Please check back soon. Click <Link to={ROUTES.HOME}>here</Link>{' '}
            to return to the <strong>Home&nbsp;Screen</strong>.
          </p>
        </div>
      </div>
    </Screen>
  );
};
