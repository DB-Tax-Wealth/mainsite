import React, { Component } from 'react';

import { App } from 'components/main/app/app';
import PropTypes from 'prop-types';
import { MobileNavigation } from './mobile-navigation/mobile-navigation';
import { ContactBar } from './contact-bar/contact-bar';
import { Navigation } from './navigation/navigation';
import styles from './main.style.scss';
import { Footer } from './footer/footer';

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
        <div className={styles.root}>
          <ContactBar />
          <Navigation onMobileNavigationToggleClick={this.toggleMobileNavigation} />
          {children}
          <Footer />
        </div>
        <MobileNavigation active={mobileNavigationActive} onCloseClick={this.toggleMobileNavigation} />
      </App>
    );
  }
}
