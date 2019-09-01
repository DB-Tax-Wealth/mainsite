import { connect } from 'react-redux';
import { closeAccountAccess, selectAccountAccess } from 'store/account-access/account-access';
import { AccountAccessModal } from './account-access-modal';

const mapStateToProps = state => ({
  active: selectAccountAccess(state)
});

const mapDispatchToProps = {
  onOverlayClick: closeAccountAccess
};

export const AccountAccessModalConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountAccessModal);
