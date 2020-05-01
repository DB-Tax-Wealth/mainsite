import React from 'react';
import { Screen } from 'components/layout/screen/screen';
import { Icon } from 'components/layout/icon/icon';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

export const NoMatch = () => {
  return (
    <Screen metaTitle="Page Not Found">
      <div
        className="display--flex text-align--center padding--all"
        style={{ alignItems: 'center', justifyContent: 'center', minHeight: '20rem' }}
      >
        <div className="max-width--sm">
          <h1>
            <Icon name="exclamation-circle" className="color--danger" />
            <div>Page Not Found</div>
          </h1>
          <p>
            The page you&apos;re attempting to access has been moved or deleted. Click{' '}
            <Link to={ROUTES.HOME.path}>here</Link> to return to the <strong>Home&nbsp;Screen</strong>.
          </p>
        </div>
      </div>
    </Screen>
  );
};
