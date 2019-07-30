import React, { Component } from 'react';

import { App } from 'components/main/app/app';
import { ContactBar } from 'components/main/contact-bar/contact-bar';
import { Navigation } from 'components/main/navigation/navigation';
import PropTypes from 'prop-types';
import { MobileNavigation } from './mobile-navigation/mobile-navigation';

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
        <ContactBar />
        <Navigation onMobileNavigationToggleClick={this.toggleMobileNavigation} />
        {children}
        <MobileNavigation active={mobileNavigationActive} onCloseClick={this.toggleMobileNavigation} />
      </App>
    );
  }
}
