import { connect } from 'react-redux';
import { openAccountAccess } from 'store/account-access/account-access';
import { AccountAccessButton } from './account-access-button';

const mapStateToProps = undefined;

const mapDispatchToProps = {
  onClick: openAccountAccess
};

export const AccountAccessButtonConnected = connect(mapStateToProps, mapDispatchToProps)(AccountAccessButton);
