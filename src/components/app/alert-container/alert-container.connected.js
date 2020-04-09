import { connect } from 'react-redux';
import { selectAlerts } from 'store/alerts/alerts';
import { AlertContainer } from './alert-container';

const mapStateToProps = (state) => ({
  alerts: selectAlerts(state),
});

const mapDispatchToProps = {};

export const AlertsContainerConnected = connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
