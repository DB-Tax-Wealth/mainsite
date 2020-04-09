import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'components/app/alert/alert';
import styles from './alert-container.style.scss';

export class AlertContainer extends Component {
  static propTypes = {
    alerts: PropTypes.array,
  };

  static defaultProps = {
    alerts: [],
  };

  getAlerts() {
    const { alerts } = this.props;
    const result = [];

    alerts.forEach((alert) => {
      const { children, color, onDismiss, title } = alert;

      result.push(
        <Alert color={color} onDismiss={onDismiss} title={title}>
          {children}
        </Alert>
      );
    });

    return result;
  }

  render() {
    const alerts = this.getAlerts();

    if (alerts.length < 1) return null;

    return <div className={styles.root}>{alerts}</div>;
  }
}
