import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Icon } from 'components/layout/icon/icon';
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

    this.handleOnClick = this.handleOnClick.bind(this);
    this.toggleChildren = this.toggleChildren.bind(this);
  }

  toggleChildren() {
    const { childrenActive } = this.state;
    this.setState({ childrenActive: !childrenActive });
  }

  handleOnClick() {
    const { onClick } = this.props;
    onClick();
    this.setState({ childrenActive: false });
  }

  render() {
    const { active, path, routes, title } = this.props;
    const { childrenActive } = this.state;

    const childRouteKeys = Object.keys(routes);
    const className = classnames(styles.root, { [styles.active]: active, [styles.childrenActive]: childrenActive });
    const hasChildRoutes = Boolean(childRouteKeys.length);

    return (
      <div className={className}>
        <div className={styles.primary}>
          <NavLink to={path} style={{ flex: 1 }} onClick={this.handleOnClick}>
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
                  <NavLink to={combinedPath} onClick={this.handleOnClick} style={{ flex: 1 }}>
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
