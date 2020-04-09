import 'animate.css/animate.css';
import 'normalize.css/normalize.css';
import 'styles/index.scss';

import React, { Component, createRef } from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import styles from './app.style.scss';
import { ContactBar } from './contact-bar/contact-bar';
import { Navigation } from './navigation/navigation';
import { Footer } from './footer/footer';
import { MobileNavigation } from './mobile-navigation/mobile-navigation';
import { AccountAccessModalConnected } from './account-access-modal/account-access-modal.connected';
import { ContactFormConnected } from './contact-form/contact-form.connected';
import { AlertsContainerConnected } from './alert-container/alert-container.connected';

class AppBase extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    history: PropTypes.object,
    onHistoryChange: PropTypes.func,
  };

  static defaultProps = {
    children: null,
    history: { listen: () => {} },
    onHistoryChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = { mobileNavigationActive: false };
    this.content = createRef();

    this.handleHistoryChange = this.handleHistoryChange.bind(this);
    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    const { listen } = history;
    // When the app.js component mounts it fires an event called 'appReady'
    const event = new CustomEvent('appReady', {
      bubbles: true,
      cancelable: false,
    });

    document.dispatchEvent(event);

    // This is used to close modals when the user changes routes
    listen(this.handleHistoryChange);
  }

  componentDidUpdate(prevProps) {
    const pathName = get(this.props, 'location.pathname', '');
    const prevPathName = get(prevProps, 'location.pathname', '');

    // Since this is a Single-Page Application, the router is replacing
    // pages in the DOM, instead of the browser refreshing the page.
    // This causes the scroll position to not update when a user changes
    // routes.  The code below will scroll the content of the page
    // back to the top when the route path changes.
    if (pathName !== prevPathName) this.content.current.scrollTo(0, 0);
  }

  handleHistoryChange() {
    const { onHistoryChange } = this.props;
    onHistoryChange();
  }

  toggleMobileNavigation() {
    const { mobileNavigationActive } = this.state;
    this.setState({ mobileNavigationActive: !mobileNavigationActive });
  }

  render() {
    const { children } = this.props;
    const { mobileNavigationActive } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.content} ref={this.content}>
          <ContactBar />
          <Navigation onMobileNavigationToggleClick={this.toggleMobileNavigation} />
          {children}
          <Footer />
        </div>
        <AccountAccessModalConnected />
        <ContactFormConnected />
        <MobileNavigation active={mobileNavigationActive} onCloseClick={this.toggleMobileNavigation} />
        <AlertsContainerConnected />
      </div>
    );
  }
}

export const App = withRouter(AppBase);
