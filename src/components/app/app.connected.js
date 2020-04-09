import { connect } from 'react-redux';
import { closeContactForm } from 'store/contact-form/contact-form';
import { closeAccountAccess } from 'store/account-access/account-access';
import { App } from './app';

const mapStateToProps = undefined;

const mapDispatchToProps = (dispatch) => ({
  onHistoryChange: () => {
    dispatch(closeAccountAccess());
    dispatch(closeContactForm());
  },
});

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
