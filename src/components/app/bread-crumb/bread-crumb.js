import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { get, find } from 'lodash';
import { Icon } from 'components/layout/icon/icon';
import { ROUTES } from 'constants/routes';
import styles from './bread-crumb.style.scss';

const BreadCrumbBase = (props) => {
  const path = get(props, 'match.path', '');

  const keys = path.split('/').filter((key) => Boolean(key));
  const routes = keys.map((key) => find(ROUTES, { key }));

  if (routes.length < 2) return null;

  return (
    <div className={styles.root}>
      {routes.map((route, index) => {
        const { title, path: routePath, key } = route;
        const showChevron = Boolean(index);

        return (
          <>
            {showChevron && <Icon name="chevron-right" className="margin--right--half" />}
            <Link to={routePath} key={key} style={{ textDecoration: 'none' }}>
              <span className="margin--right--half">{title}</span>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export const BreadCrumb = withRouter(BreadCrumbBase);
