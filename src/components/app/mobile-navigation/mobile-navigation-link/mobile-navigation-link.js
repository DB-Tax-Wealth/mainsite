import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Icon } from 'components/icon/icon';
import classnames from 'classnames';
import styles from './mobile-navigation-link.style.scss';

export class MobileNavigationLink extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    path: PropTypes.string,
    routes: PropTypes.object,
    title: PropTypes.string
  };

  static defaultProps = {
    active: false,
    onClick: null,
    path: '',
    routes: {},
    title: ''
  };

  constructor(props) {
    super(props);
    this.state = { childrenActive: false };

    this.toggleChildren = this.toggleChildren.bind(this);
  }

  toggleChildren() {
    const { childrenActive } = this.state;
    this.setState({ childrenActive: !childrenActive });
  }

  render() {
    const { active, onClick, path, routes, title } = this.props;
    const { childrenActive } = this.state;

    const childRouteKeys = Object.keys(routes);
    const className = classnames(styles.root, { [styles.active]: active, [styles.childrenActive]: childrenActive });
    const hasChildRoutes = Boolean(childRouteKeys.length);

    return (
      <div className={className}>
        <div className={styles.primary}>
          <NavLink to={path} style={{ flex: 1 }} onClick={onClick}>
            {title}
          </NavLink>
          {hasChildRoutes && (
            <button type="button" onClick={this.toggleChildren} className={styles.icon}>
              <Icon name="plus" />
            </button>
          )}
        </div>
        {hasChildRoutes && (
          <div className={styles.children}>
            {childRouteKeys.map(key => {
              const route = routes[key];
              const { path: childPath, title: childTitle } = route;
              const combinedPath = `${path}${childPath}`;

              return (
                <div key={key} className={styles.primary}>
                  <NavLink to={combinedPath} onClick={onClick} style={{ flex: 1 }}>
                    {childTitle}
                  </NavLink>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
