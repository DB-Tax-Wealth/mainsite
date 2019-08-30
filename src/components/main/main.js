import React, { Component } from 'react';

import { App } from 'components/main/app/app';
import PropTypes from 'prop-types';
import { MobileNavigation } from './mobile-navigation/mobile-navigation';
import { Header } from './header/header';

export class Main extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  };

  static defaultProps = {
    children: null
  };

  constructor(props) {
    super(props);
    this.state = { mobileNavigationActive: false };

    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  toggleMobileNavigation() {
    const { mobileNavigationActive } = this.state;
    this.setState({ mobileNavigationActive: !mobileNavigationActive });
  }

  render() {
    const { children } = this.props;
    const { mobileNavigationActive } = this.state;

    return (
      <App>
        <Header onMobileNavigationToggleClick={this.toggleMobileNavigation} />
        {children}
        <MobileNavigation active={mobileNavigationActive} onCloseClick={this.toggleMobileNavigation} />
      </App>
    );
  }
}
